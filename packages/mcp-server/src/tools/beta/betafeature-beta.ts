// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'petstore-demo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'beta',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/store/inventory',
  operationId: 'getInventory',
};

export const tool: Tool = {
  name: 'betafeature_beta',
  description: 'Returns a map of status codes to quantities.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: PetstoreDemo, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.beta.betafeature());
};

export default { metadata, tool, handler };
