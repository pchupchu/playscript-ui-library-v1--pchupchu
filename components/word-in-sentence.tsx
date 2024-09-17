import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import Shining from './shining';

const wordInSentenceVariants = cva(
  'relative flex px-5 py-2.5 tracking-wide items-center justify-center whitespace-nowrap rounded-lg text-2xl font-semibold text-white',
  {
    variants: {
      variant: {
        default:
          'bg-background border-border border-b-4 shadow-default hover:border-2',
        active:
          'bg-background border-2 border-primary border-b-4 shadow-default hover:border-b-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type WordInSentenceVariantsProps = VariantProps<typeof wordInSentenceVariants>;

interface WordInSentenceProps extends WordInSentenceVariantsProps {
  children: React.ReactNode;
  onClick: () => void;
}

const WordInSentence = ({
  variant,
  onClick,
  children,
}: WordInSentenceProps) => {
  const motionVariants = {
    shadowOn: {
      boxShadow: 'var(--shadow-default)',
    },
    shadowOff: {
      boxShadow: 'none',
    },
  };
  return (
    <motion.span
      className={cn(wordInSentenceVariants({ variant }))}
      onClick={onClick}
      initial={'shadowOn'}
      whileHover={'shadowOff'}
      variants={motionVariants}>
      {children}
      <Shining />
    </motion.span>
  );
};

export default WordInSentence;
