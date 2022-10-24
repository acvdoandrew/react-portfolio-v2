import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration:1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                x: 0,
                opacity: 1 
            }}
            viewport={{ once: true }}
            src='https://scontent-bos5-1.xx.fbcdn.net/v/t31.18172-8/27369139_1616387851791418_3398732362838147516_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=Fnuwh_-JKhQAX8fmySv&_nc_ht=scontent-bos5-1.xx&oh=00_AT9bp200PTsKvGrz-uccXpjbrVc6VosATrWw4ylsmcfkAw&oe=637A8089'
            className='flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold md:text-4xl lg:text-5xl'>
                Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
            </h4>
            <p className='text-sm md:text-base'>
            I am a self-driven Software Engineer with over 3 years of experience in hospitality. Dedicated drive in tackling complex problems by applying effective and simplified processes utilizing a variety of methodologies. Lifelong learner with a passion for staying on top of new technologies and frameworks to advance with societal changes. Leveraging a strong background in hospitality that enables effective communication to approach client needs by addressing pain points in order to provide a better user experience.
            </p>
        </div>
    </motion.div>
  )
}