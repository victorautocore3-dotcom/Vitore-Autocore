import {
  Bot,
  Building2,
  CheckSquare,
  Code2,
  FileQuestion,
  Globe,
  ShieldCheck,
  Star,
} from 'lucide-react';
import {RevealSection} from './MotionPrimitives';

const AI_ENGINES = [
  {
    name: 'ChatGPT',
    role: 'Conversational search & recommendations',
  },
  {
    name: 'Gemini',
    role: 'Google AI answers & local results',
  },
  {
    name: 'Perplexity',
    role: 'Cited direct-answer search',
  },
  {
    name: 'Claude',
    role: 'Entity & directory-grounded answers',
  },
];

const CHECKLIST_FACTORS = [
  {
    icon: ShieldCheck,
    name: 'Crawler Access',
    detail: 'Confirming search engines and AI crawlers can read every service page without technical blocks.',
  },
  {
    icon: Code2,
    name: 'Schema',
    detail: 'Structured code labels so search tools know your business type, services, towns and contact facts.',
  },
  {
    icon: FileQuestion,
    name: 'FAQ',
    detail: 'Real buyer questions written in plain English so answer engines can quote your pages directly.',
  },
  {
    icon: Building2,
    name: 'Entity Clarity',
    detail: 'One consistent set of business facts—name, phone, services and areas—everywhere online.',
  },
  {
    icon: Star,
    name: 'Reviews',
    detail: 'A clear routine for gathering customer reviews that support real-world local trust.',
  },
  {
    icon: Globe,
    name: 'Citations',
    detail: 'Accurate listings on the trusted local and industry directories that AI models read from.',
  },
];

export function AiVisibilityPanel() {
  return (
    <RevealSection className="bg-[#1C1C1A] border border-[#2C2C28] rounded-2xl overflow-hidden">
      <div className="px-6 sm:px-8 py-5 border-b border-[#2C2C28] bg-[#181816] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 text-[#F59E0B] shrink-0" aria-hidden="true" />
          <h3 className="font-display text-base sm:text-lg font-semibold text-[#F4F3EE]">
            What I check for Google &amp; AI visibility
          </h3>
        </div>
        <span className="text-xs font-medium text-[#B3B2AB]">
          Inspection checklist · Before &amp; after proof
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#85847E]">
            AI tools checked during setup
          </p>
          <RevealSection className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {AI_ENGINES.map((engine) => (
              <div
                key={engine.name}
                className="bg-[#141413] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-4 flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-base font-semibold text-[#F4F3EE]">
                    {engine.name}
                  </span>
                  <CheckSquare className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                </div>
                <p className="text-xs text-[#85847E] leading-snug">{engine.role}</p>
              </div>
            ))}
          </RevealSection>
        </div>

        <div className="border-t border-[#2C2C28] pt-7">
          <p className="text-xs font-medium uppercase tracking-wider text-[#85847E]">
            Six factors inspected on every business
          </p>
          <RevealSection delay={0.05} className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHECKLIST_FACTORS.map((factor) => {
              const Icon = factor.icon;
              return (
                <div
                  key={factor.name}
                  className="bg-[#141413] border border-[#2C2C28] hover:border-[#40403A] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                        <h4 className="font-display text-base font-semibold text-[#F4F3EE]">
                          {factor.name}
                        </h4>
                      </div>
                    </div>
                    <p className="mt-2.5 text-sm text-[#B3B2AB] leading-relaxed">
                      {factor.detail}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#2C2C28] flex items-center justify-between text-xs text-[#85847E]">
                    <span>What I check</span>
                    <span className="text-[#F59E0B] font-medium">Included in setup</span>
                  </div>
                </div>
              );
            })}
          </RevealSection>
        </div>
      </div>
    </RevealSection>
  );
}
