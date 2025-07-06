export interface ServiceItem {
  image: string;
  title: string;
  description: string;
}
export const SERVICES_LIST: ServiceItem[] = [
  {
    image: 'assets/images/service_1.png',
    title: 'Advertisers',
    description: 'Run advertisements across multiple platforms efficiently.'
  },
  {
    image: 'assets/images/service_2.png',
    title: 'Agencies',
    description: 'Empower your agency with data-driven media buying.'
  },
  {
    image: 'assets/images/service_3.png',
    title: 'Media Owners',
    description: 'Maximize your inventory and connect with top advertisers.'
  }
];
export interface SolutionCard {
  title: string;
  description: string;
  icon?: string;
  highlight?: boolean;
  image?: string;
  cta?: string;
  type: 'image' | 'feature';
}
export const SOLUTION_CARDS: SolutionCard[] = [
  {
    title: 'We simplify media buying with data, automation, and collaboration to maximize ROI',
    description: '',
    image: 'assets/images/solution_1.png',
    cta: 'Get Started',
    type: 'image',
  },
  {
    image: 'assets/images/promotion.png',
    title: 'Campaign Planning',
    description: 'Plan and optimize your ad campaigns with data-driven insights.',
    icon: 'campaign',
    type: 'feature',
  },
  {
    image: 'assets/images/play-button.png',
    title: 'Media Buying',
    description: 'Effortlessly book media slots with AI-powered automation, ensuring cost efficiency and better reach.',
    icon: 'media',
    type: 'feature',
  },
  {
    image: 'assets/images/ad.png',
    title: 'Ad Distribution',
    description: 'Distribute ads across multiple channels while ensuring precise targeting and real-time tracking.',
    icon: 'ad',
    type: 'feature',
  },
  {
    image: 'assets/images/analytics.png',
    title: 'Performance Analytics',
    description: 'Gain actionable insights with real-time performance tracking to maximize your ROI and refine future strategies.',
    icon: 'analytics',
    type: 'feature',
  },
];
export interface CollabStat {
  value: string;
  label: string;
  description: string;
}
export const COLLAB_STATS: CollabStat[] = [
  {
    value: '110+',
    label: 'Top Agencies Trust Media LaCarte',
    description: '',
  },
  {
    value: '1M',
    label: 'Advertisers Reaching the Right Audience',
    description: '',
  },
  {
    value: '98.99%',
    label: 'Seamless Media Transactions for Owners',
    description: '',
  },
];
export interface CollabExpert {
  image: string;
  name: string;
}
export const COLLAB_EXPERTS: CollabExpert[] = [
  { image: 'assets/images/expert1.png', name: 'Expert 1' },
  { image: 'assets/images/expert2.png', name: 'Expert 2' },
  { image: 'assets/images/expert3.png', name: 'Expert 3' },
  { image: 'assets/images/expert4.png', name: 'Expert 4' },
  { image: 'assets/images/expert5.png', name: 'Expert 5' },
  { image: 'assets/images/expert6.png', name: 'Expert 6' },
  { image: 'assets/images/expert7.png', name: 'Expert 7' },
  { image: 'assets/images/expert8.png', name: 'Expert 8' },
];
export interface FooterLink {
  label: string;
  url: string;
  group: 'left' | 'right';
}
export const FOOTER_LINKS: FooterLink[] = [
  { label: 'The Platform', url: '#', group: 'left' },
  { label: 'Features', url: '#', group: 'left' },
  { label: 'Benefits', url: '#', group: 'left' },
  { label: 'Request a Demo', url: '#', group: 'left' },
  { label: 'Contact Us', url: '#', group: 'right' },
  { label: 'About Us', url: '#', group: 'right' },
  { label: 'Privacy Policy', url: '#', group: 'right' },
  { label: 'Terms of Service', url: '#', group: 'right' },
];
export interface FooterContact {
  icon: 'location' | 'email';
  label: string;
  value: string;
  type: 'address' | 'email';
}
export const FOOTER_CONTACT: FooterContact[] = [
  {
    icon: 'location',
    label: 'Makatab 2 Building Floor 4, Office 406\nDubai Production City, Dubai\nUnited Arab Of Emirates',
    value: '',
    type: 'address',
  },
  {
    icon: 'email',
    label: 'admin@mediaalacarte.net',
    value: 'mailto:admin@mediaalacarte.net',
    type: 'email',
  },
]; 