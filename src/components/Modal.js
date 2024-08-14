'use client'
import React, { useState, useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import { CgSearch } from 'react-icons/cg'
import { TbMicrophone, TbMicrophoneOff, TbDotsVertical } from 'react-icons/tb'
import { RxSpeakerModerate } from 'react-icons/rx'
import { MdOutlineChatBubbleOutline } from 'react-icons/md'
import { FaUserMinus } from 'react-icons/fa'

const Modal = ({ isOpen, onClose }) => {
  const [isMicOn, setIsMicOn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMic = () => {
    setIsMicOn((prev) => !prev)
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-end text-white font-inter'>
      <div className='bg-mod p-6 rounded-2xl shadow-lg w-[432px] h-[calc(100%-200px)] relative z-50 right-10'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <h3 className='font-semibold text-xl text-fiveWhite'>
              Participants
            </h3>
            <select className='text-xs border border-blurGrey rounded-lg bg-transparent py-1.5 px-3 font-normal focus:outline-none focus:ring-0'>
              <option value=''>Everyone</option>
              <option value=''>Everyone</option>
            </select>
          </div>
          <div>
            <button onClick={onClose} className=''>
              <IoClose className='text-xl text-white' />
            </button>
          </div>
        </div>
        {/* Participant control */}
        <div className='mt-6'>
          <div className=''>
            <div className='relative w-full bg-pVone border border-pVtwo flex py-3 px-4 h-12 rounded-lg space-x-4'>
              <CgSearch className='text-xl text-fiveWhite absolute top-1/2 -translate-y-1/2 z-10' />
              <input
                type='text'
                placeholder='Find the person'
                className='w-5/6 border-none outline-none absolute right-0  bg-transparent top-1/2 -translate-y-1/2 py-1.5 placeholder-white text-sm text-bluGrey'
              />
            </div>
          </div>
          <div className='mt-6 space-y-4'>
            <div className='flex py-3 px-4 space-x-4 border-b border-pVtwo justify-between relative'>
              <div className='flex items-center space-x-3'>
                <div className='bg-pleGrey text-gray-500  flex justify-center items-center w-9 h-9 rounded-full text-sm font-bold'>
                  AJ
                </div>
                <div>
                  <h3 className='text-base font-semibold text-fiveWhite'>
                    Akanji J (You)
                  </h3>
                  <p className='text-sm text-bluGrey mt-1'>Host</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <button onClick={toggleMic}>
                  {isMicOn ? (
                    <TbMicrophone className='text-fiveWhite text-xl' />
                  ) : (
                    <TbMicrophoneOff className='text-fiveWhite text-xl' />
                  )}
                </button>
                <button onClick={toggleMenu} className='menu-btn'>
                  <TbDotsVertical className='text-fiveWhite text-xl' />
                </button>
              </div>
              {menuOpen && (
                <div
                  ref={menuRef}
                  className='menu absolute w-48 h-52 bg-pVtwo shadow-lg border border-primary rounded-lg right-0 top-16'
                >
                  <div className='space-y-4'>
                    <button className='px-4 py-4 w-full flex items-center space-x-2 border-b border-blurGrey'>
                      <img src='/asset/refresh.svg' alt='refresh-icon' />
                      <span className='text-fiveWhite text-sm font-semibold'>
                        Change Role
                      </span>
                    </button>
                    <button className='px-4 py-2 w-full flex items-center space-x-2'>
                      <RxSpeakerModerate className='text-fiveWhite text-base' />
                      <span className='text-fiveWhite text-sm font-semibold'>
                        Mute User
                      </span>
                    </button>
                    <button className='px-4 py-2 w-full flex items-center space-x-2'>
                      <MdOutlineChatBubbleOutline className='text-fiveWhite text-base' />
                      <span className='text-fiveWhite text-sm font-semibold'>
                        Private Chat
                      </span>
                    </button>
                    <button className='px-4 py-2 w-full flex items-center space-x-2'>
                      <FaUserMinus className='text-fiveWhite text-base' />
                      <span className='text-fiveWhite text-sm font-semibold'>
                        Remove User
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
