import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, propertyName, email, message } = await req.json();

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Save to Supabase
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ name: name.trim(), property_name: propertyName?.trim() ?? null, email: email.trim(), message: message?.trim() ?? null }]);
      if (dbError) console.error('Supabase insert error:', dbError.message);
    }

    // Send via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const contactEmail = process.env.CONTACT_EMAIL ?? 'hello@crisofi.com';
      await resend.emails.send({
        from: 'ORO <hello@crisofi.com>',
        to: contactEmail,
        subject: `Partnership Inquiry — ${propertyName?.trim() || name.trim()}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 520px; color: #333; line-height: 1.6;">
            <h2 style="font-size: 22px; margin-bottom: 24px;">New Partnership Inquiry</h2>
            <p><strong>Name:</strong> ${name.trim()}</p>
            ${propertyName ? `<p><strong>Property:</strong> ${propertyName.trim()}</p>` : ''}
            <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
            ${message ? `<p style="margin-top: 16px;"><strong>Message:</strong><br>${message.trim()}</p>` : ''}
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
