'use client'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'
import Modal from '@/components/Modal'
import Participant from '@/components/Participant'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <main className='h-screen bg-secondary'>
      <div className='w-full fixed top-0 z-20'>
        <Header onOpenModal={openModal} />
      </div>
      <div className='w-full h-full px-10 py-[105px]'>
        <div className='bg-white h-full shadow-sm py-8 px-14'>
          <Participant />
        </div>
      </div>
      <div className='w-full fixed bottom-0 z-20'>
        <Footer />
      </div>
      <div className='fixed inset-0'>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </main>
  )
}
