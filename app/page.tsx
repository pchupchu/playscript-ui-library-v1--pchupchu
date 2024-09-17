'use client';

import { Button } from '@/components/ui/button';
import WordInSentence from '@/components/word-in-sentence';
import WordInSentenceAnimated from '@/components/word-in-sentence-animated';

import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className='flex h-screen flex-col items-center justify-center gap-10 bg-background'>
      <WordInSentence variant={isActive ? 'active' : 'default'}>
        Just
      </WordInSentence>

      <WordInSentenceAnimated condition={isActive} variant='default'>
        Just
      </WordInSentenceAnimated>

      <Button onClick={() => setIsActive(!isActive)}>Click</Button>
    </main>
  );
}
