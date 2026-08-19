import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { ProductsSection } from '@/components/ProductsSection'
import { CustomDev } from '@/components/CustomDev'
import { QuoteForm } from '@/components/QuoteForm'
import { Benefits } from '@/components/Benefits'
import { HowItWorks } from '@/components/HowItWorks'
import { About } from '@/components/About'
import { FinalCta } from '@/components/FinalCta'
import { Footer } from '@/components/Footer'
import { WhatsappFloat } from '@/components/WhatsappFloat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProductsSection />
        <CustomDev />
        <QuoteForm />
        <Benefits />
        <HowItWorks />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

export default App
