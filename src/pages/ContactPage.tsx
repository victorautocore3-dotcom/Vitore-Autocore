import {useState, type FormEvent} from 'react';
import {CheckCircle2, Instagram, Mail, MapPin, MessageCircle, Send} from 'lucide-react';
import {SeoHead} from '../components/SeoHead';
import {StudioImage} from '../components/StudioImage';
import {HeroEntrance, RevealSection} from '../components/MotionPrimitives';
import {BUSINESS_FACTS, PAGE_SEO, STOCK_PHOTOS} from '../data/business';

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
}

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!details.trim()) {
      nextErrors.details = 'Please tell Victor briefly what you need.';
    }
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSendError(false);
    setIsSending(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/50d84279215744d0d155a1d91688debd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: details.trim(),
          _subject: `Enquiry from ${name.trim()} via Victor Autocore`,
          _replyto: email.trim(),
          _template: 'table',
          _captcha: 'false',
          _honey: '',
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  }

  const encodedWhatsappText = encodeURIComponent(
    `Hi Victor, my name is ${name.trim()} (${email.trim()}). Here is what I need: ${details.trim()}`
  );
  const prefilledWhatsappLink = `${BUSINESS_FACTS.whatsappHref}?text=${encodedWhatsappText}`;

  return (
    <>
      <SeoHead seo={PAGE_SEO.contact} />

      <section className="py-16 sm:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <HeroEntrance className="max-w-3xl">
            <p className="text-sm font-medium text-[#F59E0B]">Direct Contact</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F3EE] leading-[1.1]">
              Contact {BUSINESS_FACTS.businessName}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#B3B2AB] leading-relaxed">
              Send a message on WhatsApp, email directly, or fill in the form below. Victor replies
              personally, and you will get a clear price before any work starts.
            </p>
          </HeroEntrance>

          <RevealSection className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group aspect-[16/10] rounded-xl overflow-hidden border border-[#2C2C28] bg-[#1C1C1A]">
                <StudioImage
                  src={STOCK_PHOTOS.warmWorkspace.src}
                  fallbackSrc={STOCK_PHOTOS.warmWorkspace.fallbackSrc}
                  alt={STOCK_PHOTOS.warmWorkspace.alt}
                  eager
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                />
              </div>

              <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7 space-y-6">
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#F4F3EE]">
                    Reach Victor directly
                  </h2>
                  <p className="mt-2 text-sm text-[#B3B2AB] leading-relaxed">
                    Every message goes straight to {BUSINESS_FACTS.ownerFullName} (
                    {BUSINESS_FACTS.ownerKnownAs}). No bots or call centres.
                  </p>
                </div>

                <a
                  href={BUSINESS_FACTS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {BUSINESS_FACTS.whatsappDisplay}</span>
                </a>

                <div className="pt-4 border-t border-[#2C2C28] space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-xs text-[#85847E]">Email</div>
                      <a
                        href={`mailto:${BUSINESS_FACTS.email}`}
                        className="text-[#F4F3EE] hover:text-[#F59E0B] transition-colors break-all"
                      >
                        {BUSINESS_FACTS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-xs text-[#85847E]">Instagram</div>
                      <a
                        href={BUSINESS_FACTS.instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F4F3EE] hover:text-[#F59E0B] transition-colors"
                      >
                        {BUSINESS_FACTS.instagramHandle}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-xs text-[#85847E]">Location &amp; Clients</div>
                      <p className="text-[#B3B2AB]">{BUSINESS_FACTS.serviceAreaStatement}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#1C1C1A] border border-[#2C2C28] rounded-xl p-7 sm:p-9">
                {submitted ? (
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 text-[#F59E0B] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-[#F4F3EE]">
                          Your message has been sent
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-[#B3B2AB] leading-relaxed">
                          Thank you, {name.trim()}. Your message is on its way to Victor, and he
                          replies personally to every message. If it is urgent, you can also reach
                          him on WhatsApp below.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#141413] border border-[#2C2C28] rounded-lg p-5 text-sm text-[#B3B2AB] space-y-2">
                      <p>
                        <span className="text-[#85847E]">Name:</span>{' '}
                        <span className="text-[#F4F3EE]">{name.trim()}</span>
                      </p>
                      <p>
                        <span className="text-[#85847E]">Email:</span>{' '}
                        <span className="text-[#F4F3EE]">{email.trim()}</span>
                      </p>
                      <p>
                        <span className="text-[#85847E]">What you need:</span>{' '}
                        <span className="text-[#F4F3EE]">{details.trim()}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={prefilledWhatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Send via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName('');
                          setEmail('');
                          setDetails('');
                        }}
                        className="px-4 py-3 text-sm font-medium text-[#85847E] hover:text-[#F4F3EE] transition-colors cursor-pointer"
                      >
                        Write another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {sendError && (
                      <p role="alert" className="mb-4 text-xs text-[#F59E0B]">
                        Sorry, the message could not be sent just now. Please try again, or reach
                        Victor on WhatsApp.
                      </p>
                    )}
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-[#F4F3EE]">
                        Tell Victor what you need
                      </h2>
                      <p className="mt-1.5 text-sm text-[#B3B2AB]">
                        Victor replies personally. Share what you are selling or where you need help
                        and get a clear price before any work starts.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#F4F3EE]"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="mt-2 w-full px-4 py-3 rounded-md bg-[#141413] border border-[#2C2C28] focus:border-[#F59E0B] focus:outline-none text-sm text-[#F4F3EE] placeholder:text-[#85847E]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-[#F59E0B]">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#F4F3EE]"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-2 w-full px-4 py-3 rounded-md bg-[#141413] border border-[#2C2C28] focus:border-[#F59E0B] focus:outline-none text-sm text-[#F4F3EE] placeholder:text-[#85847E]"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#F59E0B]">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-details"
                        className="block text-sm font-medium text-[#F4F3EE]"
                      >
                        What you need
                      </label>
                      <textarea
                        id="contact-details"
                        name="details"
                        rows={5}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="For example: AI video ad from product photos, Stan Store check, Google visibility setup, or website design."
                        className="mt-2 w-full px-4 py-3 rounded-md bg-[#141413] border border-[#2C2C28] focus:border-[#F59E0B] focus:outline-none text-sm text-[#F4F3EE] placeholder:text-[#85847E] resize-y"
                      />
                      {errors.details && (
                        <p className="mt-1.5 text-xs text-[#F59E0B]">{errors.details}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] hover:-translate-y-0.5 text-[#141413] text-sm font-semibold transition-all duration-200 cursor-pointer"
                    >
                      <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{isSending ? 'Sending...' : 'Send message'}</span>
                    </button>
                  </form>
                  </>
                )}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
