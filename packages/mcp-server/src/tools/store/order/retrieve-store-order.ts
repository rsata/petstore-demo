// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_store_order',
  description:
    'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const { orderId } = args;
  return client.store.order.retrieve(orderId);
};

export default { metadata, tool, handler };
