import BenefitsSection from '@/core/components/home/benefits-section'
import CTASection from '@/core/components/home/cta-section'
import FeaturesSection from '@/core/components/home/features-section'
import ClasesSection from '@/core/components/home/clases-section'
import HeroSection from '@/core/components/home/hero-section'
import IntroSection from '@/core/components/home/intro-section'
import { StatsLoading } from '@/core/components/home/stats-loading'
import StatsSection from '@/core/components/home/stats-section'
import TestimonialsSection from '@/core/components/home/testimonials-section'
import Footer from '@/core/components/layout/footer'
import Header from '@/core/components/layout/header'
import { Suspense } from 'react'

export default function Home () {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />
      <IntroSection />
      <Suspense fallback={<StatsLoading />}>
        <StatsSection />
      </Suspense>
      <BenefitsSection />
      <FeaturesSection />
      <ClasesSection />
      <TestimonialsSection />
      <CTASection />

      <Footer />
    </main>
  )
}
