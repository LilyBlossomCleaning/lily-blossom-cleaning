import Footer from '@/components/Footer';
import '../../globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import appConfig from '../../../app-config.json';
import { Merriweather, Allura } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
});

export const metadata: Metadata = {
  title: appConfig.organizationData.name,
  description: appConfig.organizationData.description,
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
        `${merriweather.variable} ${allura.variable} font-sans ` +
        'bg-gradient-to-b from-base-100 to-neutral'
      }
    >
      <body>
        <Navbar>{children}</Navbar>
        <Footer organization={appConfig.organizationData} />
      </body>
    </html>
  );
}
