'use client';

import { Button } from '@/components/ui/button';
import WordInSentence from '@/components/word-in-sentence';

import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className='flex h-screen flex-col items-center justify-center gap-10 bg-white'>
      <WordInSentence variant='default'>Just</WordInSentence>

      <Button onClick={() => setIsHovered(!isHovered)}>Click</Button>
    </main>
  );
}
