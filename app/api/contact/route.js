import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Configura CORS
  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3001', // Reemplaza con la URL de tu frontend
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { name, email, phone, message } = await request.json();

    // Configura Nodemailer (ejemplo con Gmail)
    const transporter = nodemailer.createTransport({
      host: 'mail.sise.com.ar',  // Changed host
      port: 587,  // Changed port to standard SMTP
      secure: false,  // Changed to false for STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: '"SISE Notificaciones" <notificaciones@sise.com.ar>', // Email corporativo
      to: 'info@sise.com.ar',
      subject: `[SISE] Nueva consulta de ${name}`,
      text: `Mensaje en texto plano\n\n${message}`, // Versión alternativa
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nueva consulta</title>
        </head>
        <body style="font-family: Arial, sans-serif;">
          <h2 style="color: #1a5276;">Consulta desde formulario web</h2>
          <p><strong>Cliente:</strong> ${name}</p>
          <p><strong>Contacto:</strong> ${email} | ${phone || 'Sin teléfono'}</p>
          <div style="background-color: #f8f9fa; padding: 15px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="font-size: 12px; color: #7f8c8d; margin-top: 20px;">
            Este mensaje fue generado automáticamente. No responder directamente.
          </p>
        </body>
        </html>
      `,
      headers: {
        'X-Priority': '1',
        'X-Mailer': 'Nodemailer',
        'List-Unsubscribe': '<mailto:unsubscribe@sise.com.ar>'
      }
    });

    return NextResponse.json(
      { success: true },
      { status: 200, headers }
    );
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500, headers }
    );
  }
}

// ¡Importante! Agrega esto para manejar preflight CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}