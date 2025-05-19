import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Use a more efficient rate limiting approach with automatic cleanup
const rateLimits = {
  windowMs: 300000, // 5 minutes
  maxRequests: 3,    // 3 requests per window
  clients: new Map(),
  cleanup: null
};

// Cleanup old entries every 15 minutes
if (typeof window === 'undefined' && !rateLimits.cleanup) {
  rateLimits.cleanup = setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of rateLimits.clients.entries()) {
      if (now - data.timestamp > rateLimits.windowMs) {
        rateLimits.clients.delete(ip);
      }
    }
  }, 900000); // 15 minutes
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get CORS headers based on environment
function getCorsHeaders() {
  const origin = process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_SITE_URL || 'https://sise.com.ar'
    : 'http://localhost:3001';

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function POST(request) {
  const headers = getCorsHeaders();

  try {
    // Rate limiting
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || 'UNKNOWN';
    const now = Date.now();

    if (rateLimits.clients.has(clientIp)) {
      const clientData = rateLimits.clients.get(clientIp);

      // Reset count if window has passed
      if (now - clientData.timestamp > rateLimits.windowMs) {
        clientData.count = 1;
        clientData.timestamp = now;
      } else if (clientData.count >= rateLimits.maxRequests) {
        // Too many requests
        return NextResponse.json(
          { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
          { status: 429, headers }
        );
      } else {
        // Increment count
        clientData.count += 1;
      }
    } else {
      // First request from this IP
      rateLimits.clients.set(clientIp, { count: 1, timestamp: now });
    }

    // Parse and validate request data
    const { name, email, phone, message } = await request.json();

    // Input validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'El nombre es requerido y debe tener al menos 2 caracteres.' },
        { status: 400, headers }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Por favor, proporciona un correo electrónico válido.' },
        { status: 400, headers }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'El mensaje es requerido y debe tener al menos 10 caracteres.' },
        { status: 400, headers }
      );
    }

    // Configuración de Nodemailer (SMTP) con mejor seguridad
    const transporter = nodemailer.createTransport({
      host: 'mail.sise.com.ar',
      port: 587,
      secure: false, // TLS upgrade after connection
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Improved security settings
      tls: {
        // Only disable in development if needed
        rejectUnauthorized: process.env.NODE_ENV === 'production',
        minVersion: 'TLSv1.2'
      },
    });

    // Sanitize inputs for email
    const sanitizedName = name.replace(/[<>]/g, '');
    const sanitizedMessage = message.replace(/[<>]/g, '');

    // Enviar correo con contenido sanitizado
    await transporter.sendMail({
      from: '"SISE Notificaciones" <notificaciones@sise.com.ar>',
      to: 'info@sise.com.ar',
      subject: `[SISE] Nueva consulta de ${sanitizedName}`,
      text: `Nombre: ${sanitizedName}\nEmail: ${email}\nTeléfono: ${phone || 'Sin teléfono'}\n\nMensaje:\n\n${sanitizedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nueva consulta</h2>
          <p><strong>Nombre:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || 'Sin teléfono'}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${sanitizedMessage.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    // Respuesta exitosa
    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);

    // Respuesta de error
    return NextResponse.json(
      { error: 'Hubo un error al procesar tu solicitud.' },
      { status: 500, headers }
    );
  }
}

// Manejo de CORS para preflight OPTIONS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: getCorsHeaders()
  });
}
