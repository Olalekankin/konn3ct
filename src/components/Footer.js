'use client'
import React from 'react'
import { LuMicOff } from 'react-icons/lu'
import { RxDividerVertical } from 'react-icons/rx'
import { IoEllipsisVertical } from 'react-icons/io5'
const footer = () => {
  return (
    <div className='bg-primary text-white w-full py-6 px-12 font-inter h-24 box-border'>
      <div className='flex justify-between items-center'>
        <div className='flex item-center space-x-8'>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/share.svg' alt='share-icon' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/pallet.svg' alt='pallet-icon' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/robo.svg' alt='robot-icon' />
          </button>
        </div>
        <div className='flex item-center space-x-8'>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <LuMicOff className='text-2xl' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/camera.svg' alt='camera-icon' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/present.svg' alt='' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/option.svg' alt='' />
          </button>
          <button className='rounded-full flex justify-center items-center h-12 w-24 bg-reed space-x-1 p-2.5'>
            <img src='/asset/end.svg' alt='' />
            <RxDividerVertical className='text-2xl text-opBlack' />
            <IoEllipsisVertical className='text-xl text-white' />
          </button>
        </div>
        <div className='flex item-center space-x-8'>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/hand.svg' alt='' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12 p-2'>
            <img src='/asset/cc.svg' alt='' />
          </button>
          <button className='rounded-full border border-white flex justify-center items-center h-12 w-12'>
            <img src='/asset/chat.svg' alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default footer
