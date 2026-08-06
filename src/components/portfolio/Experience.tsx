import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="My professional journey"
    >
      <div className="relative">
        <div className="absolute sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid sm:grid-cols-2 gap-4 sm:gap-12 ${
                i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 size-3 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                <div className="text-xs font-mono text-muted-foreground">{exp.duration}</div>
                <h3 className="text-2xl font-bold mt-1">{exp.position}</h3>
                <div className="text-gradient font-medium">{exp.company}</div>
              </div>
              <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="size-4 text-accent" />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Highlights</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
