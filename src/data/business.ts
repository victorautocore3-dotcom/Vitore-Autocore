export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export interface PhotoAsset {
  src: string;
  fallbackSrc: string;
  alt: string;
}

export interface ServiceLinkItem {
  number: string;
  title: string;
  shortTitle: string;
  path: string;
  summary: string;
  audience: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  subServices: string[];
}

export const BUSINESS_FACTS = {
  businessName: 'Victor Autocore',
  ownerFullName: 'Akinjide Akinola',
  ownerKnownAs: 'Victor',
  serviceAreaStatement: 'Works remotely for clients worldwide.',
  email: 'victorautocore@gmail.com',
  whatsappDisplay: '+44 7480 248559',
  whatsappHref: 'https://wa.me/447480248559',
  instagramHandle: '@aianimator_victor',
  instagramHref: 'https://www.instagram.com/aianimator_victor',
  background: [
    '5+ years of freelance social media management and content creation for brands worldwide.',
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
    'Graphics design',
    'n8n automation',
  ],
} as const;

export const STOCK_PHOTOS = {
  gimbalShoot: {
    src: 'https://images.unsplash.com/photo-1758947651495-24e194e47c3a?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.pexels.com/photos/2823937/pexels-photo-2823937.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Filmmaker operating a cinema camera on a handheld gimbal during a video shoot',
  },
  gimbalMicShoot: {
    src: 'https://images.unsplash.com/photo-1757223492742-44769c322d25?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.pexels.com/photos/11603126/pexels-photo-11603126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Video shoot using a camera stabilizer and studio microphone',
  },
  gimbalStudioRig: {
    src: 'https://images.pexels.com/photos/2823937/pexels-photo-2823937.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackSrc:
      'https://images.unsplash.com/photo-1758947651495-24e194e47c3a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Camera mounted on a gimbal stabilizer under warm studio lighting',
  },
  creatorEditingDark: {
    src: 'https://images.unsplash.com/photo-1627244714766-94dab62ed964?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Video creator wearing headphones editing footage in a dark studio',
  },
  editorTimelineDark: {
    src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackSrc:
      'https://images.unsplash.com/photo-1551302175-952301267d19?auto=format&fit=crop&w=1200&q=80',
    alt: 'Creator editing video clips on a monitor in a dark workspace',
  },
  editingTimelineScreen: {
    src: 'https://images.unsplash.com/photo-1551302175-952301267d19?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Video editing timeline clips displayed on a dark production monitor',
  },
  studioProductSet: {
    src: 'https://images.unsplash.com/photo-1759417501792-0d188b64b774?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Studio product filming set with camera and professional lighting equipment',
  },
  studioSoftboxLights: {
    src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1759417501792-0d188b64b774?auto=format&fit=crop&w=1200&q=80',
    alt: 'Studio lighting softboxes arranged for commercial filming',
  },
  productSetCamera: {
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Camera and studio lights prepared for a product shoot on set',
  },
  phoneSocialFeed: {
    src: 'https://images.unsplash.com/photo-1764162051244-1391c41122ac?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1764663908318-54b7756776a9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Smartphone displaying social media content and short-form creator planning',
  },
  phoneFilmingReels: {
    src: 'https://images.unsplash.com/photo-1764663908318-54b7756776a9?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1764162051503-9374a2c1e770?auto=format&fit=crop&w=1200&q=80',
    alt: 'Creator filming short vertical social videos with a smartphone',
  },
  socialContentPlanning: {
    src: 'https://images.unsplash.com/photo-1764162051503-9374a2c1e770?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1764162051296-63c5cddf6ba6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Planning social media posts and short video content on a phone',
  },
  shortVideoRecording: {
    src: 'https://images.unsplash.com/photo-1764162051296-63c5cddf6ba6?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1764162051244-1391c41122ac?auto=format&fit=crop&w=1200&q=80',
    alt: 'Creator recording short-form social video clips on a smartphone',
  },
  shopOwnerCounter: {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Small shop counter and independent local business interior',
  },
  retailOwnerAtCounter: {
    src: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    alt: 'Small shop owner standing at the store counter',
  },
  onlineStoreLaptopPhone: {
    src: 'https://images.unsplash.com/photo-1770013413878-2530e2c3d82b?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Online store workflow on a laptop and smartphone alongside parcel packaging',
  },
  packingOrdersBoxes: {
    src: 'https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1770013413878-2530e2c3d82b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Packing customer orders in cardboard shipping boxes',
  },
  phoneMapSearch: {
    src: 'https://images.unsplash.com/photo-1529775768124-fb874e73ac7e?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person holding a smartphone showing a local map search and directions',
  },
  ukHighStreet: {
    src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1200&q=80',
    alt: 'UK high street architecture and bustling local business district',
  },
  localShopFront: {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Independent local shop front with warm street-facing windows',
  },
  boutiqueShopFront: {
    src: 'https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1551113006-731674fbb3ff?auto=format&fit=crop&w=1200&q=80',
    alt: 'Local high street storefront with display windows',
  },
  designerWebsiteScreen: {
    src: 'https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
    alt: 'Web designer workspace with website layouts open on dark screens',
  },
  remoteDeskSetup: {
    src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean remote-work desk setup with laptop, monitor, and camera',
  },
  warmWorkspace: {
    src: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm-lit desk and creative workspace environment',
  },
} as const satisfies Record<string, PhotoAsset>;

export const SERVICE_LINKS: ServiceLinkItem[] = [
  {
    number: '01',
    title: 'AI Video Ads and Reels',
    shortTitle: 'AI Video Ads',
    path: '/ai-video-ads',
    summary:
      'Finished adverts, promotional Reels, book trailers and short sales videos built from your product photos or store link. No filming needed.',
    audience: 'Small brands, online sellers and local businesses',
    image: STOCK_PHOTOS.gimbalStudioRig.src,
    fallbackImage: STOCK_PHOTOS.gimbalStudioRig.fallbackSrc,
    imageAlt: STOCK_PHOTOS.gimbalStudioRig.alt,
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
    image: STOCK_PHOTOS.phoneFilmingReels.src,
    fallbackImage: STOCK_PHOTOS.phoneFilmingReels.fallbackSrc,
    imageAlt: STOCK_PHOTOS.phoneFilmingReels.alt,
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
    image: STOCK_PHOTOS.onlineStoreLaptopPhone.src,
    fallbackImage: STOCK_PHOTOS.onlineStoreLaptopPhone.fallbackSrc,
    imageAlt: STOCK_PHOTOS.onlineStoreLaptopPhone.alt,
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
    image: STOCK_PHOTOS.shopOwnerCounter.src,
    fallbackImage: STOCK_PHOTOS.shopOwnerCounter.fallbackSrc,
    imageAlt: STOCK_PHOTOS.shopOwnerCounter.alt,
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
    image: STOCK_PHOTOS.designerWebsiteScreen.src,
    fallbackImage: STOCK_PHOTOS.designerWebsiteScreen.fallbackSrc,
    imageAlt: STOCK_PHOTOS.designerWebsiteScreen.alt,
    subServices: [
      'One page per service',
      'Plain buyer copy',
      'Schema code labels',
      'Website redesigns',
      'n8n automation workflows',
    ],
  },
  {
    number: '06',
    title: 'Graphics Design',
    shortTitle: 'Graphics Design',
    path: '/graphics-design',
    summary:
      'Posters, flyers, social media graphics and brand identity that make a small business look professional and get noticed.',
    audience: 'Churches, schools, academies and small businesses',
    image: '/design-music-night.jpg',
    fallbackImage: '/design-music-night.jpg',
    imageAlt: 'Afrobeats Night club flyer by Victor Autocore',
    subServices: [
      'Social media design',
      'Brand identity',
      'Posters and flyers',
      'Advertising graphics',
      'Photo compositing',
    ],
  },
];

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: 'Victor Autocore | AI Video Ads, Social Media and Google Visibility for Small Businesses',
    description:
      'AI video adverts, Reels, social media management, store fixes and Google visibility setup (SEO, AEO, GEO) for small businesses and online sellers worldwide. Remote, personal, no filming needed.',
  },
  aiVideoAds: {
    path: '/ai-video-ads',
    title: 'AI Video Ads and Reels for Small Businesses | Victor Autocore',
    description:
      'Finished AI video adverts and Reels for small brands and online sellers. A character talks on camera about your product, no filming needed, delivered ready to post.',
  },
  socialMedia: {
    path: '/social-media-management',
    title: 'Social Media Management for Small Businesses | Victor Autocore',
    description:
      'Posts, Stories, Reels, captions and a monthly content calendar for Instagram, Facebook and TikTok, handled for you remotely, for clients worldwide.',
  },
  storeFixes: {
    path: '/store-fixes',
    title: 'Store Setup and Fixes for Online Sellers | Victor Autocore',
    description:
      'Stan Store, Beacons and Gumroad stores checked and fixed so visitors understand the offer and buy. Free first store check for faceless digital product sellers.',
  },
  googleVisibility: {
    path: '/google-visibility',
    title: 'Google Visibility Setup: SEO, AEO and GEO | Victor Autocore',
    description:
      'Get found on Google and recommended by AI search. SEO, AEO and GEO setup for small businesses, with before and after proof of where you stand in your town search.',
  },
  websiteDesign: {
    path: '/website-design',
    title: 'Website and App Design for Small Businesses | Victor Autocore',
    description:
      'Business websites and apps designed clean, fast and built the search way from day one, so Google and AI search can find and describe you correctly.',
  },
  graphicsDesign: {
    path: '/graphics-design',
    title: 'Graphics Design and Flyers | Victor Autocore',
    description:
      'Flyers, posters and social media designs for businesses and events, made sharp and ready to print or post. See the 28 piece portfolio gallery.',
  },
  about: {
    path: '/about',
    title: 'About Victor Autocore | Akinjide Akinola',
    description:
      'Victor Autocore is run by Akinjide Akinola, a social media manager and AI video creator working remotely for clients worldwide, community manager at wilds.ai since 2024.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Victor Autocore | WhatsApp and Email',
    description:
      'Message Victor Autocore on WhatsApp or by email about AI video ads, social media management, store fixes, Google visibility or design work.',
  },
};
