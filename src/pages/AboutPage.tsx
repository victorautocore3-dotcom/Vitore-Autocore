import {Link} from 'react-router-dom';
import {ArrowRight, Instagram, Mail, MapPin, MessageCircle} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {ContactCtaStrip} from '../components/ContactCtaStrip';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO, SERVICE_LINKS, STOCK_PHOTOS} from '../data/business';

export function AboutPage() {
  return (
    <>
      <SeoHead seo={PAGE_SEO.about} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <HeroEntrance className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#F59E0B]">
                {BUSINESS_FACTS.businessName} · Founder &amp; Owner
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
                About {BUSINESS_FACTS.ownerFullName} ({BUSINESS_FACTS.ownerKnownAs})
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed">
                Victor Autocore is run by Akinjide Akinola, known as Victor. Based in Lagos,
                Nigeria, he works remotely for small businesses, brands and online sellers in the
                UK and the US.
              </p>
            </HeroEntrance>

            <HeroEntrance delay={0.12} className="lg:col-span-5">
              <div className="group h-full min-h-[250px] rounded-2xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.remoteDeskSetup.src}
                  fallbackSrc={STOCK_PHOTOS.remoteDeskSetup.fallbackSrc}
                  alt={STOCK_PHOTOS.remoteDeskSetup.alt}
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
          <RevealSection className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
                  Experience and background
                </h2>
                <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
                  Everything Victor offers comes from years of hands-on social media work, writing,
                  video creation and building online visibility.
                </p>
              </div>

              <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7 sm:p-8">
                <ul className="divide-y divide-[#2C2C28]">
                  {BUSINESS_FACTS.background.map((item, idx) => (
                    <li key={item} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                      <span className="font-display text-sm font-semibold text-[#F59E0B] tabular-nums shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="text-sm sm:text-base text-[#F4F3EE] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#F4F3EE]">
                  How Victor works with clients
                </h2>
                <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">
                  You deal directly with Victor from the first message to the finished work. No
                  layers of account managers, and no guesswork about what is being delivered. Before
                  any paid work starts, you get a clear price based on what your project needs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="group aspect-[16/10] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.editorTimelineDark.src}
                  fallbackSrc={STOCK_PHOTOS.editorTimelineDark.fallbackSrc}
                  alt={STOCK_PHOTOS.editorTimelineDark.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                />
              </div>

              <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7 space-y-5">
                <h2 className="font-display text-xl font-semibold text-[#F4F3EE]">
                  Business details
                </h2>
                <div className="space-y-3 text-sm text-[#B3B2AB]">
                  <p>
                    <span className="text-[#85847E]">Business name:</span>{' '}
                    <span className="text-[#F4F3EE] font-medium">
                      {BUSINESS_FACTS.businessName}
                    </span>
                  </p>
                  <p>
                    <span className="text-[#85847E]">Owner:</span>{' '}
                    <span className="text-[#F4F3EE] font-medium">
                      {BUSINESS_FACTS.ownerFullName} ({BUSINESS_FACTS.ownerKnownAs})
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{BUSINESS_FACTS.serviceAreaStatement}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2C2C28] space-y-3 text-sm">
                  <a
                    href={`mailto:${BUSINESS_FACTS.email}`}
                    className="flex items-center gap-2.5 text-[#F4F3EE] hover:text-[#F59E0B] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                    <span>{BUSINESS_FACTS.email}</span>
                  </a>
                  <a
                    href={BUSINESS_FACTS.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#F4F3EE] hover:text-[#F59E0B] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                    <span>WhatsApp: {BUSINESS_FACTS.whatsappDisplay}</span>
                  </a>
                  <a
                    href={BUSINESS_FACTS.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#F4F3EE] hover:text-[#F59E0B] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                    <span>Instagram: {BUSINESS_FACTS.instagramHandle}</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7">
                <h2 className="font-display text-xl font-semibold text-[#F4F3EE]">
                  Services offered
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {SERVICE_LINKS.map((service) => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-2 text-[#B3B2AB] hover:text-[#F59E0B] transition-colors"
                      >
                        <ArrowRight
                          className="w-3.5 h-3.5 text-[#F59E0B] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{service.title}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1 text-[#B3B2AB] flex items-center gap-2">
                    <ArrowRight
                      className="w-3.5 h-3.5 text-[#F59E0B] shrink-0"
                      aria-hidden="true"
                    />
                    <span>n8n automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <ContactCtaStrip
        heading="Want to work with Victor?"
        body="Send a message on WhatsApp or email with what you are working on. You will get a direct reply and a clear price before any work starts."
      />
    </>
  );
}
