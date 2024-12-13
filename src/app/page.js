'use client';

import dynamic from 'next/dynamic';

const Farcastlevote = dynamic(() => import('../components/Farcastlevote'), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col p-4">
      <Farcastlevote />
    </main>
  );
}
