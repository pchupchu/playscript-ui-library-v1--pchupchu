'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

const Word = () => {
  const [isActive, setIsActive] = useState(false);

  const wordClassnames = {
    'border-primary': isActive,
  };

  return (
    <div
      className={cn(
        'shining hover:shining-active flex items-center justify-center rounded-lg border-2 border-transparent bg-background px-5 py-2.5 text-2xl font-semibold text-white',
        wordClassnames
      )}>
      <p className='my-0'>Word</p>
    </div>
  );
};

export default Word;
