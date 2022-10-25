import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div>
        <motion.img 
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='https://media.glassdoor.com/sqll/4747101/sanity-ca-squareLogo-1640192856530.png'
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32'
        />
    </div>
  )
}