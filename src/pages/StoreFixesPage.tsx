import {Check, Eye, MessageCircle, Store} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {GoogleReviewsSection} from '../components/GoogleReviewsSection';
import {BUSINESS_FACTS, PAGE_SEO, STOCK_PHOTOS} from '../data/business';

const STORE_FAQS: FaqItem[] = [
  {
    question: 'What is a store check?',
    answer:
      'A look through your online store the way a buyer sees it: what the offer says, how the products are arranged, and where a visitor would get confused or leave.',
  },
  {
    question: 'Which stores do you work on?',
    answer: 'Stan Store, Beacons and Gumroad stores, mostly for faceless digital product sellers.',
  },
  {
    question: 'What do you fix?',
    answer:
      'The order of products on the page, your own story and offer at the top where buyers see it first, product wording, and the words Google reads so buyers searching Google can find the store.',
  },
  {
    question: 'Is the first check really free?',
    answer:
      'Yes. The first store check and the store side fixes to get started are free. Deeper Google visibility work after that is paid work, and you decide if you want it.',
  },
];

const CHECK_AREAS = [
  'Product order from top to bottom so your main offer is clear right away',
  'Where your free guide sits and how it leads into your paid product',
  'Product descriptions written plainly around what the buyer actually gets',
  'Your welcome message and the link between your Instagram bio and your store',
];

const STORE_WORKFLOW_PHOTOS = [
  STOCK_PHOTOS.packingOrdersBoxes,
  STOCK_PHOTOS.remoteDeskSetup,
];

export function StoreFixesPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.storeFixes} faq={STORE_FAQS} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <HeroEntrance className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">
                Service 03 · Stan Store, Beacons and Gumroad
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                Store Setup and Fixes for Online Sellers
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed">
                Built for faceless digital product sellers on Stan Store, Beacons and Gumroad. The
                first store check is free: your store is reviewed the way a buyer sees it, top to
                bottom, and you are told plainly what is costing you sales.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Request your free first store check</span>
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="group h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.onlineStoreLaptopPhone.src}
                  fallbackSrc={STOCK_PHOTOS.onlineStoreLaptopPhone.fallbackSrc}
                  alt={STOCK_PHOTOS.onlineStoreLaptopPhone.alt}
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
            {STORE_WORKFLOW_PHOTOS.map((photo) => (
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
          <RevealSection className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors rounded-xl p-7 sm:p-9">
              <div className="flex items-center gap-2.5 text-[#F59E0B]">
                <Eye className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">How the free first check works</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-[#F4F3EE]">
                Seen through a buyer&apos;s eyes first
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
                Most digital sellers drive views from Reels or TikTok straight into a store that
                confuses a first-time visitor. Before you pay for any fix, Victor opens your store
                like a stranger ready to buy and shows you exactly where people drop off.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
                You see the gaps with your own eyes first. If you want Victor to fix them or set up
                your store to be found on Google as well, you get a clear price before any paid
                work starts.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors rounded-xl p-7 sm:p-9">
              <div className="flex items-center gap-2.5 text-[#F59E0B]">
                <Store className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">What gets checked and fixed</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-[#F4F3EE]">
                Every piece that helps a buyer say yes
              </h2>
              <ul className="mt-6 space-y-4">
                {CHECK_AREAS.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        </div>
      </section>

      <GoogleReviewsSection
        serviceFilter="store-fixes"
        heading="Store Setup & Fixes client reviews"
        subheading="Feedback from digital product sellers on Stan Store, Beacons and Gumroad after their store check and fixes."
      />

      <FaqSection items={STORE_FAQS} />

      <ContactCtaStrip
        heading="Send your Stan Store, Beacons or Gumroad link"
        body="Message on WhatsApp or email your store link for your free first store check. For full fixes or Google search setup, you will get a clear price before any work starts."
      />
    </>
  );
}
