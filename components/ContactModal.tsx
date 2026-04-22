'use client';

import { useState, useEffect } from 'react';

interface Props {
  onClose: () => void;
}

interface FormState {
  name: string;
  propertyName: string;
  email: string;
  message: string;
}

export default function ContactModal({ onClose }: Props) {
  const [form, setForm] = useState<FormState>({ name: '', propertyName: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
      } else {
        setSuccess(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close">CLOSE</button>

        {success ? (
          <div className="modal-success">
            <span className="modal-success-mark">INQUIRY RECEIVED</span>
            <p>Thank you. We&apos;ll be in touch to discuss how ORO can complement your property.</p>
          </div>
        ) : (
          <>
            <span className="modal-eyebrow">PARTNERSHIP INQUIRY</span>
            <h2 className="modal-title" id="modal-title">
              Begin the<br /><em>conversation.</em>
            </h2>
            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="modal-field">
                <label className="modal-label" htmlFor="name">YOUR NAME</label>
                <input
                  className="modal-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="modal-field">
                <label className="modal-label" htmlFor="propertyName">PROPERTY NAME</label>
                <input
                  className="modal-input"
                  type="text"
                  id="propertyName"
                  name="propertyName"
                  placeholder="Hotel, resort, or villa"
                  value={form.propertyName}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>
              <div className="modal-field">
                <label className="modal-label" htmlFor="email">EMAIL</label>
                <input
                  className="modal-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="modal-field">
                <label className="modal-label" htmlFor="message">MESSAGE</label>
                <textarea
                  className="modal-textarea"
                  id="message"
                  name="message"
                  placeholder="Tell us about your property and how you envision ORO…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {error && <p className="modal-error">{error}</p>}
              <button className="modal-submit" type="submit" disabled={loading}>
                {loading ? 'SENDING…' : 'SEND INQUIRY'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
