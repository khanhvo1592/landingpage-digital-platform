'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TVOnline from '@/components/TVOnline'
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
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'welcome' as 'platform' | 'welcome',
    platform: undefined as Platform | undefined
  })

  const showWelcomeModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      isOpen: true,
      type: 'welcome',
      platform: undefined
    }))
  }, [])

  const showPlatformModal = useCallback((platform: Platform) => {
    setModalState(prev => ({
      ...prev,
      isOpen: true,
      type: 'platform',
      platform
    }))
  }, [])

  const closeModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      isOpen: false,
      type: 'welcome',
      platform: undefined
    }))
  }, [])

  // Auto-show welcome modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      showWelcomeModal()
    }, 2000)

    return () => clearTimeout(timer)
  }, [showWelcomeModal])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onShowWelcomeModal={showWelcomeModal} />
      <TVOnline />
      <Introduction />
      <Platforms onShowModal={showPlatformModal} />
      <Tutorial />
      <Download />
      <Contact />
      <Footer />
      <FloatingButtons />
      <Modal
        isOpen={modalState.isOpen}
        type={modalState.type}
        platform={modalState.platform}
        onClose={closeModal}
      />
    </main>
  )
}
