import {useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ChevronDown, Menu, MessageCircle, X} from 'lucide-react';
import {BUSINESS_FACTS, SERVICE_LINKS} from '../data/business';

export function Header() {
  const {pathname} = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isServiceRoute = SERVICE_LINKS.some((service) => service.path === pathname);

  return (
    <header className="sticky top-0 z-50 bg-[#141413]/95 backdrop-blur-sm border-b border-[#2C2C28]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
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

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B3B2AB]"
        >
          <Link
            to="/"
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#F4F3EE] ${
              pathname === '/' ? 'text-[#F59E0B]' : ''
            }`}
          >
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-[#F4F3EE] cursor-pointer ${
                isServiceRoute ? 'text-[#F59E0B]' : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-80 bg-[#1C1C1A] border border-[#2C2C28] rounded-lg p-2 shadow-xl"
              >
                {SERVICE_LINKS.map((service) => {
                  const active = pathname === service.path;
                  return (
                    <Link
                      key={service.path}
                      to={service.path}
                      role="menuitem"
                      className={`block px-3.5 py-2.5 rounded-md transition-colors ${
                        active
                          ? 'bg-[#242421] text-[#F59E0B]'
                          : 'text-[#F4F3EE] hover:bg-[#242421] hover:text-[#F59E0B]'
                      }`}
                    >
                      <div className="text-sm font-medium">{service.title}</div>
                      <div className="text-xs text-[#85847E] mt-0.5">{service.audience}</div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to="/google-visibility"
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#F4F3EE] ${
              pathname === '/google-visibility' ? 'text-[#F59E0B]' : ''
            }`}
          >
            Google Visibility
          </Link>

          <Link
            to="/about"
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#F4F3EE] ${
              pathname === '/about' ? 'text-[#F59E0B]' : ''
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#F4F3EE] ${
              pathname === '/contact' ? 'text-[#F59E0B]' : ''
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_FACTS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-[#141413] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#2C2C28] bg-[#1C1C1A] text-[#F4F3EE] hover:border-[#F59E0B] transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#2C2C28] bg-[#161614]">
          <nav aria-label="Mobile navigation" className="max-w-[1200px] mx-auto px-4 py-4 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                pathname === '/'
                  ? 'bg-[#1C1C1A] text-[#F59E0B]'
                  : 'text-[#F4F3EE] hover:bg-[#1C1C1A]'
              }`}
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs font-medium text-[#85847E]">Services</div>
            {SERVICE_LINKS.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === service.path
                    ? 'bg-[#1C1C1A] text-[#F59E0B]'
                    : 'text-[#B3B2AB] hover:bg-[#1C1C1A] hover:text-[#F4F3EE]'
                }`}
              >
                {service.title}
              </Link>
            ))}

            <div className="pt-2 border-t border-[#2C2C28] mt-2 space-y-1">
              <Link
                to="/about"
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === '/about'
                    ? 'bg-[#1C1C1A] text-[#F59E0B]'
                    : 'text-[#F4F3EE] hover:bg-[#1C1C1A]'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === '/contact'
                    ? 'bg-[#1C1C1A] text-[#F59E0B]'
                    : 'text-[#F4F3EE] hover:bg-[#1C1C1A]'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
