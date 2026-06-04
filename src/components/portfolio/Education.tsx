import { motion } from "framer-motion";
import { Section } from "./Section";
import { education } from "@/lib/portfolio-data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="size-11 grid place-items-center rounded-xl bg-gradient-primary shrink-0">
                <GraduationCap className="size-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono text-muted-foreground">{e.duration}</div>
                <h3 className="text-lg font-bold mt-1">{e.degree}</h3>
                <div className="text-gradient text-sm">{e.institution}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {e.coursework.map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
