import dynamic from "next/dynamic"
import { HeroSection, StatsSection } from "./sections"

const LazyFeaturesSection = dynamic(() => import("./sections/features-section/features-section").then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

const LazyGallerySection = dynamic(() => import("./sections/gallery-section/gallery-section").then(mod => ({ default: mod.GallerySection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

const LazySpecialOfferSection = dynamic(() => import("./sections/special-offer-section/special-offer-section").then(mod => ({ default: mod.SpecialOfferSection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

const LazyPricingSection = dynamic(() => import("./sections/pricing-section/pricing-section").then(mod => ({ default: mod.PricingSection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

const LazyCTASection = dynamic(() => import("./sections/cta-section/cta-section").then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

const LazyFAQSection = dynamic(() => import("./sections/faq-section/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

const LazyTestimonialsSection = dynamic(() => import("./sections/testimonials-section/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-50 rounded-lg" />,
  ssr: false
})

export const LadingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20 overflow-hidden">
      <HeroSection />
      <StatsSection />
      <LazyFeaturesSection />
      <LazyGallerySection />
      <LazySpecialOfferSection />
      <LazyPricingSection />
      <LazyCTASection />
      <LazyFAQSection />
      <LazyTestimonialsSection />
    </article>
  )
}
