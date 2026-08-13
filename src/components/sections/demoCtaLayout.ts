import type { CSSProperties } from 'react';

interface DemoCtaLayout {
  desktopMinHeight: `${number}vh`;
  mobileMinHeight: `${number}px`;
}

export const demoCtaLayout: DemoCtaLayout = {
  desktopMinHeight: '80vh',
  mobileMinHeight: '680px',
};

export const demoCtaMinHeightStyle: CSSProperties & {
  '--demo-desktop-min-height': DemoCtaLayout['desktopMinHeight'];
  '--demo-mobile-min-height': DemoCtaLayout['mobileMinHeight'];
} = {
  '--demo-desktop-min-height': demoCtaLayout.desktopMinHeight,
  '--demo-mobile-min-height': demoCtaLayout.mobileMinHeight,
};
