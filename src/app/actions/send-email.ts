"use server";

import { Data } from "@/lib/constants";
import nodemailer from "nodemailer";

export async function sendContactEmail(data: {
  fullName: string;
  email: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST,
      service: "gmail",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        '"TechNova Contact" <support@technovasummit.com>',
      to: Data.Mail,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
