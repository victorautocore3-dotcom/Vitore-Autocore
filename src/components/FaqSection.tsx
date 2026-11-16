import {useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {ChevronDown} from 'lucide-react';
import {RevealSection} from './MotionPrimitives';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  items: FaqItem[];
}

export function FaqSection({title = 'Questions people ask', items}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-22 border-t border-[#2C2C28]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#F59E0B]">FAQ</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4F3EE]">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#B3B2AB] leading-relaxed max-w-sm">
              Plain answers before you message. If your question is not here, send a quick note on
              WhatsApp or email.
            </p>
          </div>

          <RevealSection delay={0.06} className="lg:col-span-8 space-y-3">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const numLabel = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={item.question}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? 'bg-[#1C1C1A] border-[#F59E0B]'
                      : 'bg-[#181816] border-[#2C2C28] hover:border-[#40403A]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display text-xs font-semibold text-[#F59E0B] tabular-nums mt-1.5 shrink-0">
                        {numLabel}
                      </span>
                      <span className="font-display text-base sm:text-lg font-semibold text-[#F4F3EE] group-hover:text-[#F59E0B] transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F59E0B] shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={shouldReduceMotion ? false : {opacity: 0.08, y: -6}}
                        animate={{opacity: 1, y: 0}}
                        exit={shouldReduceMotion ? {opacity: 1, y: 0} : {opacity: 0, y: -4}}
                        transition={{duration: shouldReduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1]}}
                        className="px-6 pb-5 pt-1 pl-14 border-t border-[#2C2C28]/70"
                      >
                        <p className="mt-3 text-[15px] sm:text-base text-[#B3B2AB] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </RevealSection>
        </RevealSection>
      </div>
    </section>
  );
}
