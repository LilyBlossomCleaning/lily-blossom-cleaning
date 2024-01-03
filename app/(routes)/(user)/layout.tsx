import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
import Navbar from '@/components/Navbar';
import appConfig from '../../../app-config.json';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" className="bg-gradient-to-b from-base-100 to-neutral">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
