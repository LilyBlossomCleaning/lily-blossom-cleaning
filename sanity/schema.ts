import { type SchemaTypeDefinition } from 'sanity';

import services from './schemas/services';
import serviceDetails from './schemas/serviceDetails';
import servicePackage from './schemas/servicePackage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicePackage, services, serviceDetails],
};
