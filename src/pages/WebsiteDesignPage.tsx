import {Check, Code2, FileText, Globe, MessageCircle, Workflow} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO, STOCK_PHOTOS} from '../data/business';

const WEBSITE_FAQS: FaqItem[] = [
  {
    question: 'Will my website show up on Google?',
    answer:
      'It is built to. The structure, the page titles and the answers are done the search way from the first day, not added as an afterthought.',
  },
  {
    question: 'Do you write the words on the pages?',
    answer:
      'Yes. You give the facts, the pages are written for you in plain language your customers understand.',
  },
  {
    question: 'Can you redesign my current website?',
    answer:
      'Yes. It starts with a look at what you have and what buyers cannot find on it.',
  },
];

const WEBSITE_PILLARS = [
  {
    icon: Globe,
    title: 'One page per service',
    description:
      'Each service gets its own clear URL and page title instead of burying everything on one crowded homepage.',
  },
  {
    icon: FileText,
    title: 'Buyer questions answered',
    description:
      'Real questions your customers ask before booking are answered in plain English right on the page.',
  },
  {
    icon: Code2,
    title: 'Code labels search and AI read',
    description:
      'Clean page titles, meta descriptions and Schema.org structured data built into the code from day one.',
  },
];

export function WebsiteDesignPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.websiteDesign} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <HeroEntrance className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">
                Service 05 · Websites, Landing Pages and Workflows
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                Website and App Design
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed max-w-2xl">
                Business websites and landing pages built with the same visibility structure from
                the start: one page per service, buyer questions answered, and the code labels
                search engines and AI read.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Discuss your website on WhatsApp</span>
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="group h-full min-h-[260px] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.designerWebsiteScreen.src}
                  fallbackSrc={STOCK_PHOTOS.designerWebsiteScreen.fallbackSrc}
                  alt={STOCK_PHOTOS.designerWebsiteScreen.alt}
                  eager
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                />
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
              Built the search way from day one
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              A good-looking site that nobody finds does not bring in customers. Every site is
              planned around clarity for buyers and structure for Google and AI search.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEBSITE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealSection key={pillar.title} delay={idx * 0.05}>
                  <div className="h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-7">
                    <Icon className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-[#F4F3EE]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#B3B2AB] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </RevealSection>
              );
            })}
          </div>

          <RevealSection className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors rounded-xl p-7">
              <div className="flex items-center gap-2.5 text-[#F59E0B]">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Plain copy included</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-[#F4F3EE]">
                Words written from your business facts
              </h3>
              <p className="mt-2 text-sm text-[#B3B2AB] leading-relaxed">
                You do not have to stare at a blank document. You share what you do, who you help
                and how to reach you, and the page copy is written clearly for your visitors.
              </p>
            </div>

            <div className="bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors rounded-xl p-7">
              <div className="flex items-center gap-2.5 text-[#F59E0B]">
                <Workflow className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Optional workflow setup</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-[#F4F3EE]">
                n8n automation for enquiries and follow-ups
              </h3>
              <p className="mt-2 text-sm text-[#B3B2AB] leading-relaxed">
                When your website or app needs enquiries routed into spreadsheets, email replies or
                notifications automatically, n8n workflows can be built alongside the site.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      <FaqSection items={WEBSITE_FAQS} />

      <ContactCtaStrip
        heading="Need a new website or a clean redesign?"
        body="Message on WhatsApp or email what your business does and share your current site if you have one. You will get a clear price before any work starts."
      />
    </>
  );
}
