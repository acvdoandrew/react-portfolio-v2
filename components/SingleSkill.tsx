import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';

type Props = {
    skill: Skill;
    directionUp?: boolean;
};

export default function SingleSkill({ directionUp, skill }: Props) {
  return (
    <div>
        <motion.img 
            initial={{ y: directionUp ? 200 : -200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            src={skill?.image}
            className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32 xl:h-32'
        />
    </div>
  )
}