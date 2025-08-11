// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your public key from the integration section
// 5. Update the values below

export const EMAIL_CONFIG = {
  // Replace these with your actual EmailJS values
  SERVICE_ID: "service_g9nup8y",
  TEMPLATE_ID: "template_pconfp9",
  PUBLIC_KEY: "9cmYn1s6NNeKVoDK-",

  // Email settings
  TO_EMAIL: "nss@pilani.bits-pilani.ac.in",

  // Template variable names (these should match your EmailJS template)
  TEMPLATE_VARS: {
    to_email: "to_email",
    from_name: "from_name",
    from_email: "from_email",
    subject: "subject",
    message: "message",
    reply_to: "reply_to",
  },
};

// Email template guide:
// Create a template in EmailJS with these variables:
// - {{to_email}} - Recipient email (atharv20agarwal@gmail.com)
// - {{from_name}} - Sender's full name
// - {{from_email}} - Sender's email address
// - {{subject}} - Email subject
// - {{message}} - Email body/message
// - {{reply_to}} - Reply-to email address

export const EMAIL_TEMPLATE_EXAMPLE = `
Subject: {{subject}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
This message was sent from the NSS BITS Pilani website contact form.
Reply to: {{reply_to}}
`;
