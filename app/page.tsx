'use client';

import WordInSentence from '@/components/word-in-sentence';
import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className='flex h-screen flex-col items-center justify-center gap-10 bg-background'>
      <WordInSentence
        variant={isActive ? 'active' : 'default'}
        condition={isHovered}
        onClick={() => setIsActive(!isActive)}>
        Just
      </WordInSentence>
      <button onClick={() => setIsHovered(!isHovered)}>Click</button>
    </main>
  );
}
