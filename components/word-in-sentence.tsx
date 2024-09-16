'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { motion } from 'framer-motion';

const wordInSentenceVariants = cva(
  'flex items-center justify-center rounded-lg border-2 bg-background px-5 py-2.5 text-2xl font-semibold text-white',
  {
    variants: {
      variant: {
        default: 'border-transparent hover:shadow-primary',
        active: 'border-primary hover:shadow-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type WordInSentenceVariantsProps = VariantProps<typeof wordInSentenceVariants>;

interface WordInSentenceProps extends WordInSentenceVariantsProps {
  condition: Boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const WordInSentence = ({
  variant,
  condition,
  children,
  onClick,
}: WordInSentenceProps) => {
  const motionVariants = {
    shadowDefault: {
      boxShadow: 'var(--shadow-default)',
      transition: { type: 'spring', stiffness: 500, delay: 0.1 },
    },
    shadowPrimary: {
      boxShadow: 'none',
      // transition: { type: 'spring', stiffness: 500, delay: 0.1 },
    },
  };

  return (
    <motion.div
      className={wordInSentenceVariants({ variant })}
      onClick={onClick}
      initial={'shadowDefault'}
      animate={condition ? 'shadowPrimary' : 'shadowDefault'}
      variants={motionVariants}>
      <span>{children}</span>
    </motion.div>
  );
};

export default WordInSentence;
