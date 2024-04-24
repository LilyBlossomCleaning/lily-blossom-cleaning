import appConfig from '../../../../../app-config.json';
import getServiceDetails from '@/sanity/lib/getServiceDetails';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import BlockContent from '@sanity/block-content-to-react';
import { Metadata } from 'next';

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

export async function page({ params }: Props) {
  const data = await getService(params?.slug);

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
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
          <div className="stats-vertical md:stats-horizontal stats shadow bg-secondary w-full max-w-5xl mx-auto rounded-none lg:rounded-full">
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
      </div>
    </>
  );
}

export default page;
