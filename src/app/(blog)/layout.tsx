import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../assets/Yekan.woff2' })


import type { FC, PropsWithChildren } from "react";


export const metadata = {
  title: "ظروف نانو گرانیت ایزی کوک",
  description: "ظروف آشپزخانه ایزی کوک، ترکیب زیبایی و کارآیی، تهیه شده با پوشش های نچسب نسل جدید، برای حفظ سلامت و صرفه جویی در هزینه شما ",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
