// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'stores.order',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_stores_order',
  description: 'Place a new order in the store.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      complete: {
        type: 'boolean',
      },
      petId: {
        type: 'integer',
      },
      quantity: {
        type: 'integer',
      },
      shipDate: {
        type: 'string',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Order Status',
        enum: ['placed', 'approved', 'delivered'],
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const { ...body } = args;
  return client.stores.order.create(body);
};

export default { metadata, tool, handler };
