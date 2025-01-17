import {EmailTemplate} from "@/app/Resend/EmailTemplate"
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Add Response Later
export async function POST(req: NextRequest) {
    // Form Input Values
    const { name, email, subject, message } = await req.json();

    // For Email Props
    const emailData = {
      name: name,
      email: email,
      message: message
    }
    try {

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['michaeldam.dev@gmail.com'],
      subject: `${subject} | ${name}`,
      react: EmailTemplate({ emailData }),

    });
     return Response.json("Message Sent!", {status:200})
    
  } catch (error) {
    return Response.json("Failed", { status: 500 });
  }
}
