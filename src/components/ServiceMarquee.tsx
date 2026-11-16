import {Link} from 'react-router-dom';
import {SERVICE_LINKS} from '../data/business';

export function ServiceMarquee() {
  const items = [
    ...SERVICE_LINKS.map((s) => ({label: s.title, path: s.path})),
    {label: 'n8n Automation', path: '/contact'},
  ];

  return (
    <div
      aria-label="Services overview"
      className="group border-t border-[#2C2C28] bg-[#161614] overflow-hidden py-4 select-none"
    >
      <div className="flex w-max animate-studio-marquee">
        {[0, 1].map((dupIndex) => (
          <div
            key={dupIndex}
            aria-hidden={dupIndex === 1}
            className="flex items-center gap-8 pr-8 shrink-0"
          >
            {items.map((item) => (
              <Link
                key={`${dupIndex}-${item.label}`}
                to={item.path}
                tabIndex={dupIndex === 1 ? -1 : undefined}
                className="inline-flex items-center gap-8 text-sm font-medium text-[#B3B2AB] hover:text-[#F59E0B] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-[#F59E0B]">
                  ·
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
