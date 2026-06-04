import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: "#" },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something"
      description="Have a project in mind or just want to say hi? My inbox is always open."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {infoItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-white/20 hover:bg-white/5 transition-all group"
            >
              <div className="size-11 grid place-items-center rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                <item.icon className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="font-medium">{item.value}</div>
              </div>
            </a>
          ))}
          <div className="glass rounded-2xl p-5">
            <div className="text-xs text-muted-foreground mb-3">Follow me</div>
            <div className="flex gap-2">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="size-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="glass-strong rounded-2xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
          </div>
          <Field label="Subject" name="subject" required placeholder="Let's work together" />
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-5 py-3 rounded-xl shadow-glow hover:scale-[1.01] transition-transform disabled:opacity-60"
          >
            <Send className="size-4" />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-1.5 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
      />
    </div>
  );
}
