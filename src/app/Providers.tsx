'use client';

import { RecoilRoot } from 'recoil';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
