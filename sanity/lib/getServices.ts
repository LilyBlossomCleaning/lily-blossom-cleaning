import { ServiceDetails } from '@/app/@types/_types';
import { client } from './client';

export default async function getServices(): Promise<ServiceDetails[]> {
  const query = `*[_type == "services"] {
    _id,
    name,
    image,
    description,
    }`;
  const services: ServiceDetails[] = await client.fetch(query);
  return services;
}
