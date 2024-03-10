import appConfig from '../../../../app-config.json';
import { Metadata } from 'next';
import getServices from '@/sanity/lib/getServices';
import ServiceSelector from '@/app/_components/ServicesPage/ServiceSelector';

const services = await getServices();

export const metadata: Metadata = {
  title: 'Services | ' + appConfig.organizationData.name,
  description: `Services.
  Explore our wide range of cleaning services tailored for every home size, from cozy apartments to grand estates.
  ${appConfig.organizationData.name} offers meticulous, eco-friendly solutions for a spotless, fresh living space.
  Discover the perfect cleaning package for your needs today.`,
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
                &quot;{appConfig.organizationData.slogan}&quot;
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white"></div>
        </main>
        <section className="relative w-full bg-white py-20">
          <div className="mx-auto max-w-4xl grid justify-items-center gap-8">
            <ServiceSelector services={services} />
          </div>
        </section>
      </div>
    </>
  );
}
