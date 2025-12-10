"use server";

export async function sendContactEmail(data: {
  fullName: string;
  email: string;
  message: string;
}) {
  try {
    // Using Resend API - you'll need to set RESEND_API_KEY environment variable
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "contact@technovasummit.com",
        to: "contact@technovasummit.com",
        subject: `New Contact Form Submission from ${data.fullName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
