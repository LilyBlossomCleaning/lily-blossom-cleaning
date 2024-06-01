import { Service } from '@/app/@types/_types';
import { client } from './client';

function compareNumbers(a: Service, b: Service) {
  return a.propertySizeSqFt - b.propertySizeSqFt;
}

export default async function getServicePackages(): Promise<Service[]> {
  const query = `*[_type == "service"] {
    _id,
    name,
    slug,
    image,
    summary,
    description,
    propertySizeSqFt,
    priceRange,
    completionTime,
    }`;
  const services: Service[] = await client.fetch(query);
  services.sort(compareNumbers);
  return services;
}
