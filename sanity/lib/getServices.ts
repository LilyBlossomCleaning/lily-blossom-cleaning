import { Service } from '@/app/_types';
import { client } from './client';

export default async function getStaffMembers(): Promise<Service[]> {
  const query = `*[_type == "service"] {
    _id,
    name,
    slug,
    image,
    description,
    propertySize,
    priceRange,
    completionTime,
    }`;
  const services = await client.fetch(query);
  return services;
}
