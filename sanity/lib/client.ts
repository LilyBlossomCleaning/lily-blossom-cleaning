import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from '@sanity/client';

import { apiVersion, dataset, projectId } from '../env';

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  // set CDN to live API in development mode
  useCdn: process.env.NODE_ENV === 'development',
};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // disable cache in development
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}
