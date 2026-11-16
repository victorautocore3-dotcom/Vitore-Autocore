import {useEffect, useState} from 'react';

interface StudioImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

const DEFAULT_BACKUP_PHOTO =
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80';

export function StudioImage({
  src,
  fallbackSrc = DEFAULT_BACKUP_PHOTO,
  alt,
  className = '',
  eager = false,
}: StudioImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setTriedFallback(false);
  }, [src]);

  function handleError() {
    if (!triedFallback && fallbackSrc && currentSrc !== fallbackSrc) {
      setTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else if (currentSrc !== DEFAULT_BACKUP_PHOTO) {
      setCurrentSrc(DEFAULT_BACKUP_PHOTO);
    }
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={eager ? 'eager' : 'lazy'}
      onError={handleError}
      className={`${className} transition-transform duration-500 ease-out will-change-transform`}
    />
  );
}
