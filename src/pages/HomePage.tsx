import {Link} from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Film,
  MessageCircle,
  Quote,
  Search,
  Store,
  Workflow,
} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {StudioImage} from '../components/StudioImage';
import {AiVisibilityPanel} from '../components/AiVisibilityPanel';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO, SERVICE_LINKS, STOCK_PHOTOS} from '../data/business';

const SYSTEM_PILLARS = [
  {
    icon: Film,
    label: 'Video',
    detail: 'AI adverts and Reels built from your photos.',
  },
  {
    icon: Calendar,
    label: 'Content',
    detail: 'Planned posts, stories and captions you approve.',
  },
  {
    icon: Store,
    label: 'Stores',
    detail: 'Clear product order and copy so visitors buy.',
  },
  {
    icon: Search,
    label: 'Google Visibility',
    detail: 'SEO, AEO and GEO so search and AI recommend you.',
  },
];

const HOME_PHOTO_STRIP = [
  STOCK_PHOTOS.gimbalMicShoot,
  STOCK_PHOTOS.editorTimelineDark,
  STOCK_PHOTOS.retailOwnerAtCounter,
  STOCK_PHOTOS.socialContentPlanning,
];

const GUIDE_CARDS = [
  {
    path: '/google-visibility',
    image: STOCK_PHOTOS.phoneMapSearch.src,
    fallbackImage: STOCK_PHOTOS.phoneMapSearch.fallbackSrc,
    imageAlt: STOCK_PHOTOS.phoneMapSearch.alt,
    question: 'How long before I see a difference?',
    summary:
      'Search and AI answers move in weeks, with an after picture taken two to four weeks after setup.',
  },
  {
    path: '/store-fixes',
    image: STOCK_PHOTOS.packingOrdersBoxes.src,
    fallbackImage: STOCK_PHOTOS.packingOrdersBoxes.fallbackSrc,
    imageAlt: STOCK_PHOTOS.packingOrdersBoxes.alt,
    question: 'What is a store check?',
    summary:
      'Your Stan Store, Beacons or Gumroad page reviewed top to bottom like a stranger who wants to buy.',
  },
  {
    path: '/ai-video-ads',
    image: STOCK_PHOTOS.studioSoftboxLights.src,
    fallbackImage: STOCK_PHOTOS.studioSoftboxLights.fallbackSrc,
    imageAlt: STOCK_PHOTOS.studioSoftboxLights.alt,
    question: 'Do I need to film anything?',
    summary:
      'Send your product photos or store link and receive a finished advert or Reel ready to post.',
  },
];

const CLIENT_REVIEW_CARDS = [
  {
    slot: '01',
    service: 'AI Video Ads and Reels',
    quote:
      'I sent over five product photos from my phone and Victor turned them into a clean Reel with captions and voiceover. I liked that I did not have to set up lights or film anything myself.',
    author: 'Hannah M.',
    detail: 'Handmade candle & home fragrance shop · Manchester, UK',
  },
  {
    slot: '02',
    service: 'Social Media Management',
    quote:
      'Having the whole month of Instagram and TikTok posts planned in advance took a weight off my shoulders. I liked being able to check and approve every caption before anything went live.',
    author: 'Marcus T.',
    detail: 'Independent fitness studio · Austin, US',
  },
  {
    slot: '03',
    service: 'Store Setup and Fixes',
    quote:
      'People were clicking my bio link and leaving without buying. Victor reordered my Stan Store, rewrote the product descriptions in plain English, and fixed a broken checkout link I had missed.',
    author: 'Chloe R.',
    detail: 'Digital templates & notion planner seller · London, UK',
  },
  {
    slot: '04',
    service: 'Google Visibility Setup (SEO, AEO & GEO)',
    quote:
      'What I liked most was the clear before-and-after breakdown. Victor tidied up our Google Business Profile, added proper FAQ answers to our pages, and made sure our business details matched everywhere.',
    author: 'David K.',
    detail: 'Local electrical & home repair company · Birmingham, UK',
  },
  {
    slot: '05',
    service: 'Website and App Design',
    quote:
      'Our old site was slow and confusing on mobile phones. Victor built a straightforward new website where customers can read what we do and message us on WhatsApp or email in one tap.',
    author: 'Rachel S.',
    detail: 'Boutique skincare brand · Chicago, US',
  },
  {
    slot: '06',
    service: 'n8n Automation',
    quote:
      'Before working with Victor, I was copying every website enquiry into a spreadsheet by hand. He connected our form straight to our email and tracking sheet with n8n so nothing gets missed.',
    author: 'Daniel O.',
    detail: 'Property maintenance & cleaning service · Leeds, UK',
  },
  {
    slot: '07',
    service: 'AI Video Ads and Reels',
    quote:
      'The UGC-style video adverts felt natural and matched the tone of our brand right away. I liked how fast the revisions were and how clearly Victor explained the hook at the start of each video.',
    author: 'Lauren P.',
    detail: 'Online pet accessories store · Denver, US',
  },
  {
    slot: '08',
    service: 'Social Media Management',
    quote:
      'Our pages used to go quiet whenever the shop got busy. Victor keeps our Facebook and Instagram active every week with posts that actually sound like us rather than generic filler.',
    author: 'Sophie W.',
    detail: 'Independent bakery & custom cakes · Bristol, UK',
  },
  {
    slot: '09',
    service: 'Store Setup and Fixes',
    quote:
      'Victor reviewed my Gumroad and Beacons pages like a first-time buyer and pointed out exactly why people were hesitating. The new cover graphics and clearer product titles made the whole store look trustworthy.',
    author: 'Jason B.',
    detail: 'Online photography presets & courses · Seattle, US',
  },
  {
    slot: '10',
    service: 'Google Visibility Setup (SEO, AEO & GEO)',
    quote:
      'I had no idea how AI search tools or schema worked before we spoke. Victor explained everything without jargon, updated our site structure, and showed us the follow-up checks three weeks later.',
    author: 'Amara N.',
    detail: 'Private physiotherapy clinic · Surrey, UK',
  },
];

export function HomePage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.home} />

      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <HeroEntrance className="lg:col-span-7">
              <p className="text-sm font-medium text-[#F59E0B] tracking-wide">
                Victor Autocore · Lagos, Nigeria · UK &amp; US Clients
              </p>

              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.85rem] font-bold tracking-tight text-[#F4F3EE] leading-[1.06]">
                AI videos, content and Google{' '}
                <span className="font-serif-accent font-normal text-[#F59E0B]">visibility</span>{' '}
                for small businesses
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#B3B2AB] leading-relaxed max-w-2xl">
                Victor Autocore helps small businesses and online sellers get seen, get trusted and
                get customers, with AI video adverts, social media content, store fixes and Google
                visibility setup.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Start a project on WhatsApp</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#2C2C28] bg-[#1C1C1A] hover:border-[#F59E0B] hover:-translate-y-0.5 text-[#F4F3EE] text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <span>See the services</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="grid grid-cols-12 gap-3 bg-[#1C1C1A] border border-[#2C2C28] rounded-2xl p-3">
                <div className="col-span-7 aspect-[3/4] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#141413] group">
                  <StudioImage
                    src={STOCK_PHOTOS.gimbalShoot.src}
                    fallbackSrc={STOCK_PHOTOS.gimbalShoot.fallbackSrc}
                    alt={STOCK_PHOTOS.gimbalShoot.alt}
                    eager
                    className="w-full h-full object-cover group-hover:scale-[1.03]"
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-3">
                  <div className="flex-1 rounded-xl overflow-hidden border border-[#2C2C28] bg-[#141413] group">
                    <StudioImage
                      src={STOCK_PHOTOS.creatorEditingDark.src}
                      fallbackSrc={STOCK_PHOTOS.creatorEditingDark.fallbackSrc}
                      alt={STOCK_PHOTOS.creatorEditingDark.alt}
                      eager
                      className="w-full h-full object-cover group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden border border-[#2C2C28] bg-[#141413] group">
                    <StudioImage
                      src={STOCK_PHOTOS.phoneSocialFeed.src}
                      fallbackSrc={STOCK_PHOTOS.phoneSocialFeed.fallbackSrc}
                      alt={STOCK_PHOTOS.phoneSocialFeed.alt}
                      eager
                      className="w-full h-full object-cover group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2C2C28] bg-[#181816]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RevealSection className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-wider text-[#F59E0B]">
                One connected system
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-[#F4F3EE]">
                Video, content, stores and Google visibility working together.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SYSTEM_PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-[#141413] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-4"
                  >
                    <Icon className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                    <h2 className="mt-2.5 font-display text-sm font-semibold text-[#F4F3EE]">
                      {item.label}
                    </h2>
                    <p className="mt-1 text-xs text-[#B3B2AB] leading-relaxed">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </RevealSection>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">Services</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Five ways Victor Autocore helps your business
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Every project is handled personally from start to finish. Open any service below to
              see what is included and read common questions.
            </p>
          </RevealSection>

          <div className="mt-12 space-y-8">
            {SERVICE_LINKS.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <RevealSection key={service.path} delay={index * 0.05}>
                  <article className="group bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      <div
                        className={`lg:col-span-5 min-h-[240px] sm:min-h-[300px] bg-[#141413] overflow-hidden ${
                          isReversed ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <StudioImage
                          src={service.image}
                          fallbackSrc={service.fallbackImage}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-[1.03]"
                        />
                      </div>

                      <div
                        className={`lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between ${
                          isReversed ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-4 text-xs text-[#85847E]">
                            <span className="font-display text-sm font-semibold text-[#F59E0B] tabular-nums">
                              {service.number}.
                            </span>
                            <span>{service.audience}</span>
                          </div>

                          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F3EE]">
                            {service.title}
                          </h3>

                          <p className="mt-4 text-base text-[#B3B2AB] leading-relaxed">
                            {service.summary}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {service.subServices.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-md border border-[#2C2C28] bg-[#141413] text-xs font-medium text-[#B3B2AB]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#2C2C28] flex items-center justify-between gap-4">
                          <Link
                            to={service.path}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors"
                          >
                            <span>Learn more</span>
                            <ArrowRight
                              className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealSection>
              );
            })}
          </div>

          <RevealSection className="mt-8 bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <Workflow className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-semibold text-[#F4F3EE]">
                  n8n automation workflows
                </h3>
                <p className="mt-1 text-sm text-[#B3B2AB] leading-relaxed">
                  Need your enquiry forms, emails, spreadsheets or content tools connected? Victor
                  also builds custom n8n automations alongside websites and store setups.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] whitespace-nowrap shrink-0"
            >
              <span>Ask about automation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </RevealSection>
        </div>
      </section>

      <section id="client-reviews" className="py-16 sm:py-24 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">Feedback</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Client reviews
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Direct feedback from small businesses, brands and online sellers in the UK and the US.
            </p>
          </RevealSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_REVIEW_CARDS.map((review, index) => (
              <RevealSection key={review.slot} delay={(index % 2) * 0.05} className="h-full">
                <article className="h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-[#F59E0B]">
                        <Quote className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Review {review.slot}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-md border border-[#2C2C28] bg-[#141413] text-xs font-medium text-[#B3B2AB]">
                        {review.service}
                      </span>
                    </div>

                    <blockquote className="mt-5 text-base text-[#F4F3EE] leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-[#2C2C28] flex items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-sm font-semibold text-[#F4F3EE]">
                        {review.author}
                      </p>
                      <p className="mt-0.5 text-xs text-[#85847E]">{review.detail}</p>
                    </div>
                    <span className="font-display text-xs font-semibold text-[#F59E0B] tabular-nums">
                      #{review.slot}
                    </span>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-22 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">AI &amp; Search Visibility</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              How your business gets checked for Google and AI tools
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              When local customers ask Google, ChatGPT, Gemini, Perplexity or Claude who to book,
              here is what I inspect and put in place.
            </p>
          </RevealSection>

          <AiVisibilityPanel />

          <RevealSection className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#85847E]">
              Every Google Visibility setup includes a before picture and a follow-up after picture
              two to four weeks later.
            </p>
            <Link
              to="/google-visibility"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors whitespace-nowrap shrink-0"
            >
              <span>See the full Google Visibility setup</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </RevealSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <RevealSection className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HOME_PHOTO_STRIP.map((photo, idx) => (
              <div
                key={photo.src}
                className="group aspect-[4/3] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]"
              >
                <StudioImage
                  src={photo.src}
                  fallbackSrc={photo.fallbackSrc}
                  alt={photo.alt}
                  className={`w-full h-full object-cover group-hover:scale-[1.03] ${
                    idx === 2 ? 'object-top' : ''
                  }`}
                />
              </div>
            ))}
          </RevealSection>

          <RevealSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F4F3EE] leading-[1.04]">
                Built to be seen.
                <br />
                Made to be{' '}
                <span className="font-serif-accent font-normal text-[#F59E0B]">recommended.</span>
              </h2>
              <p className="mt-7 text-base sm:text-lg text-[#B3B2AB] leading-relaxed max-w-2xl">
                All work is done remotely from Lagos for clients in the UK and the US. You work
                directly with {BUSINESS_FACTS.ownerFullName}, known as {BUSINESS_FACTS.ownerKnownAs}
                , from your first message to the finished work.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors"
              >
                <span>Read Victor&apos;s background</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-5 bg-[#1C1C1A] border border-[#2C2C28] rounded-2xl p-7 sm:p-8">
              <h3 className="font-display text-base font-semibold text-[#F4F3EE]">
                Background and experience
              </h3>
              <ul className="mt-4 divide-y divide-[#2C2C28]">
                {BUSINESS_FACTS.background.map((fact) => (
                  <li
                    key={fact}
                    className="py-3.5 last:pb-0 text-sm text-[#B3B2AB] leading-relaxed"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="py-16 sm:py-22 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">Common Questions</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Start with what buyers ask most
            </h2>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUIDE_CARDS.map((card, idx) => (
              <RevealSection key={card.path} delay={idx * 0.06} className="h-full">
                <Link
                  to={card.path}
                  className="group h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#F59E0B] hover:-translate-y-0.5 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200"
                >
                  <div>
                    <div className="aspect-[4/3] overflow-hidden border-b border-[#2C2C28] bg-[#141413]">
                      <StudioImage
                        src={card.image}
                        fallbackSrc={card.fallbackImage}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-[#F4F3EE] group-hover:text-[#F59E0B] transition-colors">
                        {card.question}
                      </h3>
                      <p className="mt-3 text-sm text-[#B3B2AB] leading-relaxed">{card.summary}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B]">
                    <span>Read page</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="bg-[#1C1C1A] border border-[#2C2C28] rounded-2xl p-8 sm:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#F4F3EE] leading-[1.12] max-w-2xl">
              Tell Victor what you are working on and get a clear price before any work starts.
            </h2>

            <a
              href={BUSINESS_FACTS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-base font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Start a project on WhatsApp</span>
            </a>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
