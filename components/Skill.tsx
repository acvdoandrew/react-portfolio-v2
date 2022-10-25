import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionUp?: boolean;
};

export default function Skill({ directionUp }: Props) {
  return (
    <div>
        <motion.img 
            initial={{ y: directionUp ? -200 : 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            src='https://media.glassdoor.com/sqll/4747101/sanity-ca-squareLogo-1640192856530.png'
            className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32 xl:h-32'
        />
    </div>
  )
}