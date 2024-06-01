import appConfig from '../../../../app-config.json';
import { Metadata } from 'next';
import getServiceDetails from '@/sanity/lib/getServiceDetails';
import Image from 'next/image';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import BlockContent from '@sanity/block-content-to-react';

const services = await getServiceDetails();

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
        <section className="relative grid gap-12 w-full bg-white py-20">
          {/* <div className="mx-auto max-w-4xl grid justify-items-center gap-8">
            <ServiceSelector services={services} />
          </div> */}
          <div className="prose xl:prose-xl mx-auto pt-16 pb-28 px-8">
            <h3>Included in Our Services</h3>
            <p>
              We offer a range of professional cleaning services tailored to
              meet your specific needs. From kitchens to living rooms, and every
              space in between, our dedicated team ensures your home is spotless
              and welcoming. Included in our services:
            </p>
          </div>
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 mx-auto justify-center w-full max-w-5xl">
            {services.map((service) => (
              <div
                key={service.name.replaceAll(' ', '')}
                className="grid grid-rows-[300px_1fr]"
              >
                <div className="relative">
                  <Image
                    src={`${sanityUrlFor(service.image).url()}`}
                    alt={service.name}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: '100%', height: '100%' }}
                    className="lg:shadow-xl lg:rounded-md"
                  />
                  <h2 className="absolute bottom-0 left-0 right-0 bg-gl glass px-4 py-2 card-title">
                    {service.name}
                  </h2>
                </div>
                <div className="card-body">
                  <div className="prose xl:prose-xl">
                    <BlockContent blocks={service.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
