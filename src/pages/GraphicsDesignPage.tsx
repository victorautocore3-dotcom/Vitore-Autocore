import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {
  Eye,
  FileImage,
  Layers,
  LayoutGrid,
  Megaphone,
  MessageCircle,
  Palette,
  Sparkles,
  X,
} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO} from '../data/business';

interface DesignWorkItem {
  id: string;
  number: string;
  src: string;
  caption: string;
  label: string;
  alt: string;
}

const DELIVERABLES = [
  {
    icon: LayoutGrid,
    title: 'Social media design',
    description:
      'Scroll-stopping posts, carousels and educational graphics sized cleanly for Instagram, Facebook, LinkedIn and TikTok.',
  },
  {
    icon: Palette,
    title: 'Brand identity',
    description:
      'Clean logos, colour direction and cohesive visual assets that make your business look established from the first glance.',
  },
  {
    icon: FileImage,
    title: 'Posters and flyers',
    description:
      'Event posters, church flyers, school enrolment graphics and local promotional layouts built for both screens and print.',
  },
  {
    icon: Megaphone,
    title: 'Advertising graphics',
    description:
      'Clear, high-contrast ad creatives structured around one message and call to action so prospects understand your offer fast.',
  },
  {
    icon: Layers,
    title: 'Photo compositing',
    description:
      'Clean subject cutouts, lighting adjustments and layered visual scenes that turn everyday photos into finished campaign artwork.',
  },
];

const DESIGN_PORTFOLIO: DesignWorkItem[] = [
  {
    id: 'sunday-celebration',
    number: '01',
    src: '/design-sunday-celebration.jpg',
    caption: 'Sunday Celebration',
    label: 'Church event poster',
    alt: 'Sunday Celebration church event poster by Victor Autocore',
  },
  {
    id: 'northgate-academy',
    number: '02',
    src: '/design-northgate-academy.jpg',
    caption: 'Join Northgate Academy',
    label: 'Course flyer',
    alt: 'Join Northgate Academy course enrolment flyer by Victor Autocore',
  },
  {
    id: 'back-to-class',
    number: '03',
    src: '/design-back-to-class.jpg',
    caption: 'Back to Class',
    label: 'Tutoring poster',
    alt: 'Back to Class tutoring poster by Victor Autocore',
  },
  {
    id: 'schoolsure',
    number: '04',
    src: '/design-schoolsure.jpg',
    caption: 'Learning Must Not Pause',
    label: 'Education cover advert',
    alt: 'Learning Must Not Pause SchoolSure education cover advert by Victor Autocore',
  },
  {
    id: 'skillforge',
    number: '05',
    src: '/design-skillforge.jpg',
    caption: 'Monday is Day One',
    label: 'Tech academy poster',
    alt: 'Monday is Day One tech academy poster by Victor Autocore',
  },
  {
    id: 'brand-identity-ad',
    number: '06',
    src: '/design-brand-identity-ad.jpg',
    caption: 'Brand identity sale advert',
    label: 'Victor Autocore',
    alt: 'Brand identity sale advert designed by Victor Autocore',
  },
  {
    id: 'pinnacle-leads',
    number: '07',
    src: '/design-pinnacle-leads.jpg',
    caption: 'Where Are the Customers',
    label: 'Lead generation graphic',
    alt: 'Where Are the Customers lead generation social graphic by Victor Autocore',
  },
  {
    id: 'creativity-battery',
    number: '08',
    src: '/design-creativity-battery.jpg',
    caption: 'Is Your Creativity Running Low',
    label: 'Concept poster',
    alt: 'Is Your Creativity Running Low concept poster by Victor Autocore',
  },
  {
    id: 'next-client',
    number: '09',
    src: '/design-next-client.jpg',
    caption: 'Your Next Client Is Already Scrolling',
    label: 'Agency graphic',
    alt: 'Your Next Client Is Already Scrolling agency graphic by Victor Autocore',
  },
  {
    id: 'store-redesign',
    number: '10',
    src: '/design-store-redesign.jpg',
    caption: 'Store redesign',
    label: 'Before and after client work',
    alt: 'Before and after online store redesign showcase by Victor Autocore',
  },
  {
    id: 'signal-v-logo',
    number: '11',
    src: '/design-signal-v-logo.png',
    caption: 'Signal V',
    label: 'Victor Autocore logo',
    alt: 'Signal V brand logo design by Victor Autocore',
  },
  {
    id: 'seo-graphic',
    number: '12',
    src: '/design-seo-graphic.jpg',
    caption: 'SEO, AEO and GEO explained',
    label: 'Educational graphic',
    alt: 'SEO, AEO and GEO explained educational graphic by Victor Autocore',
  },
];

const GRAPHICS_FAQS: FaqItem[] = [
  {
    question: 'What do I need to send to get started?',
    answer:
      'Share what the design is for, the words or event details that need to appear on it, any photos or logos you want included, and where you plan to post or print it.',
  },
  {
    question: 'How long does a design take?',
    answer:
      'Most single posters, flyers and social graphics are ready within two to three working days. Larger brand identity sets or multi-graphic packs come with an agreed timeline before work starts.',
  },
  {
    question: 'What file formats do I receive?',
    answer:
      'You receive ready-to-post PNG and JPG files sized for your social platforms, high-resolution print-ready files for posters and flyers, and transparent PNG files for logos.',
  },
  {
    question: 'Are revisions included?',
    answer:
      'Yes. You review the draft first and can ask for adjustments to the wording, colours or layout until the design looks right before the final files are delivered.',
  },
];

export function GraphicsDesignPage() {
  const [activeWork, setActiveWork] = useState<DesignWorkItem | null>(null);
  const {hash} = useLocation();

  useEffect(() => {
    if (!hash) return;
    const targetId = hash.replace(/^#/, '');
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <SeoHead seo={PAGE_SEO.graphicsDesign} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <HeroEntrance className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">
                Service 06 · Social media design, brand identity and advertising graphics
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                Graphics Design
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed max-w-2xl">
                Design that makes a small business, church, school or brand look credible and get
                noticed. Social media design, brand identity, posters and flyers, advertising
                graphics and clean photo compositing built ready to post or print.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Discuss your design on WhatsApp</span>
                </a>
                <a
                  href="#selected-design-work"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#2C2C28] bg-[#1C1C1A] hover:border-[#F59E0B] hover:-translate-y-0.5 text-[#F4F3EE] text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <span>Browse the 12-piece gallery</span>
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="group h-full min-h-[280px] max-h-[440px] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A] p-3 flex items-center justify-center">
                <StudioImage
                  src="/design-sunday-celebration.jpg"
                  fallbackSrc="/design-sunday-celebration.jpg"
                  alt="Sunday Celebration church event poster by Victor Autocore"
                  eager
                  className="w-full h-full object-contain rounded-lg group-hover:scale-[1.02]"
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
              What you get
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Clear visual work designed around your message, audience and brand colours, delivered
              in ready-to-use formats for social media, adverts and print.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <RevealSection key={item.title} delay={idx * 0.05} className="h-full">
                  <div className="h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-7">
                    <Icon className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-[#F4F3EE]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#B3B2AB] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="selected-design-work"
        className="py-16 sm:py-22 border-t border-[#2C2C28] bg-[#161614]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#F59E0B]">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Portfolio Gallery · 12 Pieces</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Selected design work
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Posters, course flyers, advertising graphics, brand logos, store redesign visuals and
              educational graphics created for churches, schools, academies and small businesses.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_PORTFOLIO.map((work, index) => (
              <RevealSection key={work.id} delay={(index % 3) * 0.05} className="h-full">
                <article
                  id={work.id}
                  className="scroll-mt-24 group h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveWork(work)}
                      aria-label={`Inspect ${work.caption} in full size`}
                      className="w-full block aspect-[4/5] overflow-hidden border-b border-[#2C2C28] bg-[#141413] p-3 cursor-pointer"
                    >
                      <StudioImage
                        src={work.src}
                        fallbackSrc={work.src}
                        alt={work.alt}
                        className="w-full h-full object-contain group-hover:scale-[1.02]"
                      />
                    </button>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-medium text-[#F59E0B]">{work.label}</p>
                        <span className="font-display text-xs font-semibold text-[#85847E] tabular-nums">
                          {work.number}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-[#F4F3EE]">
                        {work.caption}
                      </h3>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-[#2C2C28] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveWork(work)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>View full design</span>
                    </button>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {activeWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="design-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/85 backdrop-blur-sm"
          onClick={() => setActiveWork(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1C1C1A] border border-[#2C2C28] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#2C2C28] bg-[#141413] flex items-center justify-between gap-4 sticky top-0 z-10">
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#F59E0B]">{activeWork.label}</p>
                <h3
                  id="design-preview-title"
                  className="font-display text-lg font-semibold text-[#F4F3EE] truncate"
                >
                  {activeWork.caption}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWork(null)}
                aria-label="Close design preview"
                className="p-1.5 rounded-lg border border-[#2C2C28] bg-[#1C1C1A] text-[#B3B2AB] hover:text-[#F4F3EE] hover:border-[#F59E0B] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              <div className="rounded-xl overflow-hidden border border-[#2C2C28] bg-[#141413] p-3 flex items-center justify-center">
                <StudioImage
                  src={activeWork.src}
                  fallbackSrc={activeWork.src}
                  alt={activeWork.alt}
                  eager
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="pt-3 border-t border-[#2C2C28] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#85847E]">
                  Message on WhatsApp or email to get a clear price before any work starts.
                </p>
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-[#141413] text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Ask for a design like this on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <FaqSection items={GRAPHICS_FAQS} />

      <ContactCtaStrip
        heading="Need posters, flyers, social graphics or a brand identity?"
        body="Message on WhatsApp or email what you need designed and where you plan to use it. You will get a clear price before any work starts."
      />
    </>
  );
}
