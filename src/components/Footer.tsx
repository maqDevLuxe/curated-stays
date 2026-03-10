import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream section-padding py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-semibold mb-4">MAISON</h3>
          <p className="editorial-body text-cream/70 max-w-xs">
            Curating the world's most extraordinary boutique hotel experiences since 2018.
          </p>
        </div>

        <div>
          <h4 className="editorial-label text-cream/50 mb-6">Discover</h4>
          <ul className="space-y-3">
            {["Hotels", "Experiences", "Cities", "Architecture"].map((item) => (
              <li key={item}>
                <Link to="/hotels" className="editorial-body text-cream/80 hover:text-cream transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="editorial-label text-cream/50 mb-6">Company</h4>
          <ul className="space-y-3">
            {["About", "Careers", "Press", "Contact"].map((item) => (
              <li key={item}>
                <span className="editorial-body text-cream/80 hover:text-cream transition-colors cursor-pointer">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="editorial-label text-cream/50 mb-6">Membership</h4>
          <ul className="space-y-3">
            {["Black Card", "Benefits", "Apply", "Gift Cards"].map((item) => (
              <li key={item}>
                <Link to="/membership" className="editorial-body text-cream/80 hover:text-cream transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="editorial-body text-cream/40 text-xs">
          © 2026 MAISON. All rights reserved.
        </p>
        <div className="flex gap-8">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <span key={item} className="editorial-body text-cream/40 text-xs hover:text-cream/70 transition-colors cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
