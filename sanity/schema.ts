import { type SchemaTypeDefinition } from 'sanity';

import service from './schemas/service';
import serviceDetails from './schemas/serviceDetails';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, serviceDetails],
};
