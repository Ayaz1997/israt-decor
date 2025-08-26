'use server';

// This file is not currently in use for form submission, 
// as the contact form now uses a client-side mailto: link.
// It can be used for other server actions in the future.

export type FormState = {
  message: string;
  success: boolean;
};
