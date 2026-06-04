import { motion } from "framer-motion";
import { Section } from "./Section";
import { techStack } from "@/lib/portfolio-data";

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title="Tools I build with"
      description="A curated toolkit refined across 5+ years of shipping production software."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(techStack).map(([category, items], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.04 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-white/20 hover:bg-white/10 transition-colors cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
