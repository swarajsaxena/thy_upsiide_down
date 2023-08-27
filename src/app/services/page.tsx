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
  features: { feature: string; value: string }[]
}

const page = () => {
  const services: ServicesI[] = [
    {
      title: 'SaaS Product Development',
      description:
        "At Thy Upsiide Down, we specialize in turning your software dreams into reality with our top-tier SaaS product development service. Our mission is to empower your business with cutting-edge, cloud-based software solutions that solve real-world problems, boost efficiency, and drive growth. With a proven track record of creating successful SaaS products, we're your partner in innovation.",
      features: [
        {
          feature: 'Customizable Solutions',
          value: 'Tailored SaaS products aligning with unique business needs.',
        },
        {
          feature: 'Scalability',
          value: 'Built to grow alongside business demands.',
        },
        {
          feature: 'Integration-Friendly',
          value: 'Seamless integration with other tools and platforms.',
        },
      ],
    },
    {
      title: 'Professional Business Website',
      description:
        'At Thy Upsiide Down, we specialize in crafting tailor-made Business Websites that serve as powerful online assets for your company. Our mission is to elevate your digital presence, strengthen your brand identity, and drive growth through cutting-edge web design and development. With a focus on user experience, functionality, and aesthetics, we bring your vision to life in the digital world.',
      features: [
        {
          feature: 'Responsive Design',
          value:
            'Websites optimized for various devices ensuring a consistent user experience.',
        },
        {
          feature: 'SEO Optimization',
          value:
            'Implementation of strategies to improve search engine visibility.',
        },
        {
          feature: 'Analytics Integration',
          value:
            'Integration of tracking tools to monitor website performance.',
        },
      ],
    },
    {
      title: 'Dynamic Blog and News Website',
      description:
        "Welcome to At Thy Upsiide Down, where we specialize in crafting engaging and dynamic Blog and News Websites. In today's fast-paced digital world, staying connected with your audience and delivering timely and relevant content is crucial. Our mission is to empower you to share your stories, insights, and news with the world through a beautifully designed and highly functional website.",
      features: [
        {
          feature: 'Content Management System',
          value: 'User-friendly CMS for easy article and news management.',
        },
        {
          feature: 'Social Media Integration',
          value:
            'Sharing buttons and social feeds for wider content distribution.',
        },
        {
          feature: 'Commenting System',
          value:
            'Interactive discussions through comments for reader engagement.',
        },
      ],
    },
    {
      title: 'E-commerce Website',
      description:
        'Welcome to Thy Upsiide Down, your trusted partner for creating robust and highly profitable E-commerce websites. In the digital age, an exceptional online store is the cornerstone of a successful retail business. Our dedicated team of E-commerce experts is here to transform your vision into a feature-rich, user-friendly, and visually stunning online shopping experience.',
      features: [
        {
          feature: 'Product Showcase',
          value:
            'Stunning visuals and detailed descriptions to showcase products effectively.',
        },
        {
          feature: 'Secure Transactions',
          value:
            'Implementation of robust security measures for safe online transactions.',
        },
        {
          feature: 'Inventory Management',
          value: 'Tools to efficiently manage product stock and availability.',
        },
      ],
    },
    {
      title: 'Digital Wedding Gallery Creation',
      description:
        'At Thy Upsiide Down, we understand that your wedding is a momentous occasion filled with cherished memories. Our Digital Wedding Gallery Creation service is designed to transform those memories into a timeless, online treasure. We specialize in crafting beautifully curated digital galleries that encapsulate the magic, love, and joy of your special day.',
      features: [
        {
          feature: 'Personalized Themes',
          value:
            'Customized design to match the aesthetic and mood of your wedding.',
        },
        {
          feature: 'High-Resolution Media',
          value:
            'Display high-quality photos and videos capturing the essence of the day.',
        },
        {
          feature: 'Guest Interaction',
          value:
            'Option for guests to leave messages, reliving the celebration through shared memories.',
        },
      ],
    },
    {
      title: 'Website Revamp and Modernization',
      description:
        "At Thy Upsiide Down, we understand that your website is the online face of your business. But as the digital landscape evolves, so should your web presence. That's where our Website Revamp and Modernization service comes in. We breathe new life into your existing website, transforming it into a cutting-edge platform that not only meets modern web standards but also captivates your audience and drives results.",
      features: [
        {
          feature: 'User-Centric Design',
          value:
            'Redesigned interface focused on improving user navigation and experience.',
        },
        {
          feature: 'Performance Optimization',
          value: 'Faster loading times and smoother interactions for visitors.',
        },
        {
          feature: 'Interactive Elements',
          value:
            'Incorporating animations, videos, and interactive features to engage users.',
        },
      ],
    },
  ]
  const [activeService, setActiveService] = useState<ServicesI>(services[0])
  return (
    <>
      {/* <div className='py-5 w-[100vw] px-10 flex flex-col justify-center'>
        <Divider icons={false} />
        <InfiniteCarasoul />
        <Divider icons={false} />
      </div> */}
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
