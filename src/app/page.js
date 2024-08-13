import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <main className='h-screen bg-secondary'>
      <div className='w-full fixed top-0'>
        <Header />
      </div>
      <div>hello</div>
      <div className='w-full fixed bottom-0'>
        <Footer />
      </div>
    </main>
  )
}
