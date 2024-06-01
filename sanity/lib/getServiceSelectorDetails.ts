import { Service } from '@/app/@types/_types';
import { client } from './client';

export default async function getServiceSelectorDetails(
  slug: string
): Promise<Service> {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    name,
    slug,
    image,
    summary,
    description,
    propertySizeSqFt,
    priceRange,
    completionTime,
  }`;

  const params = { slug };
  const service = await client.fetch(query, params);

  return service;
}
