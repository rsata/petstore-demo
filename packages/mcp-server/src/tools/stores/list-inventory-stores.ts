// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_inventory_stores',
  description: 'Returns a map of status codes to quantities.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const {} = args;
  return client.stores.listInventory();
};

export default { metadata, tool, handler };
