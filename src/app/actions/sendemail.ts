"use server";
import { ContactTemplate } from "@/components/email/email";
import { Resend } from "resend";
import { z } from "zod";
import { ContactSchema } from "@/app/contact/form";

export async function SendEmail(values: z.infer<typeof ContactSchema>) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await resend.emails.send({
      from: `${values.fullnames} <onboarding@resend.dev>`,
      reply_to: values.email,
      to: [process.env.JUSTINE_GICHANA_EMAIL || ""],
      subject: values.organization,
      react: ContactTemplate(values),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
