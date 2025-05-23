// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_pet',
  description: 'Update an existing pet by Id.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      photoUrls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      id: {
        type: 'integer',
      },
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
        },
        required: [],
      },
      status: {
        type: 'string',
        description: 'pet status in the store',
        enum: ['available', 'pending', 'sold'],
      },
      tags: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const { ...body } = args;
  return client.pet.update(body);
};

export default { metadata, tool, handler };
