import {Link} from 'react-router-dom';
import {ArrowRight, Mail, MessageCircle} from 'lucide-react';
import {BUSINESS_FACTS} from '../data/business';

interface ContactCtaStripProps {
  heading: string;
  body: string;
}

export function ContactCtaStrip({heading, body}: ContactCtaStripProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-[#2C2C28]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
              {heading}
            </h2>
            <p className="text-base text-[#B3B2AB] leading-relaxed">{body}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BUSINESS_FACTS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-[#141413] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Message on WhatsApp</span>
            </a>

            <a
              href={`mailto:${BUSINESS_FACTS.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#2C2C28] bg-[#141413] hover:border-[#F59E0B] text-[#F4F3EE] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
              <span>Email Victor</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-[#B3B2AB] hover:text-[#F59E0B] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Contact form</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
