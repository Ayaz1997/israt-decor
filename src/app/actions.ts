'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters."}),
  email: z.string().email({ message: "Please enter a valid email address."}),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits."}),
  workRequirement: z.enum([
    "False Ceiling",
    "Modular Kitchen",
    "Carpentry",
    "Electrical",
    "AC Installation",
    "Wardrobe",
  ], {
    errorMap: () => ({ message: "Please select a valid work requirement." }),
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters."}),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    contactNumber: formData.get('contactNumber'),
    workRequirement: formData.get('workRequirement'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.errors.map(e => e.message).join(' ');
    return {
      message: errorMessage,
      success: false,
    };
  }

  const { name, email, contactNumber, workRequirement, message } = validatedFields.data;

  // Make sure to set your RESEND_API_KEY in your .env file
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'ISRAT DECOR <onboarding@resend.dev>', // This must be a verified domain on Resend
      to: 'hello@isratdecor.com',
      reply_to: email,
      subject: `${workRequirement} by ${name}`,
      html: `
        <p>You have a new work proposal with the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Contact Number:</strong> ${contactNumber}</li>
          <li><strong>Work Requirement:</strong> ${workRequirement}</li>
        </ul>
        <h2>Message:</h2>
        <p>${message}</p>
      `
    });
    
    return {
      message: 'Thank you for your proposal! We will get back to you soon.',
      success: true,
    };

  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      message: 'There was an error sending your proposal. Please try again later.',
      success: false,
    };
  }
}
