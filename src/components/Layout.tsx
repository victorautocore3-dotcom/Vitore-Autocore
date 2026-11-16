import type {ReactNode} from 'react';
import {MotionConfig} from 'motion/react';
import {Header} from './Header';
import {ServiceMarquee} from './ServiceMarquee';
import {Footer} from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#141413] text-[#F4F3EE]">
        <Header />
        <main className="flex-1">{children}</main>
        <ServiceMarquee />
        <Footer />
      </div>
    </MotionConfig>
  );
}
