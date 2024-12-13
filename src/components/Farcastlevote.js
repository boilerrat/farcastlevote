'use client';

import { useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';

export default function Farcastlevote() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const openUrl = (url) => {
    // For local testing, you could comment out the sdk call and use window.open:
    // window.open(url, '_blank');
    sdk.actions.openUrl(url);
  };

  return (
    <div className="max-w-sm mx-auto py-8 px-4 flex flex-col items-center">
      <img
        src="https://i.imgur.com/m2V8Oks.png"
        alt="Vote Farcastle!"
        className="mb-6 w-full h-auto"
      />

      <div className="flex flex-col gap-3 w-full">
        <button
          className="border rounded p-3 bg-gray-100 text-center text-lg font-semibold"
          onClick={() =>
            openUrl('https://discuss.octant.app/t/farcastle-integrating-governance-with-warpcast-channels/590')
          }
        >
          Read Prop
        </button>
        <button
          className="border rounded p-3 bg-gray-100 text-center text-lg font-semibold"
          onClick={() => openUrl('https://octant.app/home')}
        >
          Octant App
        </button>
        <button
          className="border rounded p-3 bg-gray-100 text-center text-lg font-semibold"
          onClick={() =>
            openUrl('https://snapshot.box/#/s:octantapp.eth/proposal/0x548e14bc851988e367ef7874b013209d1e1ec0d01021814c1faedd5f0964cd80/votes')
          }
        >
          Vote
        </button>
        <button
          className="border rounded p-3 bg-gray-100 text-center text-lg font-semibold"
          onClick={() =>
            openUrl('https://flowstate.network/projects/0x89d98c811ab398fb2395b9d0414d721dc042477655eaab21761870f61c7c3415?chainId=8453')
          }
        >
          Donate
        </button>
      </div>
    </div>
  );
}
