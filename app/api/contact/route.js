import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Almacén temporal en memoria para mantener registro de usuarios
const rateLimitMap = new Map();

export async function POST(request) {
  // Configuración de CORS
  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3001', // Reemplaza con la URL de tu frontend
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const clientIp = request.headers.get('x-forwarded-for') || 'UNKNOWN';
    console.log(`Solicitud de contacto desde ${clientIp}`);
    const now = Date.now();
    const cooldownTime = 300000; // Tiempo en milisegundos (60 segundos = 1 minuto)

    // Verificar si ya existe un registro para esta IP
    if (rateLimitMap.has(clientIp)) {
      const lastRequestTime = rateLimitMap.get(clientIp);

      // Si el último intento está dentro del límite
      if (now - lastRequestTime < cooldownTime) {
        return NextResponse.json(
            { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
            { status: 429, headers }
        );
      }
    }

    // Registrar el tiempo de la solicitud actual
    rateLimitMap.set(clientIp, now);

    // Procesa la solicitud
    const { name, email, phone, message } = await request.json();

    // Configuración de Nodemailer (SMTP)
    const transporter = nodemailer.createTransport({
      host: 'mail.sise.com.ar',
      port: 587,
      secure: false, // Cambiar a `true` para conexiones seguras
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Enviar correo
    await transporter.sendMail({
      from: '"SISE Notificaciones" <notificaciones@sise.com.ar>',
      to: 'info@sise.com.ar',
      subject: `[SISE] Nueva consulta de ${name}`,
      text: `Mensaje:\n\n${message}`,
      html: `
        <div>
          <h2>Nueva consulta</h2>
          <p>Nombre: ${name}</p>
          <p>Email: ${email}</p>
          <p>Teléfono: ${phone || 'Sin teléfono'}</p>
          <p>Mensaje:</p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    // Respuesta exitosa
    return NextResponse.json(
        { success: true },
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
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}