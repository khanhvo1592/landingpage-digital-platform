'use client'

import { useState, useEffect } from 'react'
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
import type { Platform } from '@/components/Platforms'

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    type: 'welcome' | 'platform'
    platform?: Platform
  }>({
    isOpen: false,
    type: 'welcome'
  })

  // Show welcome modal on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalState({
        isOpen: true,
        type: 'welcome'
      })
    }, 2000) // Show after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleShowWelcomeModal = () => {
    setModalState({
      isOpen: true,
      type: 'welcome'
    })
  }

  const handleShowPlatformModal = (platform: Platform) => {
    setModalState({
      isOpen: true,
      type: 'platform',
      platform
    })
  }

  const handleCloseModal = () => {
    setModalState(prev => ({
      ...prev,
      isOpen: false
    }))
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onShowWelcomeModal={handleShowWelcomeModal} />
      <Introduction />
      <Platforms onShowModal={handleShowPlatformModal} />
      <Tutorial />
      <Download />
      <Contact />
      <Footer />
      <FloatingButtons />
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        platform={modalState.platform}
      />
    </main>
  )
}
