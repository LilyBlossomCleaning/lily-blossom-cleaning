import { ServiceDetails } from '@/app/@types/_types';
import { client } from './client';

export default async function getServiceDetails(): Promise<ServiceDetails[]> {
  const query = `*[_type == "serviceDetails"] {
    _id,
    name,
    image,
    description,
    }`;
  const services: ServiceDetails[] = await client.fetch(query);
  return services;
}
