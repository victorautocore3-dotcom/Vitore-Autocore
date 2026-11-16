export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export interface ServiceLinkItem {
  number: string;
  title: string;
  shortTitle: string;
  path: string;
  summary: string;
  audience: string;
  image: string;
  imageAlt: string;
  subServices: string[];
}

export const BUSINESS_FACTS = {
  businessName: 'Victor Autocore',
  ownerFullName: 'Akinjide Akinola',
  ownerKnownAs: 'Victor',
  location: 'Lagos, Nigeria',
  serviceAreaStatement: 'Based in Lagos, Nigeria. Works remotely for clients in the UK and the US.',
  email: 'victorautocore091@gmail.com',
  whatsappDisplay: '+2348110670885',
  whatsappHref: 'https://wa.me/2348110670885',
  instagramHandle: '@aianimator_victor',
  instagramHref: 'https://www.instagram.com/aianimator_victor',
  background: [
    '5+ years of freelance social media management and content creation for UK and US brands.',
    'Community Manager and Content Writer at wilds.ai since 2024.',
    'AI video and UGC style ad creator since 2025.',
    'Runs the faceless YouTube channel Beyond Unknown.',
    'Founder of AutoCore.',
  ],
  allServicesList: [
    'AI video adverts and Reels',
    'Social media management',
    'Store setup and fixes for online sellers',
    'Google visibility setup (SEO, AEO and GEO)',
    'Website and app design',
    'n8n automation',
  ],
} as const;

export const STUDIO_IMAGES = {
  heroWorkspace: '/src/assets/images/studio_hero_workspace_1794846364986.jpg',
  heroProductionReel: '/src/assets/images/hero_production_reel_1794847623466.jpg',
  videoProduction: '/src/assets/images/video_production_frame_1794846366852.jpg',
  socialFeeds: '/src/assets/images/social_feeds_studio_1794847622810.jpg',
  mobileStore: '/src/assets/images/mobile_store_guide_1794847670076.jpg',
  searchMaps: '/src/assets/images/search_maps_desk_1794847623477.jpg',
  editorialWorkspace: '/src/assets/images/editorial_workspace_detail_1794846367975.jpg',
} as const;

export const SERVICE_LINKS: ServiceLinkItem[] = [
  {
    number: '01',
    title: 'AI Video Ads and Reels',
    shortTitle: 'AI Video Ads',
    path: '/ai-video-ads',
    summary:
      'Finished adverts, promotional Reels, book trailers and short sales videos built from your product photos or store link. No filming needed.',
    audience: 'Small brands, online sellers and local businesses',
    image: STUDIO_IMAGES.videoProduction,
    imageAlt: 'Video editing desk with cinema monitor and studio microphone under warm amber light',
    subServices: [
      'Product adverts',
      'Promotional Reels',
      'Book trailers',
      'Short sales videos',
      'Talking presenter or visual captions',
    ],
  },
  {
    number: '02',
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    path: '/social-media-management',
    summary:
      'Posts, stories, Reels, captions, content calendar, hashtag research and monthly reporting for Instagram, Facebook and TikTok.',
    audience: 'Instagram, Facebook and TikTok',
    image: STUDIO_IMAGES.socialFeeds,
    imageAlt: 'Smartphone displaying social media video feed on a dark timber studio desk',
    subServices: [
      'Posts and stories',
      'Reels and short videos',
      'Captions',
      'Content calendar',
      'Hashtag research',
      'Monthly report',
    ],
  },
  {
    number: '03',
    title: 'Store Setup and Fixes for Online Sellers',
    shortTitle: 'Store Fixes',
    path: '/store-fixes',
    summary:
      'Product order, free guide placement, descriptions, welcome messages and bio alignment for faceless sellers. First store check is free.',
    audience: 'Stan Store, Beacons and Gumroad',
    image: STUDIO_IMAGES.mobileStore,
    imageAlt: 'Smartphone showing dark digital storefront layout on a dark slate desk',
    subServices: [
      'Free first store check',
      'Product order',
      'Free guide placement',
      'Product descriptions',
      'Bio and welcome message match',
    ],
  },
  {
    number: '04',
    title: 'Google Visibility: SEO, AEO and GEO Setup',
    shortTitle: 'Google Visibility',
    path: '/google-visibility',
    summary:
      'Full search and AI answer setup so buyers find you on Google and AI tools recommend your business, backed by before and after proof.',
    audience: 'Aesthetic clinics, heating engineers and wedding photographers',
    image: STUDIO_IMAGES.searchMaps,
    imageAlt: 'Dark architectural studio monitor showing local search map grid with amber markers',
    subServices: [
      'Before and after proof',
      'Google Business Profile',
      'One page per service per town',
      'Buyer FAQ answers',
      'Reviews routine',
      'Trusted directory listings',
    ],
  },
  {
    number: '05',
    title: 'Website and App Design',
    shortTitle: 'Website Design',
    path: '/website-design',
    summary:
      'Business websites and landing pages structured for search from day one: one page per service, buyer questions answered, and schema code labels.',
    audience: 'Service businesses and founders',
    image: STUDIO_IMAGES.editorialWorkspace,
    imageAlt: 'Dark minimalist laptop workstation and notebook illuminated by warm amber task lamp',
    subServices: [
      'One page per service',
      'Plain buyer copy',
      'Schema code labels',
      'Website redesigns',
      'n8n automation workflows',
    ],
  },
];

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: 'Victor Autocore | AI Video Ads, Social Media and Google Visibility for Small Businesses',
    description:
      'AI video adverts, Reels, social media management, store fixes and Google visibility setup (SEO, AEO, GEO) for small businesses and online sellers in the UK and US. Remote, personal, no filming needed.',
  },
  aiVideoAds: {
    path: '/ai-video-ads',
    title: 'AI Video Ads and Reels | Victor Autocore',
    description:
      'Finished AI video adverts and Reels for small brands and online sellers. No filming needed. Send your photos, get a video ready to post.',
  },
  socialMedia: {
    path: '/social-media-management',
    title: 'Social Media Management | Victor Autocore',
    description:
      'Posts, stories, Reels, captions and a content calendar for Instagram, Facebook and TikTok, created for you and approved by you before posting.',
  },
  storeFixes: {
    path: '/store-fixes',
    title: 'Store Setup and Fixes for Online Sellers | Victor Autocore',
    description:
      'Free first store check for faceless sellers on Stan Store, Beacons and Gumroad. Product order, free guide placement, descriptions and bio fixes that help buyers buy.',
  },
  googleVisibility: {
    path: '/google-visibility',
    title: 'Google Visibility Setup: SEO, AEO and GEO | Victor Autocore',
    description:
      'Get found on Google and recommended by AI. SEO, AEO and GEO setup for clinics, heating engineers and wedding photographers, with before and after proof.',
  },
  websiteDesign: {
    path: '/website-design',
    title: 'Website and App Design | Victor Autocore',
    description:
      'Business websites built the search way from day one: one page per service, buyer questions answered, ready for Google and AI search.',
  },
  about: {
    path: '/about',
    title: 'About Victor | Victor Autocore',
    description:
      'Akinjide Akinola (Victor): social media manager and AI video creator working remotely from Lagos for UK and US brands since 2020, community manager at wilds.ai since 2024.',
  },
  contact: {
    path: '/contact',
    title: 'Contact | Victor Autocore',
    description:
      'Message Victor Autocore on WhatsApp or email victorautocore091@gmail.com for AI video ads, social media management, store fixes or Google visibility setup.',
  },
};
