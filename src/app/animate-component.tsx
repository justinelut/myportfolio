"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AnimationType = 'fade' | 'slide';
type Direction = 'up' | 'down' | 'left' | 'right';

interface AnimationProps {
  animationType: AnimationType;
  direction?: Direction;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}


const getAnimationVariants = (
  animationType: AnimationType,
  direction?: Direction,
  duration?: number,
  delay?: number
) => {
  const durationValue = duration ?? 0.5;
  const delayValue = delay ?? 0;

  switch (animationType) {
    case 'fade':
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: durationValue, delay: delayValue },
        },
        exit: { opacity: 0, transition: { duration: durationValue } },
      };
    case 'slide':
      const distance = 100;
      let initial: { x?: number; y?: number } = {};
      switch (direction) {
        case 'up':
          initial = { y: distance };
          break;
        case 'down':
          initial = { y: -distance };
          break;
        case 'left':
          initial = { x: distance };
          break;
        case 'right':
          initial = { x: -distance };
          break;
        default:
          initial = { y: distance };
          break;
      }
      return {
        hidden: { ...initial, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: durationValue, delay: delayValue },
        },
        exit: {
          ...initial,
          opacity: 0,
          transition: { duration: durationValue },
        },
      };
    default:
      return {};
  }
};

const AnimatedComponent: React.FC<AnimationProps> = ({
  animationType,
  direction,
  duration,
  delay,
  children,
}) => {
  const variants = getAnimationVariants(animationType, direction, duration, delay);

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className='w-[100%] h-[100%]'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedComponent;
