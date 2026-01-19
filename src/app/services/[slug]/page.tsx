'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Star,
  Zap,
  MessageCircle,
  Palette,
  BookOpen,
  TrendingUp,
  Pen,
  Edit,
  FileText,
  Globe,
  Newspaper,
  Megaphone,
  Search,
  Film,
  Download,
  Users,
  Award,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Image from 'next/image';

const SERVICES_DATA: Record<string, any> = {
  'ghostwriting': {
    title: 'Professional Ghostwriting',
    description: 'We provide the words, you provide the vision. Our elite ghostwriters transform your ideas into bestselling books with authenticity and flair.',
    heroIcon: Pen,
    price: '$2,999',
    rating: 4.9,
    reviews: 245,
    features: [
      'Authentic Voice Capture',
      'Fiction & Non-Fiction Expertise',
      'In-depth Research & Strategy',
      'Unlimited Revision Cycles',
      'Full Publishing Support',
      '100% Confidentiality'
    ],
    process: [
      { title: 'Discovery', desc: 'Detailed strategy session to capture your unique voice and story goals.', icon: Search },
      { title: 'Outline', desc: 'Crafting a comprehensive roadmap for your book structure and flow.', icon: Globe },
      { title: 'Drafting', desc: 'Elite writers crafting your story chapter by chapter with regular check-ins.', icon: Pen },
      { title: 'Polishing', desc: 'Deep editorial review to ensure every sentence resonates with perfection.', icon: Zap }
    ],
    portfolio: [
      { title: 'The CEO Blueprint', category: 'Business', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80' },
      { title: 'Unspoken Words', category: 'Memoir', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80' },
      { title: 'Beyond the Horizon', category: 'Fiction', image: 'https://images.unsplash.com/photo-1589998059171-dd88d344ed65?w=600&q=80' }
    ],
    packages: [
      { name: 'Starter', price: '$2,999', description: 'Ideal for short books and specific projects.', features: ['Up to 20k words', 'Basic Research', '2 Revisions', '30-Day Delivery'], popular: false },
      { name: 'Professional', price: '$7,999', description: 'Our most popular choice for bestselling quality.', features: ['Up to 50k words', 'In-depth Research', 'Unlimited Revisions', '60-Day Delivery', 'Free Editing'], popular: true },
      { name: 'Elite', price: '$15,999', description: 'Full literary service for major publications.', features: ['Up to 100k words', 'Extensive Research', 'Priority Delivery', 'Marketing Strategy', 'Full Formatting'], popular: false }
    ],
    faqs: [
      { question: 'Will I own the rights to my book?', answer: 'Yes, 100%. You retain full ownership and copyright of all work produced.' },
      { question: 'How do you capture my voice?', answer: 'Through extensive interviews, recording sessions, and review of your previous writing styles.' },
      { question: 'Is the process confidential?', answer: 'Absolutely. We sign strict Non-Disclosure Agreements before starting any project.' }
    ]
  },
  'book-cover': {
    title: 'Premium Cover Design',
    description: 'First impressions matter. We create stunning, trend-setting book covers that capture attention and drive sales in a crowded marketplace.',
    heroIcon: Palette,
    price: '$499',
    rating: 4.8,
    reviews: 189,
    features: [
      'Custom Original Art',
      'Genre-Specific Strategy',
      'Print & Digital Formats',
      'Unlimited Revisions',
      '3D Marketing Mockups',
      'All Major Platforms'
    ],
    process: [
      { title: 'Concept', desc: 'Developing 3 unique creative directions based on your book genre.', icon: Palette },
      { title: 'Revision', desc: 'Refining your chosen concept until it perfectly matches your vision.', icon: Edit },
      { title: 'Finalize', desc: 'Preparing high-resolution files for both digital and print production.', icon: CheckCircle },
      { title: 'Marketing', desc: 'Creating stunning 3D mockups for your social media and launches.', icon: Megaphone }
    ],
    portfolio: [
      { title: 'Neon Nights', category: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&q=80' },
      { title: 'The Willow Path', category: 'Romance', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80' },
      { title: 'Final Protocol', category: 'Thriller', image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80' }
    ],
    packages: [
      { name: 'Ebook Only', price: '$499', description: 'Perfect for digital-first authors.', features: ['1 Custom Concept', 'Digital Files Only', '2 Revisions', '5-Day Delivery'], popular: false },
      { name: 'Print & Digital', price: '$899', description: 'The complete author set for all platforms.', features: ['3 Custom Concepts', 'Print-Ready Files', 'Unlimited Revisions', '3D Mockups', 'Social Media Kit'], popular: true },
      { name: 'Series Pack', price: '$1,999', description: 'Consistent branding for multiple titles.', features: ['Full Series Layout', 'Character Art Integration', 'Priority 24hr Support', 'Marketing Consultation'], popular: false }
    ],
    faqs: [
      { question: 'What files will I receive?', answer: 'You will receive high-res JPEG, PNG, and PDF files, along with source files for the premium tier.' },
      { question: 'Can you use my own images?', answer: 'Yes, if you own the license. Otherwise, we provide premium stock imagery or original art.' },
      { question: 'How long does it take?', answer: 'Initial concepts are delivered within 3-5 business days.' }
    ]
  },
  'editing': {
    title: 'Expert Editing Suite',
    description: 'Transform your manuscript from good to legendary. Our editors have worked with top publishing houses and major bestsellers.',
    heroIcon: Edit,
    price: '$1,499',
    rating: 4.9,
    reviews: 312,
    features: [
      'Developmental Insights',
      'Precision Copyediting',
      'Structural Analysis',
      'Publication Readiness',
      'Style Consistency',
      'Fast Turnaround'
    ],
    process: [
      { title: 'Assessment', desc: 'Initial review of your manuscript to identify key improvement areas.', icon: Search },
      { title: 'Deep Edit', desc: 'Comprehensive structural and stylistic refinement of every page.', icon: Pen },
      { title: 'Review', desc: 'Collaborative review of changes to ensure your voice is preserved.', icon: Users },
      { title: 'Proofread', desc: 'Final technical check for zero-error publication readiness.', icon: CheckCircle }
    ],
    portfolio: [
      { title: 'Manuscript Lab', category: 'Developmental', image: 'https://images.unsplash.com/photo-1455845663286-d4161bbd74b1?w=600&q=80' },
      { title: 'Precision Line', category: 'Copyedit', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80' },
      { title: 'Final Polish', category: 'Proofreading', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80' }
    ],
    packages: [
      { name: 'Basic Scan', price: '$999', description: 'Final technical check before upload.', features: ['Grammar Fixes', 'Spelling Check', 'Punctuation', '14-Day Delivery'], popular: false },
      { name: 'Total Refine', price: '$2,499', description: 'The industry standard for serious authors.', features: ['Line Editing', 'Copyediting', 'Structure Feedback', 'Style Guide Creation'], popular: true },
      { name: 'Director Cut', price: '$4,999', description: 'Intensive developmental transformation.', features: ['Deep Character Dev', 'Plot Hole Fixes', 'Pacing Optimization', 'Unlimited Consults'], popular: false }
    ],
    faqs: [
      { question: 'Do you work in my genre?', answer: 'We match you with an editor who specializes in your specific genre and target market.' },
      { question: 'Will I see the changes?', answer: 'Yes, all edits are provided via Track Changes so you can approve every single line.' },
      { question: 'How much word count is included?', answer: 'Our standard pricing covers up to 60,000 words. Custom quotes available for longer works.' }
    ]
  },
  'marketing': {
    title: 'Book Marketing Mastery',
    description: 'Bestsellers arent born, they are made. Our strategic marketing campaigns put your book in front of the right readers to maximize sales and visibility.',
    heroIcon: Megaphone,
    price: '$1,999',
    rating: 4.8,
    reviews: 156,
    features: [
      'Targeted Ad Campaigns',
      'Social Media Blitz',
      'Author Branding Suite',
      'Email Marketing Strategy',
      'Press Release Distribution',
      'Sales Funnel Optimization'
    ],
    process: [
      { title: 'Analysis', desc: 'Deep dive into your target audience and competitive landscape.', icon: Search },
      { title: 'Strategy', desc: 'Crafting a custom multi-channel marketing roadmap.', icon: Map },
      { title: 'Launch', desc: 'Executing high-impact campaigns across major platforms.', icon: Zap },
      { title: 'Scale', desc: 'Analyzing results and scaling winning strategies for long-term growth.', icon: TrendingUp }
    ],
    portfolio: [
      { title: 'Launch Max', category: 'Advertising', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
      { title: 'Brand Bloom', category: 'Branding', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80' },
      { title: 'Audience Grow', category: 'Social', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80' }
    ],
    packages: [
      { name: 'Social Kick', price: '$1,999', description: 'Great for building initial buzz.', features: ['FB/IG Ad Setup', '30 Days Management', 'Basic Branding', 'Sales Reports'], popular: false },
      { name: 'Bestseller Blitz', price: '$4,999', description: 'The comprehensive launch engine.', features: ['Full Funnel Setup', 'Email Automation', 'Influencer Outreach', 'Major Media PR'], popular: true },
      { name: 'Author Empire', price: '$9,999', description: 'Long-term brand dominance strategy.', features: ['Year-long Strategy', 'Identity Design', 'Speaking Gigs LeadGen', 'Unlimited Consulting'], popular: false }
    ],
    faqs: [
      { question: 'Do you guarantee a bestseller?', answer: 'While we represent the highest caliber of marketing, "bestseller" depends on many factors. We guarantee world-class exposure.' },
      { question: 'Which platforms do you use?', answer: 'We primarily use Amazon Ads, Facebook, Instagram, and specialized book promotion sites.' },
      { question: 'How long are the campaigns?', answer: 'Our standard launch campaigns run for 30-60 days.' }
    ]
  },
  'article-writing': {
    title: 'Elite Article Writing',
    description: 'Engaging, research-backed articles that capture attention, build authority, and drive traffic to your platform.',
    heroIcon: FileText,
    price: '$799',
    rating: 4.7,
    reviews: 128,
    features: [
      'SEO-Optimized Content',
      'Expert Research',
      'Captivating Narrative',
      'Headline Optimization',
      'Voice Consistency',
      'Fast Turnaround'
    ],
    process: [
      { title: 'Topic Search', desc: 'Identifying high-impact topics for your target audience.', icon: Search },
      { title: 'Writing', desc: 'Crafting the narrative with precision and authority.', icon: Pen },
      { title: 'Internal Review', desc: 'Rigorous fact-checking and quality control.', icon: CheckCircle },
      { title: 'Delivery', desc: 'Final polish and formatting for your platform.', icon: Download }
    ],
    portfolio: [
      { title: 'Tech Trends 2024', category: 'Tech', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
      { title: 'Modern Mindset', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
      { title: 'Wealth Strategy', category: 'Finance', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80' }
    ],
    packages: [
      { name: 'Single Insight', price: '$799', description: 'One high-impact feature article.', features: ['1,500 Words', 'SEO Keywords', '2 Revisions', '3-Day Turnaround'], popular: false },
      { name: 'Content Pillar', price: '$1,999', description: 'Comprehensive coverage for your brand.', features: ['3 Long-form Articles', 'Market Research', 'Unlimited Revisions', 'Social Snippets'], popular: true },
      { name: 'Editorial Suite', price: '$4,999', description: 'Full month of premium content.', features: ['8 Premium Articles', 'Content Calendar', 'Email Copy Incl.', 'Priority Support'], popular: false }
    ],
    faqs: [
      { question: 'Do you do SEO research?', answer: 'Yes, every article is optimized for the primary keywords that drive traffic in your niche.' },
      { question: 'Can you write in my brand voice?', answer: 'Our writers are trained to adapt to any style, from academic and formal to punchy and social.' },
      { question: 'Are the articles unique?', answer: '100% original content. We provide plagiarism reports upon request.' }
    ]
  },
  'web-copywriting': {
    title: 'High-Conversion Web Copy',
    description: 'Turn visitors into loyal customers. Our copywriters use psychological triggers and data-driven strategies to craft landing pages that sell.',
    heroIcon: Globe,
    price: '$1,299',
    rating: 4.8,
    reviews: 95,
    features: [
      'Conversion Rate Optimization',
      'Persuasive Sales Triggers',
      'UX-Focused Messaging',
      'A/B Testing Insights',
      'Landing Page Expertise',
      'Clear Call-to-Actions'
    ],
    process: [
      { title: 'Audience Insight', icon: Users, desc: 'Deep analysis of customer pain points and desires.' },
      { title: 'Wireframe', icon: Globe, desc: 'Mapping the visual and psychological flow of the page.' },
      { title: 'Copywriting', icon: Pen, desc: 'Crafting headlines and body copy that compel action.' },
      { title: 'Refinement', icon: CheckCircle, desc: 'Polishing hooks and CTAs for maximum conversion.' }
    ],
    portfolio: [
      { title: 'SaaS Launchpad', category: 'SaaS', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
      { title: 'Coach Master', category: 'Coaching', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
      { title: 'E-com Titan', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' }
    ],
    packages: [
      { name: 'Impact Page', price: '$1,299', description: 'One high-converting landing page.', features: ['Psychological Hook', 'Full Sales Page Copy', '2 Rounds Revisions', '7-Day Delivery'], popular: true },
      { name: 'Funnel Suite', price: '$3,499', description: 'Full copy for your sales sequence.', features: ['Landing Page Copy', '3-Step Email Sequence', 'Ads Copy Pack', 'Competitor Analysis'], popular: false },
      { name: 'Empire Build', price: '$7,999', description: 'Complete website transformation.', features: ['Home & Service Pages', 'Full Funnel Copy', 'Optimization Consult', 'Priority Delivery'], popular: false }
    ],
    faqs: [
      { question: 'What industry do you specialize in?', answer: 'We cover everything from SaaS and Tech to Coaching and E-commerce.' },
      { question: 'Do you provide design?', answer: 'We provide copy and wireframe logic. We can collaborate with your designers for implementation.' },
      { question: 'How do you measure success?', answer: 'We focus on conversion potential and alignment with your business goals.' }
    ]
  },
  'magazine-writing': {
    title: 'Elite Magazine Features',
    description: 'Newsworthy stories and deep-dive features crafted for top-tier publications and high-end brand journals.',
    heroIcon: Newspaper,
    price: '$899',
    rating: 4.6,
    reviews: 72,
    features: [
      'Journalistic Integrity',
      'Compelling Narrative Flow',
      'Professional Interviewing',
      'Deep Research Suites',
      'Editorial Standard Compliance',
      'Visual Story Integration'
    ],
    process: [
      { title: 'Pitch Develop', icon: Zap, desc: 'Developing a unique angle that editors and readers will love.' },
      { title: 'Investigate', icon: Search, desc: 'Thorough research and interviews to build depth.' },
      { title: 'Feature Draft', icon: Pen, desc: 'Writing the long-form feature with literary flair.' },
      { title: 'Edit & Polish', icon: CheckCircle, desc: 'Refining for specific publication styles.' }
    ],
    portfolio: [
      { title: 'The Future of AI', category: 'Tech Journal', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80' },
      { title: 'Sustainable Living', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778eff?w=600&q=80' },
      { title: 'Market Leaders', category: 'Business', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80' }
    ],
    packages: [
      { name: 'Feature Piece', price: '$899', description: 'One standard feature article.', features: ['2,000 Words', '1 Expert Interview', 'Editorial Polish', '10-Day Delivery'], popular: true },
      { name: 'Deep Dive', price: '$1,999', description: 'Intensive investigative journalism piece.', features: ['4,000 Words', '3 Interviews', 'Multi-source Research', 'Priority Edit'], popular: false },
      { name: 'Brand Journal', price: '$4,500', description: 'Complete editorial for your magazine.', features: ['3 Features', '2 Short Pieces', 'Content Strategy', 'Full Proofreading'], popular: false }
    ],
    faqs: [
      { question: 'Do you handle the pitching?', answer: 'Yes, we can help craft and send pitches to publications on your behalf.' },
      { question: 'Are images included?', answer: 'We provide image suggestions and creative direction for visual elements.' },
      { question: 'What is your turnaround?', answer: 'Standard features take 10-14 days depending on research needs.' }
    ]
  },
  'press-release': {
    title: 'Strategic Press Releases',
    description: 'Get your news noticed. We write and distribute press releases that command media attention and build instant brand authority.',
    heroIcon: Megaphone,
    price: '$599',
    rating: 4.7,
    reviews: 104,
    features: [
      'AP Style Excellence',
      'Newsworthy Angle Creation',
      'Media Distribution Strategy',
      'SEO Optimized Press',
      'Quote Crafting',
      'Multi-industry Expertise'
    ],
    process: [
      { title: 'Angle Analysis', icon: Search, desc: 'Finding the hook that makes your news compelling to journalists.' },
      { title: 'Drafting', icon: Pen, desc: 'Writing the release in strict AP style for credibility.' },
      { title: 'Distribution', icon: Globe, desc: 'Sending to targeted journalists and news wire services.' },
      { title: 'Reporting', icon: TrendingUp, desc: 'Providing analytics on pickup and visibility.' }
    ],
    portfolio: [
      { title: 'Series A Funding', category: 'Finance', image: 'https://images.unsplash.com/photo-1454165833004-972169568473?w=600&q=80' },
      { title: 'Product Launch', category: 'Consumer', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80' },
      { title: 'Partnership Deal', category: 'B2B', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80' }
    ],
    packages: [
      { name: 'Basic Draft', price: '$599', description: 'Professional writing ONLY.', features: ['AP Style Draft', '2 Revisions', '24-Hour Delivery', 'Source File'], popular: false },
      { name: 'PR Standard', price: '$1,299', description: 'Write + Industry Distribution.', features: ['AP Style Draft', 'Distribution to 300+ Outlets', 'SEO Keywords', 'Basic Tracking'], popular: true },
      { name: 'Media Blitz', price: '$2,999', description: 'The ultimate authority builder.', features: ['Premium PR Writing', 'Global Distribution', 'Direct Journalist Pitching', 'Full Visibility Report'], popular: false }
    ],
    faqs: [
      { question: 'Do you guarantee pickup?', answer: 'We guarantee distribution to major wires, but earned media pickup depends on the news cycle.' },
      { question: 'Is AP style required?', answer: 'Yes, it is the industry standard for journalists. We strictly adhere to it.' },
      { question: 'Can you handle urgent news?', answer: 'Yes, we offer 24-hour turnaround for critical announcements.' }
    ]
  },
  'seo-writing': {
    title: 'Search Dominance Content',
    description: 'Rank higher, drive organic traffic, and convert visitors with content that search engines love and humans actual want to read.',
    heroIcon: Search,
    price: '$1,199',
    rating: 4.8,
    reviews: 187,
    features: [
      'Keyword Research Suite',
      'On-Page Optimization',
      'Intent-Driven Writing',
      'LSI Keyword Integration',
      'High-authority Linking',
      'Metadata Excellence'
    ],
    process: [
      { title: 'Keyword Audit', icon: Search, desc: 'Identifying low-competition, high-volume opportunities.' },
      { title: 'Content Map', icon: Globe, desc: 'Structuring articles to satisfy search intent and silos.' },
      { title: 'Optimized Writing', icon: Pen, desc: 'Crafting content with semantic relevance and flow.' },
      { title: 'Polish & Ship', icon: CheckCircle, desc: 'Adding tags, links, and final technical optimizations.' }
    ],
    portfolio: [
      { title: 'SEO Blog Suite', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
      { title: 'Authority Guide', category: 'SaaS', image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?w=600&q=80' },
      { title: 'Local Dominance', category: 'Service Biz', image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&q=80' }
    ],
    packages: [
      { name: 'Core Pack', price: '$1,199', description: 'Great for focused keyword ranking.', features: ['2 Pillar Articles', 'Keyword Research', 'Basic On-page', 'Metadata Incl.'], popular: true },
      { name: 'Growth Engine', price: '$3,499', description: 'Comprehensive organic growth strategy.', features: ['6 SEO Articles', 'Competitor Gap Analysis', 'Internal Linking Strategy', 'Rank Tracking'], popular: false },
      { name: 'Dominance Plan', price: '$7,999', description: 'Full-scale market leadership content.', features: ['15 SEO Articles', 'Cluster Strategy', 'Full Content Audit', 'Priority Implementation'], popular: false }
    ],
    faqs: [
      { question: 'How long until I rank?', answer: 'SEO is a long-term game. Typically, results manifest in 3-6 months depending on competition.' },
      { question: 'Do you use AI?', answer: 'Every piece is 100% human-written for authority and E-E-A-T guidelines.' },
      { question: 'Do you provide the keywords?', answer: 'Yes, we perform deep keyword research or work with your existing list.' }
    ]
  },
  'script-writing': {
    title: 'Dynamic Scripting Solutions',
    description: 'Visualize your success. We write compelling scripts for video, podcasts, and multimedia that engage audiences and drive impact.',
    heroIcon: Film,
    price: '$1,399',
    rating: 4.9,
    reviews: 142,
    features: [
      'Visual Narrative Pacing',
      'Dialogue Excellence',
      'Engagement Optimizing',
      'Industry Standard Format',
      'Multi-platform Adaptation',
      'Director-Ready Scripts'
    ],
    process: [
      { title: 'Vision Call', icon: Users, desc: 'Defining the visual goals and emotional beats of the story.' },
      { title: 'Storyboarding', icon: Globe, desc: 'Mapping the sequence of shots and narrative flow.' },
      { title: 'Script Draft', icon: Pen, desc: 'Writing the actual dialogue and visual descriptions.' },
      { title: 'Revision Loop', icon: CheckCircle, desc: 'Refining timing and tone for the perfect final cut.' }
    ],
    portfolio: [
      { title: 'Brand Story Video', category: 'Commercial', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80' },
      { title: 'Explainer Series', category: 'Edu-tech', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&q=80' },
      { title: 'Podcast Feature', category: 'Audio', image: 'https://images.unsplash.com/photo-1590602847861-f357a9302bbc?w=600&q=80' }
    ],
    packages: [
      { name: 'Short Script', price: '$1,399', description: 'Up to 2 minutes of video script.', features: ['Hook & CTA Focus', '2 Revisions', 'Standard Formatting', '3-Day Delivery'], popular: true },
      { name: 'Feature Script', price: '$3,999', description: 'Longer narratives or series.', features: ['Up to 10 mins', 'Visual Storyboard', 'Unlimited Dialogue Edits', 'Story Consults'], popular: false },
      { name: 'Full Series', price: '$9,999', description: 'Complete multimedia campaign script.', features: ['5 Video Scripts', 'Matching Podcast Scp', 'Ads Script Pack', 'Priority Turnaround'], popular: false }
    ],
    faqs: [
      { question: 'What formats do you use?', answer: 'We use industry-standard screenwriting formats (Final Draft style) for all scripts.' },
      { question: 'Do you include storyboards?', answer: 'Basic visual descriptions are included. Full visual storyboarding is available in higher tiers.' },
      { question: 'Can you handle technical topics?', answer: 'Yes, our writers excel at simplifying complex tech or medical concepts into engaging scripts.' }
    ]
  }
};


export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = SERVICES_DATA[slug] || SERVICES_DATA['ghostwriting'];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const HeroIcon = service.heroIcon || Zap;

  return (
    <main className="bg-background min-h-screen">
      {/* 1. Sovereign Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-12 transition-all hover:gap-3 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" />
            <span className="font-bold uppercase tracking-widest text-sm">Our Full Suite</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-bold uppercase tracking-widest text-sm text-accent">Master Solution</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9]">
                {service.title.split(' ')[0]} <br />
                <span className="text-accent underline decoration-8 underline-offset-8 decoration-white/20">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <Link href="/contact-us">
                  <button className="bg-white text-[var(--primary)] px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl">
                    Claim Your Vision
                  </button>
                </Link>
                <div className="flex items-center gap-4">
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-accent" />)}
                  </div>
                  <div className="text-2xl font-black">{service.rating}</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative animate-float">
              <div className="absolute inset-0 bg-accent/20 rounded-[5rem] blur-[120px]" />
              <div className="relative bg-white/5 backdrop-blur-2xl p-12 rounded-[4rem] border border-white/10 shadow-3xl">
                <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center mb-8 shadow-2xl rotate-12">
                  <HeroIcon className="w-12 h-12 text-[var(--primary)]" />
                </div>
                <h3 className="text-3xl font-black mb-6">Expert Features</h3>
                <div className="grid gap-4">
                  {service.features.slice(0, 4).map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-lg font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dynamic Process Flow */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">How We <span className="text-accent underline decoration-4 underline-offset-4">Achieve Excellence</span></h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">A transparent, results-driven process designed to take your project from seed to full bloom.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step: any, i: number) => {
              const StepIcon = step.icon || CheckCircle;
              return (
                <div key={i} className="group relative">
                  <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-500 flex flex-col items-center text-center h-full hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/5 text-[var(--primary)] flex items-center justify-center mb-8 group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-700">
                      <StepIcon className="w-8 h-8" />
                    </div>
                    <div className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Step 0{i + 1}</div>
                    <h3 className="text-2xl font-black text-[var(--primary)] mb-4 group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="text-gray-600 group-hover:text-white/70 transition-colors leading-relaxed">{step.desc}</p>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-0 -translate-y-1/2 scale-150 text-gray-100 pointer-events-none group-hover:text-accent/20 transition-colors">
                      <ArrowRight className="w-12 h-12" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Master Portfolio Showcase */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">Recent <span className="text-[var(--primary-dark)]">Successes</span></h2>
              <p className="text-gray-500 text-xl leading-relaxed">Discover works that define industry standards and capture market leadership.</p>
            </div>
            <Link href="/reviews">
              <button className="px-10 py-5 bg-[var(--primary)] text-white rounded-full font-black text-lg hover:shadow-2xl transition-all hover:bg-black">View All Results</button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {service.portfolio.map((item: any, i: number) => (
              <div key={i} className="group relative rounded-[3rem] overflow-hidden shadow-xl aspect-[3/4] cursor-pointer bg-[var(--primary)]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-2 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">{item.category}</div>
                  <h3 className="text-3xl font-black text-white leading-tight transition-transform duration-500 translate-y-4 group-hover:translate-y-0">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tiered Sovereignty Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">Investment <span className="text-accent underline decoration-4 underline-offset-4">Tiers</span></h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Scalable solutions tailored to authors at every stage of their publishing journey.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {service.packages.map((pkg: any, i: number) => (
              <div key={i} className={`relative flex flex-col p-12 rounded-[4rem] shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-4 ${pkg.popular ? 'bg-[var(--primary)] text-white scale-105 z-10' : 'bg-white'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-[var(--primary)] px-8 py-3 rounded-full font-black text-sm shadow-xl z-20">
                    MOST SOUGHT AFTER
                  </div>
                )}

                <h3 className={`text-2xl font-black mb-2 uppercase tracking-tight ${pkg.popular ? 'text-white' : 'text-[var(--primary)]'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-10 ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>{pkg.description}</p>

                <div className="mb-10">
                  <span className={`text-6xl font-black leading-none ${pkg.popular ? 'text-white' : 'text-[var(--primary)]'}`}>{pkg.price}</span>
                  <span className={`text-lg ml-2 font-bold ${pkg.popular ? 'text-accent' : 'text-gray-400'}`}>/ starting</span>
                </div>

                <div className="flex-1 space-y-6 mb-12">
                  {pkg.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${pkg.popular ? 'bg-white/10 text-accent' : 'bg-accent/10 text-[var(--primary)]'}`}>
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="font-bold opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact-us" className="block">
                  <button className={`w-full py-6 rounded-2xl font-black text-2xl transition-all shadow-xl active:scale-[0.98] ${pkg.popular ? 'bg-white text-[var(--primary)] hover:bg-accent' : 'bg-[var(--primary)] text-white hover:bg-black'}`}>
                    Choose Solution
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Knowledge Base (FAQs) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-6">Common Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our {service.title} process.</p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-black text-[var(--primary)] group-hover:text-accent transition-colors">{faq.question}</span>
                  {activeFaq === i ? <ChevronUp className="w-8 h-8 text-accent" /> : <ChevronDown className="w-8 h-8 text-gray-300 group-hover:text-accent transition-all" />}
                </button>
                <div className={`px-10 transition-all duration-300 ease-in-out ${activeFaq === i ? 'pb-10 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Strategic Consultation CTA */}
      <section className="py-24 bg-[var(--primary-dark)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="w-24 h-24 bg-accent rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-3xl rotate-12 scale-110">
            <MessageCircle className="w-12 h-12 text-[var(--primary)]" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9]">Ready to Scale <br /><span className="text-accent underline decoration-8 underline-offset-8 decoration-white/20">Your Legacy?</span></h2>
          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto">Every world-class author needs a world-class team. Join the elite who trust TopShelf to deliver perfection.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact-us">
              <button className="bg-white text-[var(--primary)] px-16 py-6 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl flex items-center gap-4">
                Start My Project <ArrowRight className="w-8 h-8 text-accent" />
              </button>
            </Link>
            <Link href="/services">
              <button className="px-12 py-6 border-2 border-white/20 rounded-full font-black text-2xl hover:bg-white/10 hover:border-white transition-all">All Services</button>
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="text-3xl font-black">FORBES</div>
            <div className="text-3xl font-black">NYT BESTSELLER</div>
            <div className="text-3xl font-black">USA TODAY</div>
            <div className="text-3xl font-black">AMAZON NO.1</div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Icon fallbacks for dynamic data
function Map(props: any) { return <Globe {...props} />; }
function Sparkles(props: any) { return <Zap {...props} />; }
