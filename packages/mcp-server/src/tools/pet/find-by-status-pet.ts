// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'find_by_status_pet',
  description: 'Multiple status values can be provided with comma separated strings.',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        description: 'Status values that need to be considered for filter',
        enum: ['available', 'pending', 'sold'],
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const { ...body } = args;
  return client.pet.findByStatus(body);
};

export default { metadata, tool, handler };
