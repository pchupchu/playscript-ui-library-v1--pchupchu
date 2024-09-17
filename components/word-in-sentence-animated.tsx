import { VariantProps, cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

const wordInSentenceVariants = cva(
  'flex h-10 px-[20px] py-2.5 tracking-wide items-center justify-center whitespace-nowrap rounded-lg text-2xl font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-background text-white border-border border-2 border-b-4 border-r-4 hover:px-[21px] hover:border-b-2 hover:border-r-2 hover:shadow-primary',
        active:
          'bg-background text-white border-primary border-2 hover:px-[21px] hover:shadow-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const motionVariants = {
  shadowBorderOff: {
    border: '2px solid rgb(30, 30, 30)',
    paddingLeft: '21px',
    paddingRight: '21px',
  },
  shadowBorderOn: {
    border: '2px solid rgb(30, 30, 30)',
    borderBottom: '4px solid rgb(30, 30, 30)',
    borderRight: '4px solid rgb(30, 30, 30)',
    transition: { type: 'spring' },
  },
};

type WordInSentenceVariantsProps = VariantProps<typeof wordInSentenceVariants>;

interface WordInSentenceProps extends WordInSentenceVariantsProps {
  children: React.ReactNode;
  onClick?: () => void;
  condition: boolean;
}

const WordInSentenceAnimated = ({
  variant,
  onClick,
  children,
  condition,
}: WordInSentenceProps) => {
  return (
    <AnimatePresence initial={false}>
      <motion.span
        initial={'shadowBorderOn'}
        animate={condition ? 'shadowBorderOff' : 'shadowBorderOn'}
        variants={motionVariants}
        onClick={onClick}
        className={wordInSentenceVariants({ variant })}>
        {children}
      </motion.span>
    </AnimatePresence>
  );
};

export default WordInSentenceAnimated;
