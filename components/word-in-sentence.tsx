import { VariantProps, cva } from 'class-variance-authority';

const wordInSentenceVariants = cva(
  'flex h-10 px-[20px] py-2.5 tracking-wide items-center justify-center whitespace-nowrap rounded-lg text-2xl font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-background text-white border-border border-2 border-b-4 border-r-[4px] hover:px-[21px] hover:border-b-2 hover:border-r-[2px] hover:shadow-primary',
        active:
          'bg-background text-white border-primary border-2 hover:px-[21px] hover:shadow-primary',
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
  onClick?: () => void;
}

const WordInSentence = ({
  variant,
  onClick,
  children,
}: WordInSentenceProps) => {
  return (
    <span onClick={onClick} className={wordInSentenceVariants({ variant })}>
      {children}
    </span>
  );
};

export default WordInSentence;
