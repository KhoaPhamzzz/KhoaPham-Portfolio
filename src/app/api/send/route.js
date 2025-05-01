import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL; // Your verified email

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // Sending the actual message to your email with preserved formatting
    await resend.emails.send({
      from: fromEmail,
      replyTo: email, // Setting the Reply-To header to the sender's email
      to: ["akpham28@gmail.com", "AK@khoaphams.com"],
      subject: `New message from ${email}: ${subject}`,
      headers: {
        "Reply-To": email, // Set the Reply-To header
      },
      react: (
        <>
          <p>Sender&apos;s email: {email}</p>
          <h1>{subject}</h1>
          <pre>{message}</pre> {/* Use <pre> tag to preserve formatting */}
        </>
      ),
    });

    // Sending a thank you message to the sender
    await resend.emails.send({
      from: fromEmail,
      to: [fromEmail,email],
      subject: `Thank you for contacting me!`,
      react: (
        <>
          <h1>Thank you for reaching out!</h1>
          <p>Hi, I have received your message regarding: {subject}.</p>
          <p>I&apos;ll get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,</p>
          <p>[Khoa Anh Pham]</p>
        </>
      ),
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
