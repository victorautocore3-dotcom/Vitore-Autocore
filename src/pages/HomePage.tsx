import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useReducedMotion} from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Check,
  Film,
  MessageCircle,
  Search,
  Store,
  Workflow,
} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {StudioImage} from '../components/StudioImage';
import {AiVisibilityPanel} from '../components/AiVisibilityPanel';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {GoogleReviewsSection} from '../components/GoogleReviewsSection';
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

const HOW_I_WORK_POINTS = [
  'Fixed price agreed before any work starts, no surprises after',
  'Half to start, half when the work is finished and live',
  'Before and after screenshots on every setup, so you can see the change yourself',
  'You deal with me directly from the first message to the finished work, nothing is outsourced',
];

const HERO_SLIDES = [
  {
    ...STOCK_PHOTOS.gimbalMicShoot,
    objectPositionClass: 'object-[62%_center] sm:object-center',
  },
  {
    ...STOCK_PHOTOS.editorTimelineDark,
    objectPositionClass: 'object-center',
  },
  {
    ...STOCK_PHOTOS.gimbalStudioRig,
    objectPositionClass: 'object-center',
  },
  {
    ...STOCK_PHOTOS.onlineStoreLaptopPhone,
    objectPositionClass: 'object-[58%_center] sm:object-center',
  },
  {
    ...STOCK_PHOTOS.designerWebsiteScreen,
    objectPositionClass: 'object-center',
  },
];

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [unlockedSlides, setUnlockedSlides] = useState<number[]>([0]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setActiveSlide(0);
      setPrevSlide(null);
      setUnlockedSlides([0]);
      return;
    }

    const preloadTimer = window.setTimeout(() => {
      setUnlockedSlides((prev) => {
        const nextIndex = (activeSlide + 1) % HERO_SLIDES.length;
        return prev.includes(nextIndex) ? prev : [...prev, nextIndex];
      });
    }, 1200);

    const rotateTimer = window.setTimeout(() => {
      setPrevSlide(activeSlide);
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => {
      window.clearTimeout(preloadTimer);
      window.clearTimeout(rotateTimer);
    };
  }, [activeSlide, shouldReduceMotion]);

  return (
    <>
      <SeoHead seo={PAGE_SEO.home} />

      <section className="relative w-full min-h-[calc(100svh-4rem)] flex items-center overflow-hidden bg-[#141413] py-16 sm:py-24">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {HERO_SLIDES.map((slide, index) => {
            if (!unlockedSlides.includes(index)) {
              return null;
            }
            const isActive = index === activeSlide;
            const isPrevious = index === prevSlide && !isActive;
            const layerClass = isActive
              ? 'z-10 opacity-100'
              : isPrevious
                ? 'z-[5] opacity-100'
                : 'z-0 opacity-0';

            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${layerClass}`}
              >
                <StudioImage
                  src={slide.src}
                  fallbackSrc={slide.fallbackSrc}
                  alt={slide.alt}
                  eager={index === 0}
                  className={`w-full h-full object-cover ${slide.objectPositionClass}`}
                />
              </div>
            );
          })}

          <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#141413]/95 via-[#141413]/75 to-[#141413]/35" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#141413] via-[#141413]/45 to-[#141413]/25" />
        </div>

        <div className="relative z-30 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <HeroEntrance className="max-w-3xl">
            <p className="text-sm font-medium text-[#F59E0B] tracking-wide">
              Victor Autocore
            </p>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.85rem] font-bold tracking-tight text-[#F4F3EE] leading-[1.06]">
              AI videos, content and Google{' '}
              <span className="font-serif-accent font-normal text-[#F59E0B]">visibility</span>{' '}
              for small businesses
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#D6D4CC] leading-relaxed max-w-2xl">
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#2C2C28] bg-[#1C1C1A]/90 hover:border-[#F59E0B] hover:-translate-y-0.5 text-[#F4F3EE] text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>See the services</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              </a>
            </div>
          </HeroEntrance>
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
              Seven ways Victor Autocore helps your business
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Every project is handled personally from start to finish. Open any service below to
              see what is included and read common questions.
            </p>
          </RevealSection>

          <div className="mt-12 space-y-8">
            {SERVICE_LINKS.map((service, index) => {
              const isReversed = index % 2 === 1;
              const isFullGraphicPanel = service.number === '04';
              return (
                <RevealSection key={service.path} delay={index * 0.05}>
                  <article className="group bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      <div
                        className={`lg:col-span-5 min-h-[240px] sm:min-h-[300px] ${
                          isFullGraphicPanel
                            ? 'bg-white flex items-center justify-center'
                            : 'bg-[#141413]'
                        } overflow-hidden ${
                          isReversed ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <StudioImage
                          src={service.image}
                          fallbackSrc={service.fallbackImage}
                          alt={service.imageAlt}
                          className={
                            isFullGraphicPanel
                              ? 'w-full h-full object-contain'
                              : 'w-full h-full object-cover group-hover:scale-[1.03]'
                          }
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

      <section className="py-16 sm:py-24 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              How I work
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {HOW_I_WORK_POINTS.map((point) => (
                <div
                  key={point}
                  className="bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors duration-200 rounded-2xl p-6 sm:p-7 flex items-start gap-4"
                >
                  <Check className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-base text-[#F4F3EE] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </RevealSection>
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
                All work is done remotely. You work directly with Akinjide Akinola, known as Victor,
                from your first message to the finished work.
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

      <GoogleReviewsSection showFilterTabs />

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
