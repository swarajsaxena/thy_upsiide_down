'use client'

import React, { useRef, useState } from 'react'
import { cubicBezier, motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import Image from 'next/image'
import Menu from '@/components/aboutUs/Menu'
import Divider from '@/components/Divider'
import Notification from '@/components/Notification'

const page = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const [subject, setsubject] = useState('')
  const [send, setsend] = useState('Send')
  const form = useRef(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setsend('Sending')
    emailjs
      .sendForm(
        'service_6kasb4v',
        'template_y42fe5u',
        form.current as unknown as HTMLFormElement,
        'CphuE9D-S6wxeOk3Y'
      )
      .then(
        (result) => {
          console.log(result.text)
          setname('')
          setemail('')
          setmessage('')
          setsubject('')
          setsend('Sent')
          setInterval(() => {
            setsend('Send')
          }, 1000)
        },
        (error) => {
          setsend('Failed To Send')
          setTimeout(() => {
            setsend('Send')
          }, 500)
          console.log(error.text)
        }
      )
  }
  const ease = cubicBezier(0.36, 0.88, 0.18, 0.87)
  return (
    <div className='flex flex-col items-center justify-start overflow-y-scroll scrollbar-none min-h-screen'>
      <div className='w-full lg:w-full flex flex-col pb-[1vh] items-center justify-center text-left'>
        <div className='max-w-[1000px] px-4 lg:px-0 text-5xl md:text-7xl lg:text-8xl h-[80vh] flex flex-col justify-end items-start font-bold md:pb-10'>
          <div className='relative p-4'>
            <Divider className='absolute top-0 left-0 w-full' />
            <Divider
              orientation='vertical'
              className='absolute top-0 h-full py-8 left-[10px]'
              icons={false}
            />

            <Divider
              orientation='vertical'
              className='absolute top-0 right-[10px] h-full py-8'
              icons={false}
            />
            <Divider className='absolute bottom-0 left-0 w-full' />
            {'Get in Touch for Tailored Web Design and Development Solutions.'
              .split('')
              .map((str, index) => (
                <motion.span
                  className='tracking-normal'
                  initial={{
                    opacity: 0,
                    y: -40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: (index + 1) * 0.03,
                    },
                  }}
                  key={index}
                >
                  {str}
                </motion.span>
              ))}
          </div>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: 65 * 0.03,
              repeat: Infinity,
              duration: 2,
            }}
            className='text-base font-thin'
          >
            Scroll Down
          </motion.span>
        </div>
        <motion.div
          className='flex flex-col justify-center md:gap-20 items-center w-full p-4 py-16 md:p-8 md:py-28'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.1 }}
          transition={{ duration: 1, ease: ease }}
        >
          <div className='text-center font-light text-xl md:text-2xl lg:text-4xl max-w-4xl mb-4'>
            Let's start the conversation today and make your digital dreams a
            reality!
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col justify-start gap-6 text-base text-mutedWhite  w-full md:max-w-lg'
          >
            <input
              type='text'
              placeholder='Name'
              name='from_name'
              className='h-full px-3 py-1 md:px-4 md:py-2 rounded-md outline-none bg-mutedWhite/10'
              value={name}
              onChange={(e) => {
                setname(e.target.value)
              }}
            />
            <input
              type='email'
              name='reply_to'
              placeholder='Email'
              className='h-full px-3 py-1 md:px-4 md:py-2 rounded-md outline-none bg-mutedWhite/10'
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }}
            />
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className='h-full px-3 py-1 md:px-4 md:py-2 rounded-md outline-none bg-mutedWhite/10'
              value={subject}
              onChange={(e) => {
                setsubject(e.target.value)
              }}
            />
            <textarea
              placeholder='Your Thoughts..'
              name='message'
              className='h-full px-3 py-1 md:px-4 md:py-2 rounded-md outline-none bg-mutedWhite/10 min-h-[75px]'
              rows={4}
              value={message}
              onChange={(e) => {
                setmessage(e.target.value)
              }}
            />
            <input
              className={`w-full p-3 md:p-4 rounded-md  text-mutedBlack ${
                send === 'Sending' || send === 'Sent'
                  ? 'bg-accent/50 cursor-not-allowed'
                  : 'bg-accent hover:bg-accent/50 cursor-pointer'
              }`}
              type='submit'
              value={send}
            />
          </form>
        </motion.div>
        <div className='px-4 lg:px-0 flex flex-col w-full text-center gap-4 items-center opacity-70 py-4'>
          <a
            className='border-b-2 border-accent font-semibold text-xl mb-20'
            href='mailto:thyupsiidedown@gmail.com'
          >
            thyupsiidedown@gmail.com
          </a>
          2023 • Thy Upsiide Down • All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default page
