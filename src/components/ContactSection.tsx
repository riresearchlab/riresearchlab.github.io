import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useToast } from '@/hooks/use-toast';

// Web3Forms access key. Get yours free at https://web3forms.com (enter
// researchlabri@gmail.com, confirm the email, paste the key below or set
// VITE_WEB3FORMS_KEY in a .env file). The key is public-safe by design.
const WEB3FORMS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [topic, setTopic] = useState('Research collaboration');
  const [botField, setBotField] = useState('');
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return; // honeypot tripped — silently drop
    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[RI Research Lab · ${topic}] ${formData.subject}`,
          message: formData.message,
          from_name: 'RI Research Lab Website',
          replyto: formData.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: 'Message sent!',
          description: "Thank you for your interest. We'll get back to you within 24-48 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      toast({
        title: "Couldn't send your message",
        description:
          'Something went wrong. Please email us directly at researchlabri@gmail.com.',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const topics = ['Research collaboration', 'Internship', 'Partnership', 'Media / other'];
  const field =
    'w-full rounded-xl border bg-background px-4 py-3 text-[15px] outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-card focus:ring-4 focus:ring-primary/10';

  const channels = [
    { icon: Mail, label: 'Research inquiries', value: 'researchlabri@gmail.com', href: 'mailto:researchlabri@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+880 1511-803004', href: 'tel:+8801511803004' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
    { icon: Github, label: 'GitHub', value: 'github.com/riresearchlab', href: 'https://github.com/riresearchlab' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let's start a <span className="text-gradient">research conversation</span>.
            </>
          }
          description="Collaboration ideas, questions about a project, or interest in joining the lab — we read every message and reply within 24–48 hours."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal flex flex-col gap-3">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="icon-tile h-11 w-11 shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="surface surface-hover flex items-center gap-4 p-4"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="surface flex items-center gap-4 p-4">
                  {inner}
                </div>
              );
            })}
            <div className="mt-2 flex items-center gap-2 rounded-xl bg-accent/[0.06] px-4 py-3 text-sm text-accent">
              <Clock className="h-4 w-4" />
              Typical response time: 24–48 hours on business days.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal surface p-6 md:p-8" style={{ '--d': '100ms' } as React.CSSProperties}>
            <fieldset>
              <legend className="mb-3 text-sm font-medium">What's this about?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    aria-pressed={topic === t}
                    className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                      topic === t ? 'border-primary bg-primary/[0.07] font-medium text-primary' : 'text-muted-foreground hover:border-foreground/30'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Name</span>
                <input name="name" value={formData.name} onChange={handleChange} required className={field} placeholder="Your full name" autoComplete="name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Email</span>
                <input name="email" type="email" value={formData.email} onChange={handleChange} required className={field} placeholder="you@university.edu" autoComplete="email" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium">Subject</span>
              <input name="subject" value={formData.subject} onChange={handleChange} required className={field} placeholder="A short summary" />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium">Message</span>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className={`${field} resize-none`} placeholder="Tell us about your idea, background or question…" />
            </label>

            {/* Honeypot — hidden from humans, filled by bots */}
            <input
              type="text"
              name="botcheck"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Prefer email? Write to{' '}
                <a href="mailto:researchlabri@gmail.com" className="font-medium text-primary hover:underline">researchlabri@gmail.com</a>
              </p>
              <button type="submit" disabled={sending} className="btn-brand disabled:opacity-60">
                <Send className="h-4 w-4" />
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
