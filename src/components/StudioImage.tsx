import {useState} from 'react';
import {Film} from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function StudioImage({src, alt, className = ''}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-[#1C1C1A] border border-[#2C2C28] text-[#85847E] p-8 ${className}`}
      >
        <Film className="w-8 h-8 text-[#F59E0B]" aria-hidden="true" />
        <span className="text-xs text-center max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
