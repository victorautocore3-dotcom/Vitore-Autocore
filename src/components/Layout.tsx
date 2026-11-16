import type {ReactNode} from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#141413] text-[#F4F3EE]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
