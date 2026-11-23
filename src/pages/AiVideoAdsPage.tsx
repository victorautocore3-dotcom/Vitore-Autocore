import {Check, Film, Layers, MessageCircle, Sparkles} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {GoogleReviewsSection} from '../components/GoogleReviewsSection';
import {BUSINESS_FACTS, PAGE_SEO, STOCK_PHOTOS} from '../data/business';

const VIDEO_FAQS: FaqItem[] = [
  {
    question: 'Do I need to film anything?',
    answer:
      'No. The adverts are made with AI video, with a character on camera talking about your product. You just share your product photos and details.',
  },
  {
    question: 'What do I get?',
    answer:
      'A finished video advert or Reel, ready to post, made to catch attention in the first seconds and hold it to the end.',
  },
  {
    question: 'How long is a video advert?',
    answer:
      'About one minute is the standard length, short enough to hold attention and long enough to explain the product.',
  },
  {
    question: 'Can you make a sample for my business first?',
    answer:
      'Yes, samples for different business types are on this website, and a sample can be made for your product so you see the style before ordering more.',
  },
];

const WHO_IT_HELPS = [
  {
    title: 'Small brands',
    text: 'Show your products cleanly in short adverts without hiring a film crew or spending days recording.',
  },
  {
    title: 'Online sellers',
    text: 'Turn product photos and store listings into short Reels and promotional clips built to stop buyers scrolling.',
  },
  {
    title: 'Local businesses',
    text: 'Explain what you do clearly with a talking presenter or crisp visual captions ready for Instagram, Facebook and TikTok.',
  },
];

const WHAT_YOU_RECEIVE = [
  'A finished AI video advert or Reel, edited and ready to post.',
  'No filming, studio lighting, or camera setup needed from you.',
  'Cinema-style pacing with either a realistic talking presenter or strong product visuals.',
  'Clear on-screen captions and hook wording matched to your offer.',
];

const PRODUCTION_GALLERY = [
  STOCK_PHOTOS.studioSoftboxLights,
  STOCK_PHOTOS.productSetCamera,
  STOCK_PHOTOS.editingTimelineScreen,
];

const SAMPLE_ADVERTS = [
  {
    src: '/videos/sample-phone-qa.mp4',
    poster: '/videos/poster-phone-qa.jpg',
    title: 'Phone Q&A promo',
    description:
      'A talking character advert that answers the questions online sellers get every day.',
  },
  {
    src: '/videos/sample-earth-zoom.mp4',
    poster: '/videos/poster-earth-zoom.jpg',
    title: 'Earth Zoom',
    description: 'A cinematic advert about the store buyers cannot find.',
  },
  {
    src: '/videos/sample-invisible-store.mp4',
    poster: '/videos/poster-invisible-store.jpg',
    title: 'The Invisible Store',
    description: 'A short story advert about good products nobody could find.',
  },
  {
    src: '/videos/sample-bare-bold.mp4',
    poster: '/videos/poster-bare-bold.jpg',
    title: 'Christmas Gift Card Trailer',
    description: 'Christmas gift card trailer for a nails and aesthetics salon in Chelmsford',
  },
];

export function AiVideoAdsPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.aiVideoAds} faq={VIDEO_FAQS} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <HeroEntrance className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">Service 01 · Video Production</p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                AI Video Ads and Reels
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed max-w-2xl">
                Short product adverts, promotional Reels, book trailers and sales videos made for
                you from start to finish. You send your photos or store link, and you receive a
                finished video ready to post.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Ask about a video on WhatsApp</span>
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="group h-full min-h-[260px] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.studioProductSet.src}
                  fallbackSrc={STOCK_PHOTOS.studioProductSet.fallbackSrc}
                  alt={STOCK_PHOTOS.studioProductSet.alt}
                  eager
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                />
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-22 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">Video Showcase</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Sample adverts
            </h2>
          </RevealSection>

          <RevealSection
            delay={0.05}
            className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {SAMPLE_ADVERTS.map((sample) => (
              <article
                key={sample.src}
                className="bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] transition-colors duration-200 rounded-2xl p-4 sm:p-5 flex flex-col"
              >
                <div className="rounded-xl overflow-hidden border border-[#2C2C28] bg-[#141413]">
                  <video
                    src={sample.src}
                    poster={sample.poster}
                    controls
                    playsInline
                    preload="none"
                    className="w-full aspect-[9/16] object-cover block"
                  />
                </div>
                <div className="mt-5 px-1">
                  <h3 className="font-display text-xl font-semibold text-[#F4F3EE]">
                    {sample.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#B3B2AB] leading-relaxed">
                    {sample.description}
                  </p>
                </div>
              </article>
            ))}
          </RevealSection>
        </div>
      </section>

      <section className="py-10 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRODUCTION_GALLERY.map((photo) => (
              <div
                key={photo.src}
                className="group aspect-[16/10] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]"
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
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5 text-[#F59E0B]">
                <Film className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Who it helps</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
                Built for businesses that do not want to be on camera
              </h2>
              <div className="space-y-4">
                {WHO_IT_HELPS.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-[#F4F3EE]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#B3B2AB] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5 text-[#F59E0B]">
                <Layers className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">What you receive</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
                A finished advert or Reel, ready to upload
              </h2>
              <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7 sm:p-8">
                <ul className="space-y-5">
                  {WHAT_YOU_RECEIVE.map((point) => (
                    <li key={point} className="flex items-start gap-3.5">
                      <Check
                        className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#2C2C28] flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-[#B3B2AB] leading-relaxed">
                    Every project is priced on what it needs. Message on WhatsApp or email with your
                    idea and you will get a clear price before any work starts.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <GoogleReviewsSection
        serviceFilter="ai-video-ads"
        heading="AI Video Ads & Reels client reviews"
        subheading="What brands, authors and online sellers say about getting finished AI video adverts without filming."
      />

      <FaqSection items={VIDEO_FAQS} />

      <ContactCtaStrip
        heading="Want an advert or Reel made from your product photos?"
        body="Send your store link or product photos on WhatsApp or email, along with what you are selling. You will get a clear price before any work starts."
      />
    </>
  );
}
