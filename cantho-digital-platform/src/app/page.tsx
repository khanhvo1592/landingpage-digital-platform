import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Platforms from '@/components/Platforms'
import Tutorial from '@/components/Tutorial'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Modal from '@/components/Modal'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Platforms />
      <Tutorial />
      <Download />
      <Contact />
      <Footer />
      <FloatingButtons />
      <Modal />
    </main>
  )
}
