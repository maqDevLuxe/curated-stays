import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Compass, Palette, Utensils, Mountain } from "lucide-react";

import spa from "@/assets/spa.jpg";
import dining from "@/assets/dining.jpg";
import architecture from "@/assets/architecture.jpg";
import infinityPool from "@/assets/infinity-pool.jpg";

const experiences = [
  {
    title: "Artisan Wellness Retreats",
    description: "Immerse yourself in ancient healing traditions. From Hammam rituals in Morocco to onsen ceremonies in Japan.",
    image: spa,
    icon: <Compass size={20} />,
    duration: "3-7 days",
  },
  {
    title: "Culinary Journeys",
    description: "Private cooking classes, vineyard tours, and chef's table experiences at the world's most intimate restaurants.",
    image: dining,
    icon: <Utensils size={20} />,
    duration: "1-5 days",
  },
  {
    title: "Architectural Walking Tours",
    description: "Guided explorations led by local architects through the most inspiring buildings and neighborhoods.",
    image: architecture,
    icon: <Palette size={20} />,
    duration: "Half-day",
  },
  {
    title: "Coastal & Nature Escapes",
    description: "Private boat excursions, mountain hikes with local guides, and sunset picnics in extraordinary landscapes.",
    image: infinityPool,
    icon: <Mountain size={20} />,
    duration: "1-3 days",
  },
];

const Experiences = () => {
  return (
    <main className="pt-24">
      <section className="section-padding py-16 md:py-24">
        <ScrollReveal>
          <p className="editorial-label text-primary mb-4">Beyond the Stay</p>
          <h1 className="editorial-heading text-foreground mb-6">Curated Experiences</h1>
          <p className="editorial-body text-muted-foreground max-w-xl mb-20">
            Each experience is designed to connect you with the soul of a destination—its people, craft, and culture.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={0.1}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="image-hover aspect-[4/3]" style={{ direction: "ltr" }}>
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                </div>
                <div style={{ direction: "ltr" }}>
                  <div className="text-primary mb-4">{exp.icon}</div>
                  <p className="editorial-label text-muted-foreground mb-2">{exp.duration}</p>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{exp.title}</h2>
                  <p className="editorial-body text-muted-foreground max-w-md mb-6">{exp.description}</p>
                  <span className="inline-flex items-center gap-2 editorial-label text-primary cursor-pointer hover:text-terracotta-dark transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Experiences;
