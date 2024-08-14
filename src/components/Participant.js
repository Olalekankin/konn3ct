import React from 'react'
import { HiWifi } from 'react-icons/hi'

const Participant = () => {
  return (
    <div className='h-full w-full'>
      <div className='w-full flex justify-center'>
        <div className='flex items-center space-x-1'>
          <div className='rounded-full p-1 h-8 bg-pFade5 border border-pLite flex items-center justify-between space-x-1.5'>
            <div className='rounded-full w-7 h-7 p-0.5'>
              <img
                src='/asset/parti.png'
                alt='participant-image'
                className='object-cover h-full w-full rounded-full'
              />
            </div>
            <p className='text-sm font-medium text-white'>Akanji J</p>
            <img src='/asset/fill-mic.svg' alt='' />
          </div>
          <div className='rounded-full p-1 h-8 bg-pFade5 border border-pLite flex items-center justify-between space-x-1.5 opacity-40'>
            <div className='rounded-full w-7 h-7 p-0.5'>
              <img
                src='/asset/parti.png'
                alt='participant-image'
                className='object-cover h-full w-full rounded-full'
              />
            </div>
            <p className='text-sm font-medium text-white'>Akanji J</p>
            <img src='/asset/fill-mic.svg' alt='' />
          </div>
          <div className='rounded-full p-1 h-8 bg-pFade5 border border-pLite flex items-center justify-between space-x-1.5 opacity-40'>
            <div className='rounded-full w-7 h-7 p-0.5'>
              <img
                src='/asset/parti.png'
                alt='participant-image'
                className='object-cover h-full w-full rounded-full'
              />
            </div>
            <p className='text-sm font-medium text-white'>Akanji J</p>
            <img src='/asset/fill-mic.svg' alt='' />
          </div>
        </div>
      </div>
      {/* participant images and control */}
      <div className='mt-3 h-5/6'>
        <div className='h-full flex w-full space-x-5'>
          <div className='h-full max-w-3xl relative'>
            <img
              src='/asset/image1.png'
              alt='participant-image'
              className='w-full rounded-3xl'
            />
            <div className='absolute z-20 bg-bblack rounded-full py-1 px-2.5 flex space-x-2 items-center bottom-4 left-3'>
              <p className='text-white'>Akanji J</p>
              <HiWifi className='text-base text-primary' />
            </div>
          </div>
          <div className='h-full max-w-3xl relative'>
            <img
              src='/asset/image2.png'
              alt='participant-image'
              className='w-full rounded-3xl'
            />
            <div className='absolute z-20 bg-bblack rounded-full py-1 px-2.5 flex space-x-2 items-center bottom-4 left-3'>
              <p className='text-white'>Susan B</p>
              <HiWifi className='text-base text-primary' />
            </div>
          </div>
          <div className='h-full max-w-3xl relative'>
            <img
              src='/asset/image1.png'
              alt='participant-image'
              className='w-full rounded-3xl'
            />
            <div className='absolute z-20 bg-bblack rounded-full py-1 px-2.5 flex space-x-2 items-center bottom-4 left-3'>
              <p className='text-white'>Akanji J</p>
              <HiWifi className='text-base text-primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Participant