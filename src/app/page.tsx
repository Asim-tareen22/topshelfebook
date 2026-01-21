import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PersonalBrand } from "@/components/sections/PersonalBrand";
import { BookShelfSection } from "@/components/sections/BookShelfSection";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Loading skeleton component
const SectionSkeleton = ({
  height = "h-screen",
  bg = "bg-black",
}: {
  height?: string;
  bg?: string;
}) => <div className={`${height} ${bg} animate-pulse`} />;

// Lazy load below-the-fold sections with SSR disabled for heavy components
const BooksShowcase = dynamic(
  () =>
    import("@/components/sections/BooksShowcase").then((mod) => ({
      default: mod.BooksShowcase,
    })),
  {
    loading: () => <SectionSkeleton />,
  },
);

const CardsSpreadSection = dynamic(
  () =>
    import("@/components/sections/CardsSpreadSection").then((mod) => ({
      default: mod.CardsSpreadSection,
    })),
  {
    loading: () => <SectionSkeleton bg="bg-[#FFFAE8]" />,
  },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  {
    loading: () => <SectionSkeleton height="h-[600px]" />,
  },
);

const VideoReviewsSection = dynamic(
  () =>
    import("@/components/sections/VideoReviewsSection").then((mod) => ({
      default: mod.VideoReviewsSection,
    })),
  {
    loading: () => <SectionSkeleton height="h-[800px]" />,
  },
);

const NewTrending = dynamic(
  () =>
    import("@/components/sections/NewTrending").then((mod) => ({
      default: mod.NewTrending,
    })),
  {
    loading: () => <SectionSkeleton bg="bg-[var(--bg-cream)]" />,
  },
);

const Pricing = dynamic(
  () =>
    import("@/components/sections/Pricing").then((mod) => ({
      default: mod.Pricing,
    })),
  {
    loading: () => <SectionSkeleton height="h-[900px]" />,
  },
);

const FAQs = dynamic(
  () =>
    import("@/components/sections/FAQs").then((mod) => ({ default: mod.FAQs })),
  {
    loading: () => <SectionSkeleton height="h-[800px]" bg="bg-[#FFF8E7]" />,
  },
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical above-the-fold content */}
      <Hero />
      <Services />
      <PersonalBrand />
      <BookShelfSection />

      {/* Lazy-loaded sections */}
      <Suspense fallback={<SectionSkeleton />}>
        <BooksShowcase />
      </Suspense>

      <Suspense fallback={<SectionSkeleton bg="bg-[#FFFAE8]" />}>
        <CardsSpreadSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[800px]" />}>
        <VideoReviewsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton bg="bg-[var(--bg-cream)]" />}>
        <NewTrending />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[900px]" />}>
        <Pricing />
      </Suspense>

      <Suspense
        fallback={<SectionSkeleton height="h-[800px]" bg="bg-[#FFF8E7]" />}
      >
        <FAQs />
      </Suspense>
    </main>
  );
}
