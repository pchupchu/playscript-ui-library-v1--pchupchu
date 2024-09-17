'use client';

import Shining from '@/components/shining';
import WordInSentence from '@/components/word-in-sentence';
import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className='flex h-screen flex-col items-center justify-center gap-10 bg-background'>
      <div>
        <WordInSentence
          variant={isActive ? 'active' : 'default'}
          onClick={() => setIsActive(!isActive)}>
          Just
        </WordInSentence>
      </div>
    </main>
  );
}
