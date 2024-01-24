import React from "react";
import { motion } from "framer-motion";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

interface AnimatedCharactersProps {
  text: string;
  type: keyof typeof tagMap;
}

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
} as const;

const AnimatedText: React.FC<AnimatedCharactersProps> = (props) => {
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = props.text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => (
        <Wrapper key={index}>
          {words[index].flat().map((element, index) => (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
              key={index}
            >
              <motion.span
                style={{ display: "inline-block" }}
                variants={item}
              >
                {element}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};

export default AnimatedText;
