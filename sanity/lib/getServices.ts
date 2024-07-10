import { ServiceDetails } from '@/app/@types/_types';
import { client } from './client';

export const revalidate = 60;
export default async function getServices(): Promise<ServiceDetails[]> {
  const query = `*[_type == "services"] {
    _id,
    "slug": slug.current,
    name,
    image,
    description,
    }`;

  const services: ServiceDetails[] = await client.fetch(query, {
    next: { revalidate },
  });
  return services;
}
