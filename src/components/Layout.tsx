import Head from 'next/head';

import type { FC } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
