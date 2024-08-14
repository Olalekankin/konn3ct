// The dashboard header
import React from 'react'
import Image from 'next/image'
import { FiUsers } from 'react-icons/fi'

const header = () => {
  return (
    <div className='bg-white w-full py-6 px-14 font-inter h-24 box-border'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2.5'>
          <Image src='/asset/logo.png' width={144} height={48} alt='Logo' />
          <div className='border-l border-darkGray px-3'>
            <h3 className='text-darkText text-lg font-medium'>
              Lagos State Tech Summit 2023
            </h3>
            <p className='font-medium text-sm text-liteText mt-1.5'>
              June 12th, 2023
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <button className='border border-darkerGray rounded-xl px-5 py-4 flex items-center space-x-2.5 h-12 box-border'>
            <Image
              src='/asset/record.png'
              width={22}
              height={22}
              alt='record-icon'
            />
            <span className='text-base font-semibold text-darkerGray'>
              Start Recording
            </span>
          </button>
          <button className='border border-darkerGray rounded-xl px-3 py-2 flex items-center space-x-2.5 h-12 box-border'>
            <FiUsers className='text-darkerGray text-2xl'/>
            <span className='text-base font-semibold text-darkerGray'>5</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default header