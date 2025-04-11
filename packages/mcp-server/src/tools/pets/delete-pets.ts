// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_pets',
  description: 'Delete a pet.',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const { petId } = args;
  return client.pets.delete(petId);
};

export default { metadata, tool, handler };
