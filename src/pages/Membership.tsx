import ScrollReveal from "@/components/ScrollReveal";
import { Gem, Star, Award, Wine, Clock, Gift, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Silver",
    price: "Complimentary",
    description: "Begin your MAISON journey with essential privileges.",
    perks: ["10% off best available rate", "Early check-in when available", "Welcome amenity", "Access to The Journal"],
  },
  {
    name: "Gold",
    price: "€500 / year",
    description: "Elevated experiences for the seasoned traveler.",
    perks: ["15% off best available rate", "Guaranteed room upgrade", "Late checkout until 2 PM", "€50 dining credit per stay", "Priority reservations"],
    featured: true,
  },
  {
    name: "Black Card",
    price: "By Invitation",
    description: "The ultimate expression of curated luxury travel.",
    perks: ["20% off all bookings", "Suite upgrade when available", "Late checkout until 4 PM", "€150 experience credit", "Private concierge", "Exclusive event access"],
  },
];

const allPerks = [
  { icon: <Gem size={24} />, title: "Priority Access", desc: "First access to new hotel openings and limited-availability experiences." },
  { icon: <Star size={24} />, title: "Suite Upgrades", desc: "Complimentary room upgrades based on membership tier and availability." },
  { icon: <Award size={24} />, title: "Curated Events", desc: "Invitations to private dinners, gallery openings, and design exhibitions." },
  { icon: <Wine size={24} />, title: "Welcome Ritual", desc: "A locally curated welcome gift awaiting you at every property." },
  { icon: <Clock size={24} />, title: "Flexible Stays", desc: "Early check-in and late checkout privileges across the collection." },
  { icon: <Gift size={24} />, title: "Gift Experiences", desc: "Share the MAISON experience with beautifully packaged gift memberships." },
];

const Membership = () => {
  return (
    <main className="pt-24">
      <section className="section-padding py-16 md:py-24">
        <ScrollReveal>
          <p className="editorial-label text-gold mb-4">Membership</p>
          <h1 className="editorial-heading text-foreground mb-6">Join the Circle</h1>
          <p className="editorial-body text-muted-foreground max-w-xl mb-20">
            MAISON membership unlocks a world of privileges designed for those who appreciate the art of exceptional travel.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <div className={`p-8 md:p-10 h-full flex flex-col ${tier.featured ? "bg-charcoal text-cream" : "bg-cream-dark"}`}>
                <p className="editorial-label mb-2" style={{ color: tier.featured ? "hsl(var(--gold))" : "hsl(var(--primary))" }}>
                  {tier.price}
                </p>
                <h3 className="font-display text-3xl mb-3">{tier.name}</h3>
                <p className={`editorial-body mb-8 ${tier.featured ? "text-cream/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className={`editorial-body text-sm flex items-start gap-2 ${tier.featured ? "text-cream/80" : "text-foreground"}`}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: tier.featured ? "hsl(var(--gold))" : "hsl(var(--primary))" }} />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-4 editorial-label transition-colors duration-300 ${
                  tier.featured
                    ? "bg-gold/20 text-gold hover:bg-gold/30"
                    : "bg-primary text-primary-foreground hover:bg-terracotta-dark"
                }`}>
                  {tier.name === "Black Card" ? "Request Invitation" : "Join Now"}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark section-padding py-20 md:py-32">
        <ScrollReveal>
          <p className="editorial-label text-primary text-center mb-4">Benefits</p>
          <h2 className="editorial-heading text-foreground text-center mb-16">Member Privileges</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {allPerks.map((perk, i) => (
            <ScrollReveal key={perk.title} delay={i * 0.08}>
              <div className="text-primary mb-4">{perk.icon}</div>
              <h4 className="font-display text-xl text-foreground mb-2">{perk.title}</h4>
              <p className="editorial-body text-muted-foreground text-sm">{perk.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal section-padding py-16 md:py-24 text-center">
        <ScrollReveal>
          <h2 className="editorial-subheading text-cream mb-4">Ready to elevate your travels?</h2>
          <p className="editorial-body text-cream/60 mb-8 max-w-md mx-auto">
            Join thousands of discerning travelers who trust MAISON for their most memorable stays.
          </p>
          <button className="inline-flex items-center gap-3 editorial-label text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors">
            Apply for Membership <ArrowRight size={16} />
          </button>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Membership;
