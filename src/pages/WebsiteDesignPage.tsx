import {useState} from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Eye,
  FileText,
  Globe,
  LayoutGrid,
  MessageCircle,
  Smartphone,
  Workflow,
  X,
} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {FaqSection, type FaqItem} from '../components/FaqSection';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO, STOCK_PHOTOS} from '../data/business';

interface SampleItem {
  number: string;
  kind: 'Website Sample' | 'App Sample';
  category: string;
  title: string;
  previewDomain: string;
  summary: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  tags: string[];
  previewHeadline: string;
  previewSubheadline: string;
  previewSections: {
    label: string;
    detail: string;
  }[];
}

const WEBSITE_SAMPLES: SampleItem[] = [
  {
    number: '01',
    kind: 'Website Sample',
    category: 'Local Clinic Website',
    title: 'Aesthetic & Skin Clinic Multi-Page Website',
    previewDomain: 'sample-clinic-site.victorautocore.site',
    summary:
      'Built with a dedicated page for every treatment, clear town-by-town location signals, plain-English patient FAQs, and one-tap WhatsApp or booking enquiries.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.designerWebsiteScreen.src,
    imageAlt: 'Aesthetic clinic website layout displayed on a laptop screen',
    tags: [
      'One page per treatment',
      'Town search structure',
      'Patient FAQ schema',
      'Direct WhatsApp booking',
    ],
    previewHeadline: 'Clear treatment pages built for local search and patient trust',
    previewSubheadline:
      'Each treatment has its own URL, plain before-visit answers, and direct consultation request buttons.',
    previewSections: [
      {
        label: 'Treatment Pages',
        detail: 'Separate pages for skin consultations, laser treatments, and facial care so Google indexes each service individually.',
      },
      {
        label: 'Local Area Signals',
        detail: 'Clear town and clinic address facts matched to the Google Business Profile.',
      },
      {
        label: 'Patient FAQ Block',
        detail: 'Direct answers to common pre-booking questions formatted with FAQPage schema.',
      },
    ],
  },
  {
    number: '02',
    kind: 'Website Sample',
    category: 'Trade & Engineering Website',
    title: 'Heating Engineer & Home Trade Service Website',
    previewDomain: 'sample-heating-trades.victorautocore.site',
    summary:
      'Fast mobile-first site for heating engineers, electricians and local trades, separating boiler installs, servicing and emergency repairs into distinct search-ready pages.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.remoteDeskSetup.src,
    imageAlt: 'Service business website open on a desktop monitor',
    tags: [
      'Service-by-town pages',
      'Mobile call & WhatsApp bar',
      'LocalBusiness schema',
      'Fast mobile load',
    ],
    previewHeadline: 'Heating, servicing and repair pages structured by town',
    previewSubheadline:
      'Designed for homeowners searching on mobile phones who need clear service coverage and fast contact options.',
    previewSections: [
      {
        label: 'Dedicated Service URLs',
        detail: 'Individual pages for boiler installation, annual servicing, and fault repairs.',
      },
      {
        label: 'Town Coverage Directory',
        detail: 'Explicit list of towns and postcodes served so search and AI engines recommend the business locally.',
      },
      {
        label: 'Quick Enquiry Routing',
        detail: 'Sticky mobile contact actions connected straight to WhatsApp and email.',
      },
    ],
  },
  {
    number: '03',
    kind: 'Website Sample',
    category: 'Creative Portfolio Website',
    title: 'Wedding & Event Photographer Portfolio Website',
    previewDomain: 'sample-photography-studio.victorautocore.site',
    summary:
      'Visual portfolio website that pairs fast-loading photo galleries with venue and regional pages, helping couples find your work on Google and AI answer engines.',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.warmWorkspace.src,
    imageAlt: 'Photography portfolio website layout on a studio computer',
    tags: [
      'Venue & region pages',
      'Optimised image galleries',
      'Couple FAQ section',
      'Date availability form',
    ],
    previewHeadline: 'Galleries organised by region and venue for search visibility',
    previewSubheadline:
      'Combines full-width photography with clear written facts that search crawlers and AI tools can index.',
    previewSections: [
      {
        label: 'Regional Portfolio Pages',
        detail: 'Dedicated pages for specific regions and wedding venues rather than a single unlabelled gallery.',
      },
      {
        label: 'Plain Booking Process',
        detail: 'Step-by-step explanation of how coverage works and how to check date availability.',
      },
      {
        label: 'Image SEO & Alt Labels',
        detail: 'Cleanly compressed photographs with descriptive alt labels and structured metadata.',
      },
    ],
  },
  {
    number: '04',
    kind: 'Website Sample',
    category: 'Online Seller Website',
    title: 'Digital Product & Online Seller Brand Website',
    previewDomain: 'sample-seller-hub.victorautocore.site',
    summary:
      'Search-indexed home website for faceless creators and online sellers, connecting free guides, product breakdowns and buyer FAQs directly to Stan Store, Beacons or Gumroad.',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.onlineStoreLaptopPhone.src,
    imageAlt: 'Online seller website and digital product storefront on a laptop',
    tags: [
      'Free guide spotlight',
      'Ordered product catalogue',
      'Store checkout links',
      'Search-ready product copy',
    ],
    previewHeadline: 'A search-ready storefront that turns profile visitors into buyers',
    previewSubheadline:
      'Puts your free guide first, explains each digital product in plain English, and links cleanly to checkout.',
    previewSections: [
      {
        label: 'Featured Free Guide',
        detail: 'Top-of-page lead magnet section matched to your social bio call-to-action.',
      },
      {
        label: 'Product Breakdown Cards',
        detail: 'Clear descriptions explaining who each template, guide or course is for before they click buy.',
      },
      {
        label: 'Store & Social Alignment',
        detail: 'Direct links to Stan Store, Beacons, Gumroad or Payhip with consistent wording.',
      },
    ],
  },
  {
    number: '05',
    kind: 'Website Sample',
    category: 'Professional Practice Website',
    title: 'Physiotherapy & Specialist Practice Website',
    previewDomain: 'sample-practice-web.victorautocore.site',
    summary:
      'Structured multi-page website for clinics, consultants and local practices, featuring condition-specific pages, practitioner background, and automated n8n enquiry routing.',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.designerWebsiteScreen.src,
    imageAlt: 'Clean modern professional practice website design on screen',
    tags: [
      'Condition & service pages',
      'Practitioner credentials',
      'n8n enquiry automation',
      'Clean Schema.org labels',
    ],
    previewHeadline: 'Plain-language service pages that answer buyer questions upfront',
    previewSubheadline:
      'Structured so prospective clients understand what you treat, how appointments work, and how to get in touch.',
    previewSections: [
      {
        label: 'Service & Condition Pages',
        detail: 'Focused pages for each core service so visitors land on the exact problem they need solved.',
      },
      {
        label: 'Credibility & Background',
        detail: 'Clear founder and practitioner details written without hype or jargon.',
      },
      {
        label: 'Automated Intake Routing',
        detail: 'Enquiry forms connected via n8n to email notifications and a client tracking sheet.',
      },
    ],
  },
];

const APP_SAMPLES: SampleItem[] = [
  {
    number: '01',
    kind: 'App Sample',
    category: 'Booking & Intake Web App',
    title: 'Client Booking & Pre-Visit Intake App',
    previewDomain: 'app.sample-booking-intake.site',
    summary:
      'Interactive web application where customers select a service, complete a short pre-visit questionnaire, and send a structured booking request directly to your team.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.phoneSocialFeed.src,
    imageAlt: 'Mobile web app interface showing a clean booking flow',
    tags: [
      'Multi-step intake flow',
      'Service selector',
      'Mobile-first UI',
      'n8n calendar & email sync',
    ],
    previewHeadline: 'Guided booking and client intake in three simple steps',
    previewSubheadline:
      'Replaces back-and-forth messages by collecting the exact details you need before an appointment.',
    previewSections: [
      {
        label: 'Step 1 · Service Selection',
        detail: 'Visitors pick the exact service category and read what is included.',
      },
      {
        label: 'Step 2 · Intake Questions',
        detail: 'Short, plain-English form fields tailored to the chosen service.',
      },
      {
        label: 'Step 3 · Instant Routing',
        detail: 'Sends the completed intake summary to WhatsApp, email, and your spreadsheet via n8n.',
      },
    ],
  },
  {
    number: '02',
    kind: 'App Sample',
    category: 'Project Scoping Web App',
    title: 'Service Scope & Quote Request Builder App',
    previewDomain: 'app.sample-quote-builder.site',
    summary:
      'A guided web app for trades and service businesses that lets customers describe their job, attach reference links or photos, and request a clear fixed price.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.onlineStoreLaptopPhone.src,
    imageAlt: 'Smartphone and laptop running a service quote request web application',
    tags: [
      'Interactive job builder',
      'Photo & link attachment',
      'Structured brief output',
      'Instant WhatsApp handoff',
    ],
    previewHeadline: 'Structured project briefs before you quote a job',
    previewSubheadline:
      'Helps customers explain what they need clearly so you can reply with an accurate price before work starts.',
    previewSections: [
      {
        label: 'Job Category Picker',
        detail: 'Lets the visitor choose between video ads, store fixes, website builds, or local visibility.',
      },
      {
        label: 'Asset & Link Collector',
        detail: 'Collects store URLs, social handles, and project notes in one clean view.',
      },
      {
        label: 'One-Click Brief Delivery',
        detail: 'Formats the answers into a tidy summary ready to review on mobile or desktop.',
      },
    ],
  },
  {
    number: '03',
    kind: 'App Sample',
    category: 'Online Seller Companion App',
    title: 'Digital Store Product Matcher & Guide App',
    previewDomain: 'app.sample-product-matcher.site',
    summary:
      'A lightweight web app for online sellers that asks visitors three quick questions and points them to the right digital guide, template or course in your store.',
    image:
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.socialContentPlanning.src,
    imageAlt: 'Smartphone displaying an interactive product recommendation app',
    tags: [
      '3-question buyer quiz',
      'Recommended product card',
      'Free guide delivery',
      'Stan Store & Gumroad links',
    ],
    previewHeadline: 'Help buyers find the right digital product in seconds',
    previewSubheadline:
      'Built for bio links so visitors who are unsure where to start get directed to the exact item that fits them.',
    previewSections: [
      {
        label: 'Buyer Goal Filter',
        detail: 'Simple multiple-choice prompts that narrow down what the visitor is trying to solve.',
      },
      {
        label: 'Matched Product View',
        detail: 'Shows the recommended product alongside a free starter guide option.',
      },
      {
        label: 'Direct Checkout Link',
        detail: 'Sends the buyer straight to the matching Stan Store, Beacons or Gumroad listing.',
      },
    ],
  },
  {
    number: '04',
    kind: 'App Sample',
    category: 'Client Portal Web App',
    title: 'Content Calendar & Draft Approval Portal App',
    previewDomain: 'app.sample-client-portal.site',
    summary:
      'A clean client dashboard app for reviewing planned Instagram, Facebook and TikTok posts, approving video adverts and captions, and checking monthly deliverables.',
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.editorTimelineDark.src,
    imageAlt: 'Mobile and desktop interface showing a content approval portal app',
    tags: [
      'Content calendar view',
      'Caption & Reel approval',
      'Revision notes box',
      'Deliverable status tracker',
    ],
    previewHeadline: 'Every post, Reel and caption approved in one tidy dashboard',
    previewSubheadline:
      'Gives business owners a single place to preview upcoming content and sign off before anything goes live.',
    previewSections: [
      {
        label: 'Weekly & Monthly Schedule',
        detail: 'Visual list of scheduled posts, stories and Reels across Instagram, Facebook and TikTok.',
      },
      {
        label: 'One-Tap Sign-Off',
        detail: 'Approve captions and video drafts or leave a quick revision note on any item.',
      },
      {
        label: 'Finished Asset Library',
        detail: 'Direct download links for completed AI video adverts and monthly reports.',
      },
    ],
  },
  {
    number: '05',
    kind: 'App Sample',
    category: 'Visibility Inspection Web App',
    title: 'Google & AI Visibility Checklist Tracker App',
    previewDomain: 'app.sample-visibility-tracker.site',
    summary:
      'An inspection and before-and-after tracking app that logs Google Business Profile updates, service-per-town pages, schema checks, and AI answer engine tests.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: STOCK_PHOTOS.phoneMapSearch.src,
    imageAlt: 'Dashboard interface showing visibility checklist and inspection items on screen',
    tags: [
      '6-factor visibility log',
      'Before & after comparison',
      'AI prompt check record',
      'Directory consistency list',
    ],
    previewHeadline: 'Clear before-and-after visibility tracking without confusing charts',
    previewSubheadline:
      'Shows every setup step completed across Google Search, Maps, ChatGPT, Gemini, Perplexity and Claude.',
    previewSections: [
      {
        label: 'Six-Factor Audit Status',
        detail: 'Tracks Crawler Access, Schema, FAQ, Entity Clarity, Reviews routine, and Citations.',
      },
      {
        label: 'Before & After Log',
        detail: 'Side-by-side record of what appeared on Day 1 versus the follow-up check two to four weeks later.',
      },
      {
        label: 'Town & Service Matrix',
        detail: 'Checklist of every service page and town combination indexed on the website.',
      },
    ],
  },
];

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
  const [activeSample, setActiveSample] = useState<SampleItem | null>(null);

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

      <section id="website-samples" className="py-16 sm:py-22 border-t border-[#2C2C28] bg-[#161614]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#F59E0B]">
              <LayoutGrid className="w-4 h-4" aria-hidden="true" />
              <span>Website Showcase · 5 Samples</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Five Website Samples
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Sample website structures built for local businesses, clinics, trades and online
              sellers. Inspect any sample below to see how the pages, copy and search labels are
              arranged.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBSITE_SAMPLES.map((sample, index) => (
              <RevealSection key={sample.number} delay={(index % 3) * 0.05} className="h-full">
                <article className="group h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="px-4 py-2.5 border-b border-[#2C2C28] bg-[#141413] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#40403A]" />
                        <span className="w-2 h-2 rounded-full bg-[#40403A]" />
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      </div>
                      <span className="text-[11px] font-mono text-[#85847E] truncate">
                        {sample.previewDomain}
                      </span>
                      <span className="font-display text-xs font-semibold text-[#F59E0B] tabular-nums">
                        {sample.number}
                      </span>
                    </div>

                    <div className="aspect-[16/10] overflow-hidden border-b border-[#2C2C28] bg-[#141413]">
                      <StudioImage
                        src={sample.image}
                        fallbackSrc={sample.fallbackImage}
                        alt={sample.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-medium text-[#F59E0B]">{sample.category}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-[#F4F3EE]">
                        {sample.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#B3B2AB] leading-relaxed">
                        {sample.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {sample.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md border border-[#2C2C28] bg-[#141413] text-xs font-medium text-[#B3B2AB]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[#2C2C28] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveSample(sample)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>Preview structure</span>
                    </button>
                    <a
                      href={BUSINESS_FACTS.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#B3B2AB] hover:text-[#F4F3EE] transition-colors"
                    >
                      <span>Ask on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section id="app-samples" className="py-16 sm:py-22 border-t border-[#2C2C28]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#F59E0B]">
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              <span>Web &amp; Mobile App Showcase · 5 Samples</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              Five App Samples
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
              Practical web applications built for booking intake, project scoping, online store
              product matching, client approvals and visibility tracking.
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_SAMPLES.map((sample, index) => (
              <RevealSection key={sample.number} delay={(index % 3) * 0.05} className="h-full">
                <article className="group h-full bg-[#1C1C1A] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="px-4 py-2.5 border-b border-[#2C2C28] bg-[#141413] flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#F59E0B]">
                        <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{sample.kind}</span>
                      </span>
                      <span className="text-[11px] font-mono text-[#85847E] truncate">
                        {sample.previewDomain}
                      </span>
                      <span className="font-display text-xs font-semibold text-[#F59E0B] tabular-nums">
                        {sample.number}
                      </span>
                    </div>

                    <div className="aspect-[16/10] overflow-hidden border-b border-[#2C2C28] bg-[#141413]">
                      <StudioImage
                        src={sample.image}
                        fallbackSrc={sample.fallbackImage}
                        alt={sample.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-medium text-[#F59E0B]">{sample.category}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-[#F4F3EE]">
                        {sample.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#B3B2AB] leading-relaxed">
                        {sample.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {sample.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md border border-[#2C2C28] bg-[#141413] text-xs font-medium text-[#B3B2AB]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[#2C2C28] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveSample(sample)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>Preview app flow</span>
                    </button>
                    <a
                      href={BUSINESS_FACTS.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#B3B2AB] hover:text-[#F4F3EE] transition-colors"
                    >
                      <span>Ask on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {activeSample && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sample-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/85 backdrop-blur-sm"
          onClick={() => setActiveSample(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1C1C1A] border border-[#2C2C28] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#2C2C28] bg-[#141413] flex items-center justify-between gap-4 sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-2.5 py-1 rounded-md bg-[#1C1C1A] border border-[#2C2C28] text-xs font-semibold text-[#F59E0B] shrink-0">
                  {activeSample.kind} {activeSample.number}
                </span>
                <span className="text-xs font-mono text-[#85847E] truncate">
                  {activeSample.previewDomain}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveSample(null)}
                aria-label="Close sample preview"
                className="p-1.5 rounded-lg border border-[#2C2C28] bg-[#1C1C1A] text-[#B3B2AB] hover:text-[#F4F3EE] hover:border-[#F59E0B] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#141413]">
                <StudioImage
                  src={activeSample.image}
                  fallbackSrc={activeSample.fallbackImage}
                  alt={activeSample.imageAlt}
                  eager
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-medium text-[#F59E0B]">{activeSample.category}</p>
                <h3
                  id="sample-preview-title"
                  className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-[#F4F3EE]"
                >
                  {activeSample.title}
                </h3>
                <p className="mt-2 text-base font-medium text-[#F4F3EE]">
                  {activeSample.previewHeadline}
                </p>
                <p className="mt-2 text-sm text-[#B3B2AB] leading-relaxed">
                  {activeSample.previewSubheadline}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-[#85847E]">
                  Included pages &amp; workflow screens
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeSample.previewSections.map((sec) => (
                    <div
                      key={sec.label}
                      className="bg-[#141413] border border-[#2C2C28] rounded-xl p-4"
                    >
                      <h4 className="font-display text-sm font-semibold text-[#F59E0B]">
                        {sec.label}
                      </h4>
                      <p className="mt-2 text-xs text-[#B3B2AB] leading-relaxed">{sec.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#2C2C28] flex flex-wrap items-center justify-between gap-4">
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
                  <span>Ask for a build like this on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <FaqSection items={WEBSITE_FAQS} />

      <ContactCtaStrip
        heading="Need a new website or a clean redesign?"
        body="Message on WhatsApp or email what your business does and share your current site if you have one. You will get a clear price before any work starts."
      />
    </>
  );
}
