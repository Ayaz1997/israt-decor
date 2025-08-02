'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters."}),
  email: z.string().email({ message: "Please enter a valid email address."}),
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
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.errors.map(e => e.message).join(' ');
    return {
      message: errorMessage,
      success: false,
    };
  }
  
  // In a real app, you would send an email here.
  // For example, using Nodemailer or a service like Resend.
  console.log('Form data:', validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    success: true,
  };
}
