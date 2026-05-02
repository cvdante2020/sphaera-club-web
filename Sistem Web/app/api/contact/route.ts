import nodemailer from "nodemailer";

export async function POST(req: Request) {

  const body = await req.json()

  const {nombre, liga, telefono, email, mensaje} = body

  const transporter = nodemailer.createTransport({
    host: "mail.sphaera.club",
    port: 587,
    secure: false,
    auth: {
      user: "info@sphaera.club",
      pass: "sIst2m1s202@."
    }
  })

  await transporter.sendMail({
    from: `"Sphaera Club Web" <info@sphaera.club>`,
    to: "info@sphaera.club",
    subject: "Nuevo interesado en Sphaera Club",
    html: `
    <h2>Nuevo contacto desde la web</h2>

    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Liga:</b> ${liga}</p>
    <p><b>Teléfono:</b> ${telefono}</p>
    <p><b>Email:</b> ${email}</p>

    <p><b>Mensaje:</b></p>
    <p>${mensaje}</p>
    `
  })

  return Response.json({ok:true})

}