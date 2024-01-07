import HomeHero from '@/app/_components/HomePage/HomeHero';
import HomeIntro from '@/app/_components/HomePage/HomeIntro';

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
