import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedText from './animation/textanimation';

type PlaceholderItem = {
  key: number;
  type: 'heading1' | 'heading2' | 'paragraph';
  text: string;
};

type AnimateItemsProps = {
  text: PlaceholderItem[];
};

export default function AnimateItems({ text }: AnimateItemsProps) {
  const [replay, setReplay] = React.useState(true);
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  
  return (
    <motion.div
      className="z-10"
      initial="hidden"
      animate={replay ? 'visible' : 'hidden'}
      variants={container}
    >
      {text.map((item) => (
        <AnimatedText {...item} key={item.key} />
      ))}
    </motion.div>
  );
}
