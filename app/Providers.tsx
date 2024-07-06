'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

import fetcher from './services/fetcher';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        // fetcher: fetcher,
        fetcher, // shorter syntax
        // refreshInterval: 3000, // Refresh every 3 seconds
        // revalidateOnFocus: false, // Don't refetch on focus
        // revalidateOnReconnect: false // Don't refetch on reconnection
        // revalidateIfStale: false, // Don't refetch on stale
      }}
    >
      {children}
    </SWRConfig>
  );
}
