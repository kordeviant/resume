import Head from "next/head";
import Navigation from "./Navigation";
import NavBar from "@/port-comps/Navbar";
import type { FC } from "react";
import Footer from "@/port-comps/Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
