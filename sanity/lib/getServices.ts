import { Service } from '@/app/_types';
import { client } from './client';

function compareNumbers(a: Service, b: Service) {
  return a.propertySizeSqFt - b.propertySizeSqFt;
}

export default async function getServices(): Promise<Service[]> {
  const query = `*[_type == "service"] {
    _id,
    name,
    slug,
    image,
    description,
    propertySizeSqFt,
    priceRange,
    completionTime,
    }`;
  const services: Service[] = await client.fetch(query);
  services.sort(compareNumbers);
  return services;
}
