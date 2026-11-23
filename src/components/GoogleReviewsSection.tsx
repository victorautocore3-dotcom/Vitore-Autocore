import {useState} from 'react';
import {CheckCircle2} from 'lucide-react';
import {
  GOOGLE_REVIEWS,
  SERVICE_FILTER_TABS,
  type GoogleReviewItem,
  type ReviewServiceSlug,
} from '../data/reviews';
import {RevealSection} from './MotionPrimitives';

interface GoogleReviewsSectionProps {
  serviceFilter?: ReviewServiceSlug;
  heading?: string;
  subheading?: string;
  showFilterTabs?: boolean;
}

function GoogleGLogo({className = 'w-5 h-5'}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

function GoogleStarRow({rating = 5, sizeClass = 'w-4 h-4'}: {rating?: number; sizeClass?: string}) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({length: 5}).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`${sizeClass} ${index < rating ? 'text-[#FBBC04]' : 'text-[#DADCE0]'}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.3-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewerAvatar({review}: {review: GoogleReviewItem}) {
  const [src, setSrc] = useState(review.avatar);

  return (
    <div className="relative shrink-0">
      <img
        src={src}
        alt={review.avatarAlt}
        loading="lazy"
        onError={() => {
          if (src !== review.avatarFallback) {
            setSrc(review.avatarFallback);
          }
        }}
        className="w-11 h-11 rounded-full object-cover border border-[#DADCE0] bg-[#F1F3F4]"
      />
      {review.isLocalGuide && (
        <span
          title="Google Local Guide"
          aria-hidden="true"
          className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#F29900] border-2 border-white flex items-center justify-center"
        >
          <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white" fill="currentColor">
            <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07l.59 3.43L6 8.885 2.91 10.5l.59-3.43L1 4.635l3.455-.505L6 1z" />
          </svg>
        </span>
      )}
    </div>
  );
}

function GoogleReviewCard({review}: {review: GoogleReviewItem}) {
  return (
    <article className="h-full bg-white text-[#202124] border border-[#DADCE0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <ReviewerAvatar review={review} />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-[15px] font-semibold text-[#202124] truncate">
                  {review.name}
                </h3>
                <CheckCircle2
                  className="w-3.5 h-3.5 text-[#1A73E8] shrink-0"
                  aria-label="Verified client review"
                />
              </div>
              <p className="text-xs text-[#5F6368] truncate">{review.reviewCountLabel}</p>
              <p className="text-[11px] font-medium text-[#3C4043] truncate mt-0.5">
                {review.role}
              </p>
            </div>
          </div>

          <div className="shrink-0 pt-0.5" title="Posted on Google">
            <GoogleGLogo className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-3.5 flex items-center flex-wrap gap-2">
          <GoogleStarRow rating={review.rating} />
          <span className="text-xs text-[#5F6368]">{review.timeAgo}</span>
          <span className="px-1.5 py-0.5 rounded bg-[#E8F0FE] text-[#1967D2] text-[10px] font-semibold uppercase tracking-wide">
            NEW
          </span>
        </div>

        <p className="mt-3 text-sm text-[#3C4043] leading-relaxed">{review.text}</p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-[#F1F3F4] flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8F9FA] border border-[#DADCE0] text-[11px] font-medium text-[#3C4043]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" aria-hidden="true" />
          <span>Service: {review.serviceLabel}</span>
        </span>
        <span className="text-[11px] font-medium text-[#5F6368]">Google Review</span>
      </div>
    </article>
  );
}

export function GoogleReviewsSection({
  serviceFilter,
  heading = 'What clients say across our services',
  subheading = '15 client reviews across Google Visibility, AI Video Ads, Store Fixes, Social Media Management, Website & App Design, and Graphics Design.',
  showFilterTabs = false,
}: GoogleReviewsSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | ReviewServiceSlug>(
    serviceFilter ?? 'all'
  );

  const effectiveFilter = serviceFilter ?? activeTab;
  const visibleReviews =
    effectiveFilter === 'all'
      ? GOOGLE_REVIEWS
      : GOOGLE_REVIEWS.filter((item) => item.serviceSlug === effectiveFilter);

  return (
    <section
      id="client-reviews"
      className="py-16 sm:py-22 border-t border-[#2C2C28] bg-[#161614]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F59E0B]">Client Feedback</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F3EE]">
              {heading}
            </h2>
            <p className="mt-3 text-base text-[#B3B2AB] leading-relaxed">{subheading}</p>
          </div>

          <div className="bg-white text-[#202124] border border-[#DADCE0] rounded-2xl px-5 py-4 shadow-sm flex items-center gap-4 shrink-0 self-start lg:self-auto">
            <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] flex items-center justify-center shrink-0">
              <GoogleGLogo className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold text-[#202124]">5.0</span>
                <GoogleStarRow rating={5} sizeClass="w-4 h-4" />
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Based on <strong className="font-semibold text-[#202124]">15 reviews</strong> across
                6 services
              </p>
            </div>
          </div>
        </RevealSection>

        {showFilterTabs && !serviceFilter && (
          <RevealSection delay={0.04} className="mt-8 flex flex-wrap items-center gap-2">
            {SERVICE_FILTER_TABS.map((tab) => {
              const isSelected = activeTab === tab.slug;
              const count =
                tab.slug === 'all'
                  ? GOOGLE_REVIEWS.length
                  : GOOGLE_REVIEWS.filter((r) => r.serviceSlug === tab.slug).length;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => setActiveTab(tab.slug)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer inline-flex items-center gap-2 ${
                    isSelected
                      ? 'bg-white text-[#202124] border border-[#DADCE0] shadow-sm font-semibold'
                      : 'bg-[#1C1C1A] text-[#B3B2AB] border border-[#2C2C28] hover:border-[#40403A] hover:text-[#F4F3EE]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[11px] tabular-nums ${
                      isSelected
                        ? 'bg-[#E8F0FE] text-[#1967D2] font-semibold'
                        : 'bg-[#141413] text-[#85847E]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </RevealSection>
        )}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, index) => (
            <RevealSection key={review.id} delay={(index % 3) * 0.04} className="h-full">
              <GoogleReviewCard review={review} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
