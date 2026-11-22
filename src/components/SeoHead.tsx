import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import type {PageSeo} from '../data/business';
import type {FaqItem} from './FaqSection';

const SITE_ORIGIN = 'https://www.victorautocore.site';
const FAQ_SCHEMA_SCRIPT_ID = 'victor-autocore-faq-jsonld';

interface SeoHeadProps {
  seo: PageSeo;
  faq?: FaqItem[];
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  const existing = document.head.querySelectorAll(`meta[${attribute}="${key}"]`);
  let tag = existing[0] as HTMLMetaElement | undefined;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  for (let i = 1; i < existing.length; i += 1) {
    existing[i].remove();
  }
  tag.setAttribute('content', content);
}

export function SeoHead({seo, faq}: SeoHeadProps) {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = seo.title;
    setMetaTag('name', 'description', seo.description);
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);

    const normalizedPath =
      seo.path === '/' ? '/' : `/${seo.path.replace(/^\/+|\/+$/g, '')}`;
    const canonicalUrl = `${SITE_ORIGIN}${normalizedPath}`;
    setMetaTag('property', 'og:url', canonicalUrl);

    const existingCanonicals = document.head.querySelectorAll('link[rel="canonical"]');
    let canonical = existingCanonicals[0] as HTMLLinkElement | undefined;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    for (let i = 1; i < existingCanonicals.length; i += 1) {
      existingCanonicals[i].remove();
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [seo]);

  useEffect(() => {
    const existingScript = document.getElementById(FAQ_SCHEMA_SCRIPT_ID);
    if (!faq || faq.length === 0) {
      existingScript?.remove();
      return;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    let script = existingScript as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = FAQ_SCHEMA_SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      document.getElementById(FAQ_SCHEMA_SCRIPT_ID)?.remove();
    };
  }, [faq]);

  return null;
}
