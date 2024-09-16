import Word from '@/components/word';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex h-screen items-center justify-center bg-background'>
      <Word />
    </main>
  );
}
