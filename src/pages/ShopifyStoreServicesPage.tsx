import {MessageCircle} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO, STOCK_PHOTOS} from '../data/business';

interface ShopifyServiceItem {
  number: string;
  heading: string;
  description: string;
}

const SHOPIFY_SERVICES: ShopifyServiceItem[] = [
  {
    number: '01',
    heading: 'New store setup and launch.',
    description:
      'A new Shopify store set up properly from the start. Theme, pages, menus, delivery and returns information and policy pages, all done so you can open with confidence.',
  },
  {
    number: '02',
    heading: 'Store redesign and makeover.',
    description:
      'Your homepage and store look rebuilt so the store feels trustworthy and easy to shop. A fresh look that matches what you sell.',
  },
  {
    number: '03',
    heading: 'Product listing and optimisation.',
    description:
      'Product titles and descriptions written the way buyers search and read, with collections organised so people find what they want.',
  },
  {
    number: '04',
    heading: 'Store audit.',
    description:
      'A full check of your store, the way a buyer sees it. You get a clear list of what is costing you sales and visibility, and what to fix first.',
  },
  {
    number: '05',
    heading: 'Getting found on Google.',
    description:
      'Product and collection pages set up for Google search, with Search Console and your sitemap checked, plus Google Merchant Center free shopping listings.',
  },
  {
    number: '06',
    heading: 'Being named by AI answers.',
    description:
      'Buyer questions answered on your store, with a clear FAQ structure, so Google AI and ChatGPT can name your store when people ask.',
  },
  {
    number: '07',
    heading: 'Conversion fixes.',
    description:
      'Clear delivery and returns information, trust elements and checkout settings checked, so more visitors feel safe to buy.',
  },
  {
    number: '08',
    heading: 'Email basics for repeat sales.',
    description:
      'Welcome and abandoned cart emails set up, so first buyers hear from you again and unfinished checkouts get a second chance.',
  },
  {
    number: '09',
    heading: 'Product videos and Reels.',
    description:
      'Short product videos that help your store sell on Instagram and TikTok, made from your product photos and store link.',
  },
  {
    number: '10',
    heading: 'Ongoing store help.',
    description:
      'Product uploads, updates and day to day store tasks handled for you, so the store stays fresh while you run the business.',
  },
];

const SHOPIFY_FAQS: FaqItem[] = [
  {
    question: 'My store gets no traffic. What is wrong?',
    answer:
      'It is usually a mix of things. The product pages may not use the words buyers search for, the store may not be set up for Google search, or visitors may leave because delivery, returns or trust information is hard to find. A store audit looks at all of that and shows what to fix first.',
  },
  {
    question: 'Can you set up a new Shopify store from zero?',
    answer:
      'Yes. I can set up the theme, pages, menus, delivery and returns information and policy pages, add your products and check the settings, so the store is ready to open.',
  },
  {
    question: 'Do you work with stores outside the UK?',
    answer:
      'Yes. I work with Shopify store owners worldwide, and all work is done remotely. You can reach me on WhatsApp or by email wherever you are.',
  },
  {
    question: 'How do we start?',
    answer:
      'Send a message on WhatsApp or by email and tell me about your store. I will look at what you have, or talk through what you need, and we agree the work before anything starts.',
  },
  {
    question: 'Will my store show on Google and in AI answers?',
    answer:
      'That is what the Google and AI answer work is for. Product and collection pages are set up with the words buyers use, Search Console and the sitemap are checked, and buyer questions are answered on the store so Google AI and ChatGPT can name it. Search engines still take some weeks to re-read a site, so it is not instant.',
  },
];

const SHOPIFY_WORKFLOW_PHOTOS = [
  STOCK_PHOTOS.onlineStoreLaptopPhone,
  STOCK_PHOTOS.remoteDeskSetup,
];

export function ShopifyStoreServicesPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.shopifyStoreServices} faq={SHOPIFY_FAQS} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <HeroEntrance className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">Shopify Store Services</p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                Set up, fix and get found: help for Shopify store owners.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed">
                If you sell on Shopify, I help you set up a store that looks right, reads well and
                can be found on Google and in AI answers, and then I keep it working day to day.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Message Victor on WhatsApp</span>
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="group h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.packingOrdersBoxes.src}
                  fallbackSrc={STOCK_PHOTOS.packingOrdersBoxes.fallbackSrc}
                  alt={STOCK_PHOTOS.packingOrdersBoxes.alt}
                  eager
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                />
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOPIFY_WORKFLOW_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="group aspect-[16/9] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]"
              >
                <StudioImage
                  src={photo.src}
                  fallbackSrc={photo.fallbackSrc}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">What is included</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Ten ways I help your Shopify store
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Every piece of work is handled personally and remotely for Shopify store owners
              worldwide. Start with one area or combine what your store needs most.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOPIFY_SERVICES.map((service, idx) => (
              <RevealSection key={service.number} delay={idx * 0.03} className="h-full">
                <article className="h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors rounded-xl p-7 sm:p-8 flex flex-col">
                  <span className="font-display text-sm font-semibold text-[#F59E0B] tabular-nums">
                    {service.number}.
                  </span>
                  <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[#F4F3EE] leading-snug">
                    {service.heading}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={SHOPIFY_FAQS} />

      <ContactCtaStrip
        heading="Tell Victor about your Shopify store"
        body="Send your store link or tell me what you want to launch on WhatsApp or by email. All work is done remotely for Shopify store owners worldwide, and we agree the work before anything starts."
      />
    </>
  );
}
