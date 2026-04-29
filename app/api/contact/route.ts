import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      name,
      email,
      phone,
      propertyType,
      phaseType,
      stories,
      houseNumber,
      streetName,
      suburb,
      state,
      postcode
    } = body

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const senderEmail = process.env.SMTP_USER || 'info@vrjelectrics.com.au';

    // 1. Send Admin Notification
    console.log(`Attempting to send admin notification to electricsvrj@gmail.com...`)
    await transporter.sendMail({
      from: `"VRJ Electrics Leads" <${senderEmail}>`,
      to: 'electricsvrj@gmail.com',
      replyTo: email,
      subject: `New Lead: ${name} - ${propertyType}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #EAB308;">New Lead Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Property Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${propertyType}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phase Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phaseType}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Stories:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${stories}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Address:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${houseNumber} ${streetName}, ${suburb}, ${state} ${postcode}</td></tr>
          </table>
          <p style="margin-top: 20px;"><em>You can reply directly to this email to contact the lead.</em></p>
        </div>
      `,
    })

    // 2. Send Auto-Reply to User
    console.log(`Attempting to send auto-reply to ${email}...`)
    await transporter.sendMail({
      from: `"VRJ Electrics" <${senderEmail}>`,
      to: email,
      subject: 'We received your solar quote request!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #333;">
          <h2 style="color: #EAB308;">Thank You, ${name}!</h2>
          <p>We've received your request for a free solar quote. One of our Victorian solar experts will review your details and contact you within 24 hours.</p>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin-top: 0;"><strong>Next Steps:</strong></p>
            <ul style="padding-left: 20px;">
              <li>Our team will perform a remote roof assessment.</li>
              <li>We'll prepare a custom energy saving proposal.</li>
              <li>A specialist will call you to discuss the best options for your home.</li>
            </ul>
          </div>
          <p>In the meantime, feel free to visit our <a href="https://vrjelectrics.com.au" style="color: #EAB308;">website</a> for more information.</p>
          <br/>
          <p>Best regards,<br/><strong>The VRJ Electrics Team</strong></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
          <p style="font-size: 12px; color: #999; text-align: center;">VRJ Electrics - Premium Solar & Electrical Solutions in Victoria</p>
        </div>
      `,
    })

    console.log('All emails sent successfully')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

