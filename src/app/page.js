import Header from '@components/Header'
import Footer from '@components/Footer'
import Participant from '@/components/participant'

export default function Home() {
  return (
    <main className='h-screen bg-secondary'>
      <div className='w-full fixed top-0 z-20'>
        <Header />
      </div>
      <div className='w-full h-full px-10 py-[105px]'>
        <div className='bg-white h-full shadow-sm py-8 px-14'>
          <Participant/>
        </div>
      </div>
      <div className='w-full fixed bottom-0 z-20'>
        <Footer />
      </div>
    </main>
  )
}
