import '../../globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import appConfig from '../../../app-config.json';
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: appConfig.companyName,
  description: appConfig.companyDescription,
  keywords: appConfig.seoKeywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        `${merriweather.variable} font-sans ` +
        'bg-gradient-to-b from-base-100 to-neutral'
      }
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
