import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../assets/Yekan.woff2' })


import type { FC, PropsWithChildren } from "react";


export const metadata = {
  title: "Next.js Static CMS Blog",
  description: "Next.js blog template for Static CMS on Netlify",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
