import {Bot, MapPin, MessageCircle, Search} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {AiVisibilityPanel} from '../components/AiVisibilityPanel';
import {BUSINESS_FACTS, PAGE_SEO, STUDIO_IMAGES} from '../data/business';

const GOOGLE_FAQS: FaqItem[] = [
  {
    question: 'How long before I see a difference?',
    answer:
      'Search and AI answers move in weeks, not days. Your after picture is taken two to four weeks after the setup.',
  },
  {
    question: 'Do you guarantee first place on Google?',
    answer:
      'No honest person can guarantee that. What you get is the full setup done properly, and before and after proof you can see with your own eyes.',
  },
  {
    question: 'What do you need from me?',
    answer:
      'Access to your website and your Google Business Profile, and your business facts: services, towns, phone number.',
  },
  {
    question: 'I am not technical. Is that a problem?',
    answer:
      'No. Everything is explained in plain words, and you see the before and after pictures yourself.',
  },
];

const THREE_PILLARS = [
  {
    icon: Search,
    label: 'SEO',
    title: 'Google Search Ranking',
    description:
      'SEO gets your business ranked on Google when buyers search for what you do in your area.',
  },
  {
    icon: MapPin,
    label: 'AEO',
    title: 'Direct Answer Engines',
    description:
      'AEO makes your business the direct answer Google and voice assistants read out when someone asks a question.',
  },
  {
    icon: Bot,
    label: 'GEO',
    title: 'AI Recommendations',
    description:
      'GEO makes AI tools like ChatGPT and Gemini name your business when someone asks them for a recommendation.',
  },
];

const SETUP_STEPS = [
  {
    number: '01',
    title: 'The before picture of your current searches',
    detail: 'A clear record of how your business shows up on Google and AI tools right now before anything changes.',
  },
  {
    number: '02',
    title: 'Business facts fixed the same everywhere',
    detail: 'Your business name, address, phone number, services and towns checked and matched across the web.',
  },
  {
    number: '03',
    title: 'Google Business Profile built properly',
    detail: 'Categories, service areas, descriptions and details filled in properly so local buyers find you.',
  },
  {
    number: '04',
    title: 'One website page per service per town',
    detail: 'Clear dedicated pages written around what customers actually type into search in each town you cover.',
  },
  {
    number: '05',
    title: 'Buyer questions answered on your pages',
    detail: 'Real questions from customers answered plainly on your pages so search engines and AI tools can quote them.',
  },
  {
    number: '06',
    title: 'A reviews routine',
    detail: 'A simple, repeatable way to ask happy customers for reviews that support your local trust.',
  },
  {
    number: '07',
    title: 'Listings on the directories AI trusts',
    detail: 'Consistent listings placed on the trusted local and industry directories that AI models read from.',
  },
  {
    number: '08',
    title: 'The after picture two to four weeks later',
    detail: 'Follow-up proof taken two to four weeks after setup so you can compare before and after yourself.',
  },
];

const LOCAL_TRADES = [
  'Aesthetic clinics',
  'Plumbing and heating engineers',
  'Wedding photographers',
];

export function GoogleVisibilityPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.googleVisibility} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">
                Service 04 · Search and AI Visibility
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.08]">
                Google Visibility: SEO, AEO and GEO Setup
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed">
                Built for small local businesses, including aesthetic clinics, plumbing and heating
                engineers, and wedding photographers. Get found when local customers search on
                Google or ask AI tools who to hire.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#85847E]">
                <span>Written for:</span>
                {LOCAL_TRADES.map((trade, index) => (
                  <span key={trade} className="text-[#F4F3EE]">
                    {trade}
                    {index < LOCAL_TRADES.length - 1 ? (
                      <span className="ml-4 text-[#85847E]">·</span>
                    ) : null}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-[#141413] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Message on WhatsApp for a clear price</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STUDIO_IMAGES.searchMaps}
                  alt="Dark architectural monitor showing local search map grid with amber location pins"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
              SEO, AEO and GEO in plain words
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Buyers do not only scroll social media. Every day they search Google, ask voice
              assistants, and ask ChatGPT or Gemini who to book.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-[#F59E0B]">
                      {pillar.label}
                    </span>
                    <Icon className="w-5 h-5 text-[#85847E]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#F4F3EE]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#B3B2AB] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">AI Visibility Check</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
              What I inspect across AI search tools
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Your business is checked across the AI assistants buyers use, using a clear six-part
              checklist.
            </p>
          </div>

          <AiVisibilityPanel />
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">8-Step Setup</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
              What the setup includes
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Every part of the setup is done cleanly and checked with real before and after
              pictures.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SETUP_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-[#F59E0B] tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#F4F3EE] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#B3B2AB] leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7">
            <h3 className="font-display text-lg font-semibold text-[#F4F3EE]">
              How pricing works
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
              Every business has a different number of services, towns and existing pages. Message
              on WhatsApp or email with your website and services and you will get a clear price
              before any work starts.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={GOOGLE_FAQS} />

      <ContactCtaStrip
        heading="Want to see how your business shows up right now?"
        body="Message on WhatsApp or email your business name, towns and website. You will get a clear price before any work starts."
      />
    </>
  );
}
