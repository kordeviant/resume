import Head from "next/head";
import Navigation from "./Navigation";
import NavBar from "@/port-comps/Navbar";
import ScrollToTop from "@/port-comps/ScrollToTop";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <div className="App" id={"scroll"}>
        <NavBar />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
