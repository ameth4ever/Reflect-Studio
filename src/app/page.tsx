import { Hero } from '@/components/home/Hero'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { StatsSection } from '@/components/home/StatsSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { ContactCTA } from '@/components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PartnersSection />
      <ContactCTA />
    </>
  )
}
