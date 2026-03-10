import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import architecture from "@/assets/architecture.jpg";
import spa from "@/assets/spa.jpg";
import dining from "@/assets/dining.jpg";

const hotels = [
  { name: "Villa Terracotta", location: "Amalfi Coast, Italy", image: architecture, rating: 4.9, price: "€480", rooms: 24 },
  { name: "The Olive House", location: "Santorini, Greece", image: roomSuite, rating: 4.8, price: "€620", rooms: 16 },
  { name: "Maison Verdure", location: "Provence, France", image: dining, rating: 4.9, price: "€390", rooms: 32 },
  { name: "Riad Amber", location: "Marrakech, Morocco", image: spa, rating: 4.7, price: "€340", rooms: 18 },
  { name: "Casa Moderna", location: "Lisbon, Portugal", image: roomDeluxe, rating: 4.8, price: "€310", rooms: 28 },
  { name: "Hacienda Luna", location: "Tulum, Mexico", image: roomStandard, rating: 4.9, price: "€520", rooms: 14 },
];

const Hotels = () => {
  return (
    <main className="pt-24">
      <section className="section-padding py-16 md:py-24">
        <ScrollReveal>
          <p className="editorial-label text-primary mb-4">Our Collection</p>
          <h1 className="editorial-heading text-foreground mb-6">Curated Hotels</h1>
          <p className="editorial-body text-muted-foreground max-w-xl mb-16">
            Each property in our collection has been personally vetted by our team of architects and hospitality experts.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {hotels.map((hotel, i) => (
            <ScrollReveal key={hotel.name} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="image-hover aspect-[3/2] mb-5">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={12} className="text-primary" />
                      <p className="editorial-label text-muted-foreground">{hotel.location}</p>
                    </div>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="editorial-body text-muted-foreground mt-1">{hotel.rooms} rooms</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={12} className="text-gold fill-current" />
                      <span className="editorial-label text-foreground">{hotel.rating}</span>
                    </div>
                    <p className="font-display text-lg text-primary">From {hotel.price}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-primary section-padding py-16 md:py-20 text-center">
        <ScrollReveal>
          <h2 className="editorial-subheading text-primary-foreground mb-4">Can't find what you're looking for?</h2>
          <p className="editorial-body text-primary-foreground/70 mb-8">Our concierge team can curate a bespoke itinerary just for you.</p>
          <Link to="/#availability" className="inline-flex items-center gap-2 editorial-label text-primary-foreground border-b border-primary-foreground/40 pb-2 hover:border-primary-foreground transition-colors">
            Contact Concierge <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Hotels;
