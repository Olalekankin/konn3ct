'use client'
import React from 'react'
import { LuWifi } from 'react-icons/lu'
const Participant = () => {
  return (
    <div className='h-full w-full'>
      <div className='w-full flex justify-center'>
        <div className='flex items-center space-x-1'>
          <div className='rounded-full p-1 h-8 hover:opacity-95 bg-pFade5 border border-pLite flex items-center justify-between space-x-1.5'>
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
          <div className='rounded-full p-1 h-8 hover:opacity-95 bg-pFade5 border border-pLite flex items-center justify-between space-x-1.5 opacity-40'>
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
          <div className='rounded-full p-1 h-8 hover:opacity-95 bg-pFade5 border border-pLite flex items-center justify-between space-x-1.5 opacity-40'>
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
      <div className='mt-3 h-[calc(100%-30px)] '>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] grid-rows-[repeat(auto-fit,minmax(0,1fr))] gap-5 w-full h-full place-items-center'>
          {/* Participant components */}
          <div className='relative min-w-[232px] min-h-[191px] max-w-3xl max-h-full h-full  aspect-h-1'>
            <img
              src='/asset/image3.png'
              alt='participant-image'
              className='rounded-3xl object-cover w-full h-full'
            />
            <div className='absolute z-20 bg-black rounded-full py-1 px-2.5 flex space-x-2 items-center bottom-4 left-3'>
              <p className='text-white'>Akanji J</p>
              <LuWifi className='text-base text-primary' />
            </div>
          </div>
          <div className='relative min-w-[232px] min-h-[191px] max-w-3xl max-h-full h-full  aspect-h-1'>
            <img
              src='/asset/image2.png'
              alt='participant-image'
              className='rounded-3xl object-cover w-full h-full'
            />
            <div className='absolute z-20 bg-black rounded-full py-1 px-2.5 flex space-x-2 items-center bottom-4 left-3'>
              <p className='text-white'>Akanji J</p>
              <LuWifi className='text-base text-primary' />
            </div>
          </div>
          <div className='relative min-w-[232px] min-h-[191px] max-w-3xl max-h-full h-full  aspect-h-1'>
            <img
              src='/asset/image1.png'
              alt='participant-image'
              className='rounded-3xl object-cover w-full h-full'
            />
            <div className='absolute z-20 bg-black rounded-full py-1 px-2.5 flex space-x-2 items-center bottom-4 left-3'>
              <p className='text-white'>Akanji J</p>
              <LuWifi className='text-base text-primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Participant
