'use client'
import Divider from '@/components/Divider'
import InfiniteCarasoul from '@/components/InfiniteCarasoul'
import NextLink from '@/components/NextLink'
import ServiceCard from '@/components/services/ServiceCard'
import ServiceListing from '@/components/services/ServiceListing'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import Image from 'next/image'
import React, { useState } from 'react'

export interface ServicesI {
  title: string
  description: string
}

const page = () => {
  const services: ServicesI[] = [
    {
      title: 'SaaS Product Development',
      description:
        "At Thy Upsiide Down, we specialize in turning your software dreams into reality with our top-tier SaaS product development service. Our mission is to empower your business with cutting-edge, cloud-based software solutions that solve real-world problems, boost efficiency, and drive growth. With a proven track record of creating successful SaaS products, we're your partner in innovation.",
    },
    {
      title: 'Professional Business Website ',
      description:
        'At Thy Upsiide Down, we specialize in crafting tailor-made Business Websites that serve as powerful online assets for your company. Our mission is to elevate your digital presence, strengthen your brand identity, and drive growth through cutting-edge web design and development. With a focus on user experience, functionality, and aesthetics, we bring your vision to life in the digital world.',
    },
    {
      title: 'Dynamic Blog and News Website ',
      description:
        "Welcome to At Thy Upsiide Down, where we specialize in crafting engaging and dynamic Blog and News Websites. In today's fast-paced digital world, staying connected with your audience and delivering timely and relevant content is crucial. Our mission is to empower you to share your stories, insights, and news with the world through a beautifully designed and highly functional website.",
    },
    {
      title: 'E-commerce Website ',
      description:
        'Welcome to Thy Upsiide Down, your trusted partner for creating robust and highly profitable E-commerce websites. In the digital age, an exceptional online store is the cornerstone of a successful retail business. Our dedicated team of E-commerce experts is here to transform your vision into a feature-rich, user-friendly, and visually stunning online shopping experience.',
    },
    {
      title: 'Digital Wedding Gallery Creation',
      description:
        'At Thy Upsiide Down, we understand that your wedding is a momentous occasion filled with cherished memories. Our Digital Wedding Gallery Creation service is designed to transform those memories into a timeless, online treasure. We specialize in crafting beautifully curated digital galleries that encapsulate the magic, love, and joy of your special day.',
    },

    {
      title: 'Website Revamp and Modernization',
      description:
        "At Thy Upsiide Down, we understand that your website is the online face of your business. But as the digital landscape evolves, so should your web presence. That's where our Website Revamp and Modernization service comes in. We breathe new life into your existing website, transforming it into a cutting-edge platform that not only meets modern web standards but also captivates your audience and drives results.",
    },
  ]
  const [activeService, setActiveService] = useState<ServicesI>(services[0])
  return (
    <>
      <div className='py-5 w-[100vw] px-10 flex flex-col justify-center'>
        <Divider icons={false} />
        <InfiniteCarasoul />
        <Divider icons={false} />
      </div>
      <div className='mx-4 mb-0 flex-grow flex overflow-y-hidden '>
        <WhyChooseUs />
        <Divider
          icons={false}
          orientation='vertical'
        />
        <ServiceListing
          services={services}
          activeService={activeService}
          setActiveService={setActiveService}
        />
      </div>
    </>
  )
}

export default page
