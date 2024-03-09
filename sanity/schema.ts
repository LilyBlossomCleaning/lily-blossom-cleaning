import { type SchemaTypeDefinition } from 'sanity';

import service from './schemas/service';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service],
};
