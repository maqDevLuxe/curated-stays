import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, MapPin, Award, Gem, Wine, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

import heroLobby from "@/assets/hero-lobby.jpg";
import infinityPool from "@/assets/infinity-pool.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import architecture from "@/assets/architecture.jpg";
import spa from "@/assets/spa.jpg";
import dining from "@/assets/dining.jpg";

/* ─── 1. Hero ─── */
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroLobby} alt="Luxury hotel lobby" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 flex flex-col justify-end h-full section-padding pb-16 md:pb-24">
        <ScrollReveal>
          <p className="editorial-label text-cream/80 mb-4">Curated Artistry in Hospitality</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1 className="editorial-heading text-cream max-w-4xl">
            Where Architecture <br />
            <em className="font-normal">Meets Intimacy</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="editorial-body text-cream/80 mt-6 max-w-lg">
            Hand-selected boutique hotels across the world's most inspiring destinations. Every stay, a masterpiece.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <Link to="/hotels" className="inline-flex items-center gap-3 mt-8 editorial-label text-cream border-b border-cream/40 pb-2 hover:border-cream transition-colors">
            Explore Our Collection <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </motion.div>
    </section>
  );
};

/* ─── 2. Curators' Picks ─── */
const CuratorsPicks = () => {
  const picks = [
    { name: "Villa Terracotta", location: "Amalfi Coast, Italy", image: architecture, price: "€480" },
    { name: "The Olive House", location: "Santorini, Greece", image: roomSuite, price: "€620" },
    { name: "Maison Verdure", location: "Provence, France", image: dining, price: "€390" },
  ];

  return (
    <section className="section-padding py-20 md:py-32">
      <ScrollReveal>
        <p className="editorial-label text-primary mb-4">Hand-Picked</p>
        <h2 className="editorial-heading text-foreground mb-16">The Curators' Picks</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {picks.map((pick, i) => (
          <ScrollReveal key={pick.name} delay={i * 0.15}>
            <div className="group cursor-pointer">
              <div className="image-hover aspect-[3/4] mb-5">
                <img src={pick.image} alt={pick.name} className="w-full h-full object-cover" />
              </div>
              <p className="editorial-label text-muted-foreground mb-2">{pick.location}</p>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground">{pick.name}</h3>
              <p className="editorial-body text-muted-foreground mt-1">From {pick.price} / night</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

/* ─── 3. Featured Global Cities ─── */
const GlobalCities = () => {
  const cities = [
    { name: "Florence", country: "Italy", hotels: 12 },
    { name: "Kyoto", country: "Japan", hotels: 8 },
    { name: "Marrakech", country: "Morocco", hotels: 15 },
    { name: "Lisbon", country: "Portugal", hotels: 10 },
    { name: "Tulum", country: "Mexico", hotels: 7 },
  ];

  return (
    <section className="bg-charcoal section-padding py-20 md:py-32">
      <ScrollReveal>
        <p className="editorial-label text-terracotta-light mb-4">Destinations</p>
        <h2 className="editorial-heading text-cream mb-16">Featured Global Cities</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {cities.map((city, i) => (
          <ScrollReveal key={city.name} delay={i * 0.1}>
            <div className="group cursor-pointer border-t border-cream/15 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className="text-terracotta-light" />
                <p className="editorial-label text-cream/50">{city.country}</p>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-cream group-hover:text-terracotta-light transition-colors duration-300">
                {city.name}
              </h3>
              <p className="editorial-body text-cream/40 mt-2">{city.hotels} hotels</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

/* ─── 4. Architecture & Design Focus ─── */
const ArchitectureSection = () => (
  <section className="section-padding py-20 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <ScrollReveal>
        <div className="image-hover aspect-[4/5]">
          <img src={architecture} alt="Architectural detail" className="w-full h-full object-cover" />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="editorial-label text-primary mb-4">Philosophy</p>
        <h2 className="editorial-heading text-foreground mb-8">Architecture <br />& Design Focus</h2>
        <p className="editorial-body text-muted-foreground max-w-md mb-6">
          Every hotel in our collection is chosen for its architectural significance. From restored palazzos to modernist villas, we celebrate spaces where design tells a story.
        </p>
        <p className="editorial-body text-muted-foreground max-w-md">
          Our curation team includes architects, interior designers, and cultural historians who assess each property's design merit, ensuring only the most extraordinary spaces make our collection.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── 5. Guest Satisfaction Metrics ─── */
const CounterItem = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-7xl font-medium text-primary">
        {count}{suffix}
      </p>
      <p className="editorial-label text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

const SatisfactionMetrics = () => (
  <section className="bg-cream-dark section-padding py-20 md:py-32">
    <ScrollReveal>
      <p className="editorial-label text-primary text-center mb-4">By The Numbers</p>
      <h2 className="editorial-heading text-foreground text-center mb-16">Guest Satisfaction</h2>
    </ScrollReveal>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      <CounterItem value={98} label="Satisfaction Rate" suffix="%" />
      <CounterItem value={340} label="Curated Hotels" suffix="+" />
      <CounterItem value={52} label="Countries" />
      <CounterItem value={4.9} label="Average Rating" />
    </div>
  </section>
);

/* ─── 6. Exclusive Amenities ─── */
const AmenitiesSection = () => (
  <section className="section-padding py-20 md:py-32">
    <ScrollReveal>
      <p className="editorial-label text-primary mb-4">Indulge</p>
      <h2 className="editorial-heading text-foreground mb-16">Exclusive Amenities</h2>
    </ScrollReveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ScrollReveal>
        <div className="relative group cursor-pointer">
          <div className="image-hover aspect-[16/10]">
            <img src={spa} alt="Luxury spa" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-charcoal/80 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={16} className="text-cream" />
              <p className="editorial-label text-cream/70">Wellness</p>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-cream">Artisan Spa Rituals</h3>
            <p className="editorial-body text-cream/70 mt-2 max-w-sm">
              Ancient healing traditions meet modern luxury in our curated spa experiences.
            </p>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="relative group cursor-pointer">
          <div className="image-hover aspect-[16/10]">
            <img src={dining} alt="Fine dining" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-charcoal/80 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <Wine size={16} className="text-cream" />
              <p className="editorial-label text-cream/70">Gastronomy</p>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-cream">Chef's Table Dining</h3>
            <p className="editorial-body text-cream/70 mt-2 max-w-sm">
              Michelin-caliber cuisine crafted from locally sourced ingredients.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── 7. Room Types ─── */
const RoomTypes = () => {
  const rooms = [
    { name: "The Signature Suite", size: "85 m²", price: "€780", image: roomSuite },
    { name: "Deluxe Room", size: "45 m²", price: "€420", image: roomDeluxe },
    { name: "Classic Room", size: "32 m²", price: "€280", image: roomStandard },
  ];

  return (
    <section className="bg-charcoal section-padding py-20 md:py-32">
      <ScrollReveal>
        <p className="editorial-label text-terracotta-light mb-4">Accommodations</p>
        <h2 className="editorial-heading text-cream mb-16">Room Types</h2>
      </ScrollReveal>
      {/* Asymmetrical grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <ScrollReveal className="md:col-span-7">
          <div className="group cursor-pointer">
            <div className="image-hover aspect-[4/3]">
              <img src={rooms[0].image} alt={rooms[0].name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-5 flex justify-between items-end">
              <div>
                <h3 className="font-display text-2xl text-cream">{rooms[0].name}</h3>
                <p className="editorial-body text-cream/50 mt-1">{rooms[0].size}</p>
              </div>
              <p className="font-display text-xl text-terracotta-light">From {rooms[0].price}</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="md:col-span-5 flex flex-col gap-6">
          {rooms.slice(1).map((room, i) => (
            <ScrollReveal key={room.name} delay={(i + 1) * 0.15}>
              <div className="group cursor-pointer">
                <div className="image-hover aspect-[3/2]">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-xl text-cream">{room.name}</h3>
                    <p className="editorial-body text-cream/50 mt-1">{room.size}</p>
                  </div>
                  <p className="font-display text-lg text-terracotta-light">From {room.price}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 8. Full-width Infinity Pool ─── */
const InfinityPoolSection = () => (
  <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
    <img src={infinityPool} alt="Infinity pool overlooking the coast" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center">
      <ScrollReveal>
        <p className="font-display text-4xl md:text-6xl lg:text-8xl text-cream text-center italic font-normal">
          Escape the Ordinary
        </p>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── 9. Nights Booked Counters ─── */
const NightsBooked = () => (
  <section className="section-padding py-20 md:py-28 bg-background">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <ScrollReveal>
        <CounterItem value={125000} label="Nights Booked This Year" suffix="+" />
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <CounterItem value={48000} label="Happy Guests" suffix="+" />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <CounterItem value={850} label="Unique Experiences" suffix="+" />
      </ScrollReveal>
    </div>
  </section>
);

/* ─── 10. Travel & Design Magazine ─── */
const MagazineSection = () => {
  const articles = [
    { title: "The Art of Slow Travel", category: "Editorial", excerpt: "Why the world's most discerning travelers are choosing depth over distance." },
    { title: "Concrete & Light: New Brutalist Hotels", category: "Architecture", excerpt: "How raw materials create the most intimate hospitality spaces." },
    { title: "Terroir at the Table", category: "Gastronomy", excerpt: "Farm-to-table dining experiences that define a destination." },
  ];

  return (
    <section className="section-padding py-20 md:py-32 bg-cream-dark">
      <ScrollReveal>
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="editorial-label text-primary mb-4">The Journal</p>
            <h2 className="editorial-heading text-foreground">Travel & Design</h2>
          </div>
          <span className="hidden md:inline-flex items-center gap-2 editorial-label text-foreground cursor-pointer hover:text-primary transition-colors">
            View All <ArrowRight size={14} />
          </span>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <ScrollReveal key={article.title} delay={i * 0.12}>
            <div className="group cursor-pointer border-t border-foreground/10 pt-6">
              <p className="editorial-label text-primary mb-3">{article.category}</p>
              <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                {article.title}
              </h3>
              <p className="editorial-body text-muted-foreground">{article.excerpt}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

/* ─── 11. Black Card Membership ─── */
const MembershipSection = () => {
  const perks = [
    { icon: <Gem size={20} />, title: "Priority Access", desc: "First access to new hotel openings and exclusive events." },
    { icon: <Star size={20} />, title: "Suite Upgrades", desc: "Complimentary room upgrades when available at check-in." },
    { icon: <Award size={20} />, title: "Late Checkout", desc: "Guaranteed late checkout until 4 PM at all properties." },
    { icon: <Wine size={20} />, title: "Welcome Amenities", desc: "Curated local welcome gifts and in-room dining credits." },
  ];

  return (
    <section className="bg-charcoal section-padding py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <ScrollReveal>
          <p className="editorial-label text-gold mb-4">Exclusive</p>
          <h2 className="editorial-heading text-cream mb-6">The Black Card</h2>
          <p className="editorial-body text-cream/60 max-w-md mb-10">
            An invitation-only membership for the world's most discerning travelers. Unlock privileges that transform every stay into an extraordinary experience.
          </p>
          <Link to="/membership" className="inline-flex items-center gap-3 editorial-label text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors">
            Apply for Membership <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {perks.map((perk) => (
              <div key={perk.title}>
                <div className="text-gold mb-3">{perk.icon}</div>
                <h4 className="font-display text-lg text-cream mb-2">{perk.title}</h4>
                <p className="editorial-body text-cream/50 text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ─── 12. Guest Love Stories ─── */
const GuestStories = () => {
  const stories = [
    { quote: "MAISON transformed how we travel. Every hotel feels like it was chosen just for us.", author: "Isabella & Marco", location: "Florence, 2025" },
    { quote: "The architectural curation is unmatched. Each stay is a lesson in design and beauty.", author: "Yuki Tanaka", location: "Kyoto, 2025" },
    { quote: "From the moment we arrived, every detail spoke to an understanding of true luxury.", author: "Sophie Laurent", location: "Provence, 2024" },
  ];

  return (
    <section className="section-padding py-20 md:py-32">
      <ScrollReveal>
        <p className="editorial-label text-primary text-center mb-4">Testimonials</p>
        <h2 className="editorial-heading text-foreground text-center mb-16">Guest Love Stories</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {stories.map((story, i) => (
          <ScrollReveal key={story.author} delay={i * 0.12}>
            <div className="border-t border-foreground/10 pt-8">
              <blockquote className="font-display text-lg md:text-xl italic text-foreground leading-relaxed mb-6">
                "{story.quote}"
              </blockquote>
              <p className="editorial-label text-foreground">{story.author}</p>
              <p className="editorial-body text-muted-foreground text-xs mt-1">{story.location}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

/* ─── 13. Check Availability CTA ─── */
const AvailabilityCTA = () => (
  <section id="availability" className="bg-primary section-padding py-20 md:py-28">
    <ScrollReveal>
      <div className="text-center">
        <h2 className="editorial-heading text-primary-foreground mb-6">Begin Your Journey</h2>
        <p className="editorial-body text-primary-foreground/80 max-w-lg mx-auto mb-10">
          Discover availability across our collection of 340+ curated boutique hotels worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Where would you like to go?"
            className="w-full sm:flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm tracking-wide focus:outline-none focus:border-primary-foreground/50"
          />
          <button className="w-full sm:w-auto px-10 py-4 bg-charcoal text-cream editorial-label hover:bg-foreground transition-colors duration-300">
            Check Availability
          </button>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

/* ─── Main Page ─── */
const Index = () => {
  return (
    <main>
      <HeroSection />
      <CuratorsPicks />
      <GlobalCities />
      <ArchitectureSection />
      <SatisfactionMetrics />
      <AmenitiesSection />
      <RoomTypes />
      <InfinityPoolSection />
      <NightsBooked />
      <MagazineSection />
      <MembershipSection />
      <GuestStories />
      <AvailabilityCTA />
    </main>
  );
};

export default Index;
