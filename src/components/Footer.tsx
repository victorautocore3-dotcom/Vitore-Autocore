import {Link} from 'react-router-dom';
import {Instagram, Mail, MapPin, MessageCircle} from 'lucide-react';
import {BUSINESS_FACTS, SERVICE_LINKS} from '../data/business';

export function Footer() {
  return (
    <footer className="border-t border-[#2C2C28] bg-[#111110]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center shrink-0"
            >
              <img
                src="/logo.svg"
                alt={BUSINESS_FACTS.businessName}
                className="h-9 sm:h-10 w-auto block"
              />
            </Link>
            <p className="text-sm text-[#B3B2AB] leading-relaxed max-w-md">
              Owner: {BUSINESS_FACTS.ownerFullName}, known as {BUSINESS_FACTS.ownerKnownAs}.
            </p>
            <p className="text-sm text-[#B3B2AB] leading-relaxed flex items-start gap-2 max-w-md">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
              <span>{BUSINESS_FACTS.serviceAreaStatement}</span>
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h2 className="text-sm font-semibold text-[#F4F3EE]">Services and Pages</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#B3B2AB] hover:text-[#F59E0B] transition-colors">
                  Home
                </Link>
              </li>
              {SERVICE_LINKS.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-[#B3B2AB] hover:text-[#F59E0B] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-[#B3B2AB] hover:text-[#F59E0B] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#B3B2AB] hover:text-[#F59E0B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="text-sm font-semibold text-[#F4F3EE]">Direct Contact</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${BUSINESS_FACTS.email}`}
                  className="inline-flex items-center gap-2.5 text-[#B3B2AB] hover:text-[#F59E0B] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_FACTS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#B3B2AB] hover:text-[#F59E0B] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {BUSINESS_FACTS.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_FACTS.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#B3B2AB] hover:text-[#F59E0B] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span>Instagram: {BUSINESS_FACTS.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#2C2C28] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#85847E]">
          <p>
            {BUSINESS_FACTS.businessName} · {BUSINESS_FACTS.ownerFullName} ({BUSINESS_FACTS.ownerKnownAs})
          </p>
          <p>Lagos, Nigeria · Serving UK and US clients remotely</p>
        </div>
      </div>
    </footer>
  );
}
