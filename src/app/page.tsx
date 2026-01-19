import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { PersonalBrand } from '@/components/sections/PersonalBrand';
import { BookShelfSection } from '@/components/sections/BookShelfSection';
import dynamic from 'next/dynamic';

// Lazy load below-the-fold sections for better performance
const BooksShowcase = dynamic(() => import('@/components/sections/BooksShowcase').then(mod => ({ default: mod.BooksShowcase })), {
  loading: () => <div className="h-screen bg-black" />,
});

const CardsSpreadSection = dynamic(() => import('@/components/sections/CardsSpreadSection').then(mod => ({ default: mod.CardsSpreadSection })), {
  loading: () => <div className="h-screen bg-[var(--bg-cream)]" />,
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-screen bg-black" />,
});

const VideoReviewsSection = dynamic(() => import('@/components/sections/VideoReviewsSection').then(mod => ({ default: mod.VideoReviewsSection })), {
  loading: () => <div className="h-screen bg-black" />,
});

const NewTrending = dynamic(() => import('@/components/sections/NewTrending').then(mod => ({ default: mod.NewTrending })), {
  loading: () => <div className="h-screen bg-[var(--bg-cream)]" />,
});

const Pricing = dynamic(() => import('@/components/sections/Pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="h-screen bg-black" />,
});

const FAQs = dynamic(() => import('@/components/sections/FAQs').then(mod => ({ default: mod.FAQs })), {
  loading: () => <div className="h-screen bg-[var(--bg-cream)]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <PersonalBrand />
      <BookShelfSection />
      <BooksShowcase />
      <CardsSpreadSection />
      <TestimonialsSection />
      <VideoReviewsSection />
      <NewTrending />
      <Pricing />
      <FAQs />
    </main>
  );
}