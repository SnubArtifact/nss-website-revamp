import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './email-config';

// Initialize EmailJS (only if config is properly set)
if (EMAIL_CONFIG.PUBLIC_KEY && EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // Check if EmailJS is properly configured
  if (!EMAIL_CONFIG.PUBLIC_KEY || EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
    throw new Error('EmailJS is not configured. Using fallback method.');
  }

  try {
    // Prepare template parameters
    const templateParams = {
      [EMAIL_CONFIG.TEMPLATE_VARS.to_email]: EMAIL_CONFIG.TO_EMAIL,
      [EMAIL_CONFIG.TEMPLATE_VARS.from_name]: `${formData.firstName} ${formData.lastName}`,
      [EMAIL_CONFIG.TEMPLATE_VARS.from_email]: formData.email,
      [EMAIL_CONFIG.TEMPLATE_VARS.subject]: formData.subject,
      [EMAIL_CONFIG.TEMPLATE_VARS.message]: formData.message,
      [EMAIL_CONFIG.TEMPLATE_VARS.reply_to]: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`Email sending failed with status: ${response.status}`);
    }

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

// Alternative simple implementation using mailto (fallback)
export const sendEmailViaMailto = (formData: ContactFormData): void => {
  const { firstName, lastName, email, subject, message } = formData;
  
  const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
  `.trim();

  const mailtoUrl = `mailto:${EMAIL_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
  // Open default email client
  window.location.href = mailtoUrl;
};
