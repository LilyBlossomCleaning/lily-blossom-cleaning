import appConfig from '../../../app-config.json';
import HomeHero from '@/app/_components/HomePage/HomeHero';
import HomeIntro from '@/app/_components/HomePage/HomeIntro';
import getLocationsString from '@/app/_lib/serviceLocationsString';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: appConfig.organizationData.name,
  description: `Welcome to ${appConfig.organizationData.name}! 
  Learn about how we will transform your home into a beautiful oasis. 
  Proudly serving ${getLocationsString(
    appConfig.organizationData.serviceLocations.cities
  )} ${appConfig.organizationData.serviceLocations.state}`,
  keywords: appConfig.seoKeywords,
};

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-between">
        <HomeHero />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white"></div>
      </main>
      <HomeIntro />
    </>
  );
}
