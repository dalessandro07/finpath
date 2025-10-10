import BenefitsSection from '@/core/components/home/benefits-section'
import CTASection from '@/core/components/home/cta-section'
import FeaturesSection from '@/core/components/home/features-section'
import HeroSection from '@/core/components/home/hero-section'
import IntroSection from '@/core/components/home/intro-section'
import TestimonialsSection from '@/core/components/home/testimonials-section'
import Footer from '@/core/components/layout/footer'
import Header from '@/core/components/layout/header'

export default function Home () {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />

      <Footer />
    </main>
  )
}
