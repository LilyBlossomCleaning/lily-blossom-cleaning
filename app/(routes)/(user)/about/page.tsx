import appConfig from '../../../../app-config.json';
import { Metadata } from 'next';
import CompanyStory from '@/app/_components/AboutPage/CompanyStory';
import CoreValues from '@/app/_components/AboutPage/CoreValues';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'About Us | ' + appConfig.organizationData.name,
  description: `About us.
  Discover ${appConfig.organizationData.name}'s journey to redefining cleaning services with a personal touch.
  Learn about our founder's passion, our mission for unparalleled cleanliness, and our dedication to eco-friendly practices.
  Join us in our commitment to creating serene, spotlessly clean spaces.`,
  keywords: appConfig.seoKeywords,
};

export default function page() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        <main
          className="hero min-h-screen relative"
          style={{
            backgroundImage: 'url(/images/about-us-main.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center pt-20 pb-32">
            <div className="max-w-md">
              <h1 className="font-allura mb-5 text-7xl lg:text-8xl">
                <span className="text-6xl">About</span>
                <br />
                {appConfig.organizationData.name}
              </h1>
              <p className="mb-5 prose lg:prose-xl text-sm italic">
                &quot{appConfig.organizationData.slogan}&quot
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white"></div>
        </main>
        <section className="relative w-full bg-white py-20">
          <CompanyStory />
        </section>
        <section className="relative w-full bg-neutral py-20">
          <CoreValues />
        </section>
        <section className="relative w-full bg-accent py-20">
          <div className="prose xl:prose-xl mx-auto w-fit p-8">
            <h3 className="text-2xl !mb-12">Want more information?</h3>
            <p>
              Contact us today and we will be happy to get back to you and
              answer any questions you have.
            </p>
            <Link href={'/contact'}>
              <button className="btn btn-secondary">
                Contact Us
                <span className="text-2xl">
                  <MdArrowRightAlt />
                </span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
