import appConfig from '../../../../../app-config.json';
import getServiceDetails from '@/sanity/lib/getServiceDetails';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import BlockContent from '@sanity/block-content-to-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdArrowRightAlt } from 'react-icons/md';

async function getService(id: string) {
  const serviceDetails = await getServiceDetails(id);
  return serviceDetails;
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getService(params.slug);

  return {
    title: `${data?.name ?? 'Service not found'} | ${
      appConfig.organizationData.name
    }`,
    description: !!data
      ? `${data.name} service details from ${appConfig.organizationData.name}.`
      : 'Service not found.',
  };
}

export default async function Page({ params }: Props) {
  const data = await getService(params?.slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        <div className="overflow-auto text-xs md:text-sm breadcrumbs absolute top-16 left-4 z-10">
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
            <li>{data.name}</li>
          </ul>
        </div>
        <main
          className="hero min-h-screen relative"
          style={{
            backgroundImage: `url(${sanityUrlFor(data.image).url()})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center pt-20 pb-32">
            <div className="max-w-md">
              <h1 className="font-allura mb-5 text-7xl lg:text-8xl">
                {data.name}
              </h1>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white"></div>
        </main>
        <section className="relative grid gap-12 w-full bg-white py-20">
          <div className="stats-vertical md:stats-horizontal stats shadow bg-primary w-full max-w-5xl mx-auto rounded-none lg:rounded-full">
            <div className="stat place-items-center">
              <div className="stat-title">Up to</div>
              <div className="stat-value">{data.propertySizeSqFt} sq.ft.</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Price Range</div>
              <div className="stat-value">{data.priceRange}</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Duration</div>
              <div className="stat-value">{data.completionTime}</div>
            </div>
          </div>
          <div className="prose xl:prose-xl mx-auto pt-16 pb-28 px-8">
            <h3 className="text-2xl underline decoration-wavy decoration-accent underline-offset-8 lg:underline-offset-[12px] !mb-12">
              Description
            </h3>
            <BlockContent blocks={data.description} />
          </div>
        </section>
        <section className="relative w-full bg-primary py-20">
          <div className="prose xl:prose-xl mx-auto w-fit p-8">
            <h3 className="text-2xl !mb-12 underline decoration-wavy decoration-accent underline-offset-8 lg:underline-offset-[12px]">
              Ready to get started?
            </h3>
            <p>
              Contact us today about <i>{data.name}</i> to discuss booking an
              appointment, or go over any other questions you may have.
            </p>
            <Link href={'/contact'}>
              <button className="btn btn-accent">
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
