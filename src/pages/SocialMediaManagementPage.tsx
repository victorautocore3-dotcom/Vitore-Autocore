import {Calendar, CheckSquare, FileText, Hash, Layers, MessageCircle, Video} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {BUSINESS_FACTS, PAGE_SEO, STUDIO_IMAGES} from '../data/business';

const SOCIAL_FAQS: FaqItem[] = [
  {
    question: 'Which platforms do you manage?',
    answer: 'Instagram, Facebook and TikTok.',
  },
  {
    question: 'Do you create the content or do I?',
    answer:
      'Everything is created for you: the videos, the designs, the captions and the calendar. You approve before anything posts.',
  },
  {
    question: 'How often do you post?',
    answer: 'That depends on the plan we agree. Consistent posting on a calendar, never random.',
  },
  {
    question: 'I already have a page. Can you work with it?',
    answer:
      'Yes. The first step is a look at your current page and what is stopping it from growing.',
  },
];

const DELIVERABLES = [
  {
    icon: Layers,
    title: 'Posts and stories',
    description: 'Clean visual posts and regular story frames tailored to your business and buyers.',
  },
  {
    icon: Video,
    title: 'Reels and short videos',
    description: 'Short-form video content created for you so your page stays active without filming.',
  },
  {
    icon: FileText,
    title: 'Captions',
    description: 'Plain, readable captions written in your voice to explain offers and invite replies.',
  },
  {
    icon: Calendar,
    title: 'Content calendar',
    description: 'A clear schedule planned ahead of time so nothing is posted at random.',
  },
  {
    icon: Hash,
    title: 'Hashtag research',
    description: 'Relevant search terms and hashtags matched to your niche and customer location.',
  },
  {
    icon: CheckSquare,
    title: 'Monthly report',
    description: 'A straightforward monthly summary of what went out and what people responded to.',
  },
];

export function SocialMediaManagementPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.socialMedia} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">
                Service 02 · Instagram, Facebook and TikTok
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                Social Media Management
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed">
                Consistent social media without guessing what to post next. Videos, designs,
                captions and a monthly calendar are created for you, and you approve everything
                before it goes live.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-[#141413] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Discuss your page on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STUDIO_IMAGES.socialFeeds}
                  alt="Smartphone displaying social media feed on dark studio desk with notebook and brass pen"
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
              What your monthly management covers
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Handled remotely from Lagos for small businesses in the UK and US, backed by 5+ years
              of freelance social media management and content creation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7"
                >
                  <Icon className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#F4F3EE]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] text-[#B3B2AB] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection items={SOCIAL_FAQS} />

      <ContactCtaStrip
        heading="Want someone reliable to run your pages?"
        body="Share a link to your Instagram, Facebook or TikTok page on WhatsApp or email. We will look at where your page stands and give you a clear price before any work starts."
      />
    </>
  );
}
