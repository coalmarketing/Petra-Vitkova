'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Jméno je povinné'),
  email: z.string().email('Neplatný email'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Zpráva je povinná'),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  const result = contactSchema.safeParse(rawData);
  
  if (!result.success) {
    return { error: 'Neplatná data formuláře' };
  }

  const { name, email, phone, message } = result.data;

  try {
    // Zde můžete implementovat odesílání emailu
    // Například pomocí Resend, SendGrid nebo jiné služby
    
    console.log('Odesílám email:', { name, email, phone, message });
    
    // Simulace odeslání emailu
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Chyba při odesílání:', error);
    return { error: 'Nepodařilo se odeslat zprávu' };
  }
} 