import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const DEST_EMAIL = process.env.RESERVA_DEST_EMAIL || "snowboardsierranevada.info@gmail.com";

type ReservaData = {
  nombre: string;
  email: string;
  fecha: string;
  personas: number;
  tipo: string;
  nivel: string;
};

const emailStyles = `
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
  background: #f6f8fa;
  color: #222;
  padding: 32px 0;
`;
const cardStyles = `
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  max-width: 420px;
  margin: 0 auto;
  padding: 32px 28px;
  border: 1px solid #e5e7eb;
`;
const titleStyles = `
  color: #0ea5e9;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`;
const labelStyles = `
  font-weight: 600;
  color: #0ea5e9;
`;
const valueStyles = `
  color: #222;
`;

function reservaHtml({ nombre, email, fecha, personas, tipo, nivel }: ReservaData) {
  return `
    <div style="${emailStyles}">
      <div style="${cardStyles}">
        <div style="${titleStyles}">Nueva reserva recibida</div>
        <ul style="list-style:none;padding:0;margin:0 0 18px 0;">
          <li><span style="${labelStyles}">Nombre:</span> <span style="${valueStyles}">${nombre}</span></li>
          <li><span style="${labelStyles}">Email:</span> <span style="${valueStyles}">${email}</span></li>
          <li><span style="${labelStyles}">Fecha:</span> <span style="${valueStyles}">${fecha}</span></li>
          <li><span style="${labelStyles}">Nº personas:</span> <span style="${valueStyles}">${personas}</span></li>
          <li><span style="${labelStyles}">Tipo de clase:</span> <span style="${valueStyles}">${tipo}</span></li>
          <li><span style="${labelStyles}">Nivel:</span> <span style="${valueStyles}">${nivel}</span></li>
        </ul>
        <div style="font-size:0.95rem;color:#666;">Recibida el ${new Date().toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" })}</div>
      </div>
    </div>
  `;
}

function confirmacionHtml({ nombre, fecha, personas, tipo, nivel }: Omit<ReservaData, "email">) {
  return `
    <div style="${emailStyles}">
      <div style="${cardStyles}">
        <div style="${titleStyles}">¡Reserva confirmada!</div>
        <p style="margin-bottom:18px;">Hola <b>${nombre}</b>,<br>¡Gracias por reservar con <span style="color:#0ea5e9;font-weight:600;">Escuela de Snowboard Sierra Nevada</span>!</p>
        <ul style="list-style:none;padding:0;margin:0 0 18px 0;">
          <li><span style="${labelStyles}">Fecha:</span> <span style="${valueStyles}">${fecha}</span></li>
          <li><span style="${labelStyles}">Nº personas:</span> <span style="${valueStyles}">${personas}</span></li>
          <li><span style="${labelStyles}">Tipo de clase:</span> <span style="${valueStyles}">${tipo}</span></li>
          <li><span style="${labelStyles}">Nivel:</span> <span style="${valueStyles}">${nivel}</span></li>
        </ul>
        <p style="margin-bottom:10px;">En breve nos pondremos en contacto contigo para confirmar los detalles y resolver cualquier duda.</p>
        <p style="margin-bottom:10px;">Si necesitas contactar antes, escríbenos a <a href="mailto:snowboardsierranevada.info@gmail.com" style="color:#0ea5e9;">snowboardsierranevada.info@gmail.com</a> o por WhatsApp al <a href="https://wa.me/34617354031" style="color:#0ea5e9;">+34 617 354 031</a>.</p>
        <div style="margin-top:18px;font-size:1.1rem;font-weight:600;color:#0ea5e9;">¡Nos vemos en la nieve! 🏂❄️</div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  const data = await request.json();
  const { nombre, email, fecha, personas, tipo, nivel } = data as ReservaData;

  try {
    // Email para el administrador
    await resend.emails.send({
      from: "Reservas Escuela Snowboard <onboarding@resend.dev>",
      to: DEST_EMAIL,
      subject: `Nueva reserva de ${nombre}`,
      replyTo: email,
      html: reservaHtml({ nombre, email, fecha, personas, tipo, nivel }),
    });
    // Email de confirmación al usuario
    await resend.emails.send({
      from: "Escuela Snowboard Sierra Nevada <onboarding@resend.dev>",
      to: email,
      subject: "¡Reserva confirmada en Escuela de Snowboard Sierra Nevada!",
      html: confirmacionHtml({ nombre, fecha, personas, tipo, nivel }),
    });
    return NextResponse.json({ ok: true, message: "Reserva enviada por email" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "No se pudo enviar el email" }, { status: 500 });
  }
} 