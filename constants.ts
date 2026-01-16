import { Monitor, Smartphone, Palette, Globe, Layers, LineChart, MapPin, Utensils, Dumbbell, Briefcase, Code, Rocket } from 'lucide-react';
import { NavItem, Service, Project, TeamMember, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Local Business Websites',
    description: 'High-converting websites designed specifically for restaurants, gyms, and local services to attract more neighborhood customers.',
    icon: MapPin,
  },
  {
    id: '2',
    title: 'Restaurant & Menu Design',
    description: 'Appetizing digital experiences with integrated reservation systems and mobile-friendly menus that drive bookings.',
    icon: Utensils,
  },
  {
    id: '3',
    title: 'Fitness & Gym Branding',
    description: 'Energetic, bold designs for fitness studios that showcase your facilities and simplify membership sign-ups.',
    icon: Dumbbell,
  },
  {
    id: '4',
    title: 'UX/UI & Strategy',
    description: 'Data-driven user interface design that guides visitors seamlessly from landing page to checkout.',
    icon: Layers,
  },
  {
    id: '5',
    title: 'Local SEO Mastery',
    description: 'Optimization strategies to ensure your business appears at the top of Google Maps and local search results.',
    icon: LineChart,
  },
  {
    id: '6',
    title: 'Mobile-First Development',
    description: 'Ensuring your site works perfectly on every phone, tablet, and desktop—crucial for customers on the go.',
    icon: Smartphone,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bistro 55',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    description: 'Modern dining experience with real-time table reservation integration.',
    tags: ['Restaurant', 'Local']
  },
  {
    id: '2',
    title: 'IronCore Fitness',
    category: 'Gym & Wellness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    description: 'High-energy landing page driving 40% more membership inquiries.',
    tags: ['Gym', 'Fitness', 'Local']
  },
  {
    id: '3',
    title: 'Urban Living Realty',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    description: 'Luxury property showcase with immersive 3D virtual tours.',
    tags: ['Real Estate', 'Local']
  },
  {
    id: '4',
    title: 'The Artisan Bakery',
    category: 'Local Retail',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    description: 'E-commerce integration for local pickup and delivery orders.',
    tags: ['Restaurant', 'Local']
  },
  {
    id: '5',
    title: 'Apex Consulting',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    description: 'Clean, professional corporate identity for a financial firm.',
    tags: ['Corporate']
  },
  {
    id: '6',
    title: 'Zenith Spa',
    category: 'Beauty & Wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    description: 'Relaxing UI design with integrated appointment booking system.',
    tags: ['Wellness', 'Local']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Owner',
    company: 'The Green Fork',
    content: "The best investment we've made for our restaurant. Online orders increased by 200% within the first month.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike Ross',
    role: 'General Manager',
    company: 'IronCore Gym',
    content: "Webdesign MG understood our brand perfectly. The site is aggressive, bold, and brings in new members daily.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Director',
    company: 'Urban Realty',
    content: "Professional, timely, and incredibly talented. The 3D tour integration is flawless on mobile devices.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    rating: 5
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Raes MG',
    role: 'Lead Designer & Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bio: 'Helping local businesses thrive in the digital age. I blend technical expertise with artistic vision to create websites that don\'t just look good—they grow your business.',
  }
];