import { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
          subject: `[RI Research Lab] ${formData.subject}`,
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

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-neural/30 bg-neural/5 text-neural">
            <MessageCircle className="h-3.5 w-3.5 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="section-title hero-text">Contact Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-12">
            Ready to collaborate on research, have questions about our projects, or interested in
            joining our team? We read every message and respond within 24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 hero-text">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Research Inquiries</h4>
                  <a href="mailto:researchlabri@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    researchlabri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+8801511803004</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neural/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-neural" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Website</h4>
                  <p className="text-muted-foreground">riresearchlab.github.io</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-data/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-data" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 research-card">
            <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Prefer email? Reach us directly at <a href="mailto:researchlabri@gmail.com" className="text-primary hover:underline font-medium">researchlabri@gmail.com</a>
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

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

              <Button type="submit" disabled={sending} className="w-full data-glow btn-primary">
                <Send className="h-4 w-4 mr-2" />
                {sending ? 'Sending…' : 'Send Message'}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border text-center">
              We typically respond within 24-48 hours during business days.
              <br />
              <span className="text-primary/70">For urgent collaboration inquiries, please email us directly.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;