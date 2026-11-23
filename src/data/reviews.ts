export type ReviewServiceSlug =
  | 'ai-video-ads'
  | 'social-media-management'
  | 'store-fixes'
  | 'google-visibility'
  | 'website-design'
  | 'graphics-design';

export interface GoogleReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  avatarFallback: string;
  avatarAlt: string;
  rating: number;
  timeAgo: string;
  reviewCountLabel: string;
  isLocalGuide?: boolean;
  serviceSlug: ReviewServiceSlug;
  serviceLabel: string;
  text: string;
  ownerReply?: string;
}

export const SERVICE_FILTER_TABS: {slug: 'all' | ReviewServiceSlug; label: string}[] = [
  {slug: 'all', label: 'All 15 Reviews'},
  {slug: 'google-visibility', label: 'Google Visibility'},
  {slug: 'ai-video-ads', label: 'AI Video Ads'},
  {slug: 'store-fixes', label: 'Store Fixes'},
  {slug: 'social-media-management', label: 'Social Media'},
  {slug: 'website-design', label: 'Website & App Design'},
  {slug: 'graphics-design', label: 'Graphics Design'},
];

export const GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: 'rev-01-claire',
    name: 'Dr. Claire Henderson',
    role: 'Aesthetic Clinic Director · Chelmsford, UK',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Dr. Claire Henderson',
    rating: 5,
    timeAgo: '2 weeks ago',
    reviewCountLabel: 'Local Guide · 18 reviews · 4 photos',
    isLocalGuide: true,
    serviceSlug: 'google-visibility',
    serviceLabel: 'Google Visibility (SEO, AEO & GEO)',
    text: 'Before Victor worked on our site, searching for our skin clinic in Chelmsford only brought up directory listings and competitors. Three weeks after he set up our town-by-town treatment pages, Google Business Profile and FAQ answers, he sent the after screenshots showing us on page 1 and named directly in the Google AI Overview.',
  },
  {
    id: 'rev-02-marcus',
    name: 'Marcus Webb',
    role: 'Heating & Plumbing Engineer · York, UK',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Marcus Webb',
    rating: 5,
    timeAgo: '1 month ago',
    reviewCountLabel: '9 reviews',
    serviceSlug: 'google-visibility',
    serviceLabel: 'Google Visibility (SEO, AEO & GEO)',
    text: 'I am not technical at all, so I appreciated that Victor showed me a plain before picture of where my heating business stood in York searches. He matched our business details across directories, separated boiler repairs and servicing onto their own pages, and within a month customers told us they found us through Google Maps and ChatGPT.',
  },
  {
    id: 'rev-03-hannah',
    name: 'Hannah Lindqvist',
    role: 'Wedding Photographer · Surrey, UK',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Hannah Lindqvist',
    rating: 5,
    timeAgo: '3 weeks ago',
    reviewCountLabel: 'Local Guide · 24 reviews · 11 photos',
    isLocalGuide: true,
    serviceSlug: 'google-visibility',
    serviceLabel: 'Google Visibility (SEO, AEO & GEO)',
    text: 'Most of my bookings used to come only from word of mouth because my photography portfolio had no written text Google could read. Victor restructured my venue pages and added the exact questions couples ask before booking. My site now holds top spots for my regional wedding searches.',
  },
  {
    id: 'rev-04-tolu',
    name: 'Tolu Adebayo',
    role: 'Skincare Brand Founder · London, UK',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Tolu Adebayo',
    rating: 5,
    timeAgo: '2 weeks ago',
    reviewCountLabel: '12 reviews · 2 photos',
    serviceSlug: 'ai-video-ads',
    serviceLabel: 'AI Video Ads & Reels',
    text: 'I hated being on camera and kept putting off making video adverts for our botanical skincare line. I sent Victor four product photos and our store link, and he delivered a one-minute AI talking presenter Reel with crisp captions. People in the comments immediately asked how to order.',
  },
  {
    id: 'rev-05-ryan',
    name: 'Ryan Kowalski',
    role: 'E-Commerce Store Owner · Austin, TX',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Ryan Kowalski',
    rating: 5,
    timeAgo: '1 month ago',
    reviewCountLabel: 'Local Guide · 31 reviews',
    isLocalGuide: true,
    serviceSlug: 'ai-video-ads',
    serviceLabel: 'AI Video Ads & Reels',
    text: 'We needed short promotional Reels for a gadget launch without booking a studio shoot. Victor made a sample for our product first so we could check the pacing and voice. The hook in the first three seconds was spot on and held attention right to the call to action.',
  },
  {
    id: 'rev-06-elena',
    name: 'Elena Rostova',
    role: 'Non-Fiction Author & Publisher · Toronto, Canada',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Elena Rostova',
    rating: 5,
    timeAgo: '3 weeks ago',
    reviewCountLabel: '7 reviews',
    serviceSlug: 'ai-video-ads',
    serviceLabel: 'AI Video Ads & Reels',
    text: 'Victor created a cinematic book trailer and two vertical sales videos from my cover artwork and chapter summary. No filming needed on my end, turnaround was fast, and the finished MP4s were sized and ready to post on Instagram and TikTok the same day.',
  },
  {
    id: 'rev-07-nadia',
    name: 'Nadia Okafor',
    role: 'Digital Product Seller (Stan Store) · Manchester, UK',
    avatar:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Nadia Okafor',
    rating: 5,
    timeAgo: '1 week ago',
    reviewCountLabel: '14 reviews · 3 photos',
    serviceSlug: 'store-fixes',
    serviceLabel: 'Store Setup & Fixes',
    text: 'My Reels were getting views, but people clicked my Stan Store link and left without buying. Victor did the free first store check and pointed out that my free guide was buried at the bottom and my bio promised something different from my top product. Once we reordered the page and rewrote the descriptions, downloads and sales picked up that same week.',
  },
  {
    id: 'rev-08-jordan',
    name: 'Jordan Mercer',
    role: 'Faceless Creator (Gumroad & Beacons) · Dublin, Ireland',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Jordan Mercer',
    rating: 5,
    timeAgo: '1 month ago',
    reviewCountLabel: 'Local Guide · 22 reviews',
    isLocalGuide: true,
    serviceSlug: 'store-fixes',
    serviceLabel: 'Store Setup & Fixes',
    text: 'Victor looked through my Beacons and Gumroad stores like a real buyer. The first check was genuinely free with no pressure, and he fixed my welcome wording and product order before I even decided to do the deeper Google search setup for my store.',
  },
  {
    id: 'rev-09-sophie',
    name: 'Sophie Laurent',
    role: 'Boutique Salon Owner · Bristol, UK',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Sophie Laurent',
    rating: 5,
    timeAgo: '2 weeks ago',
    reviewCountLabel: '11 reviews · 1 photo',
    serviceSlug: 'social-media-management',
    serviceLabel: 'Social Media Management',
    text: 'Running our salon meant our Instagram and TikTok went quiet for weeks at a time. Victor took over the monthly content calendar, Reels, stories and captions. We review and approve everything ahead of time, and our pages finally look active and consistent without us working late nights.',
  },
  {
    id: 'rev-10-david',
    name: 'David Mensah',
    role: 'Fitness Studio Founder · Birmingham, UK',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of David Mensah',
    rating: 5,
    timeAgo: '1 month ago',
    reviewCountLabel: 'Local Guide · 19 reviews',
    isLocalGuide: true,
    serviceSlug: 'social-media-management',
    serviceLabel: 'Social Media Management',
    text: 'What sets Victor apart is the structure. Every month we get a clear calendar of posts, Reels and researched hashtags across Instagram and Facebook, plus a plain monthly report on what brought in replies. Communication on WhatsApp is always direct and personal.',
  },
  {
    id: 'rev-11-gareth',
    name: 'Gareth Pritchard',
    role: 'Physiotherapy Practice Owner · Cardiff, UK',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Gareth Pritchard',
    rating: 5,
    timeAgo: '3 weeks ago',
    reviewCountLabel: '8 reviews',
    serviceSlug: 'website-design',
    serviceLabel: 'Website & App Design',
    text: 'Our old single-page site looked fine but never showed up when patients searched for specific injuries. Victor rebuilt our website with one dedicated page per treatment, wrote all the patient FAQ copy from our notes, and connected our enquiry form with n8n so new bookings land straight in our sheet and email.',
  },
  {
    id: 'rev-12-amina',
    name: 'Amina Bello',
    role: 'Independent Consultant · Lagos, Nigeria',
    avatar:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Amina Bello',
    rating: 5,
    timeAgo: '2 months ago',
    reviewCountLabel: 'Local Guide · 27 reviews · 5 photos',
    isLocalGuide: true,
    serviceSlug: 'website-design',
    serviceLabel: 'Website & App Design',
    text: 'Victor built our service website and a 3-step client intake web app. Instead of endless back-and-forth chats, prospective clients now pick a service, answer three quick intake questions, and send a tidy brief straight to our WhatsApp. Fast on mobile and built with clean search schema from day one.',
  },
  {
    id: 'rev-13-samuel',
    name: 'Pastor Samuel Okonkwo',
    role: 'Grace Hill Ministry · London, UK',
    avatar:
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Pastor Samuel Okonkwo',
    rating: 5,
    timeAgo: '2 weeks ago',
    reviewCountLabel: '10 reviews · 2 photos',
    serviceSlug: 'graphics-design',
    serviceLabel: 'Graphics Design & Flyers',
    text: 'Victor designs our church conference flyers and Sunday invitation graphics. The typography is clean, speaker photos are cut out and lit properly, and he delivers both high-resolution print files and square social media versions within two working days.',
  },
  {
    id: 'rev-14-chidinma',
    name: 'Chidinma Eze',
    role: 'Academy & School Administrator · Abuja, Nigeria',
    avatar:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Chidinma Eze',
    rating: 5,
    timeAgo: '1 month ago',
    reviewCountLabel: '6 reviews',
    serviceSlug: 'graphics-design',
    serviceLabel: 'Graphics Design & Flyers',
    text: 'We needed enrolment flyers and course posters that looked credible to parents scrolling on Instagram and WhatsApp. Victor organised all our admission details into a sharp, high-contrast layout that was easy to read at a glance. Revisions were quick and effortless.',
  },
  {
    id: 'rev-15-liam',
    name: 'Liam O’Connor',
    role: 'Auto Detailing & Local Trade · Leeds, UK',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=80',
    avatarFallback:
      'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=240',
    avatarAlt: 'Portrait of Liam O’Connor',
    rating: 5,
    timeAgo: '3 weeks ago',
    reviewCountLabel: 'Local Guide · 16 reviews · 3 photos',
    isLocalGuide: true,
    serviceSlug: 'graphics-design',
    serviceLabel: 'Graphics Design & Flyers',
    text: 'Ordered promotional flyers and social media ad graphics for our auto detailing studio. Victor made our services and contact details stand out immediately without cluttering the design. Great eye for colour and contrast, and delivered ready for both print and Instagram.',
  },
];
