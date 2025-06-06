// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'petstore-demo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/user/{username}',
  operationId: 'deleteUser',
};

export const tool: Tool = {
  name: 'delete_user',
  description: 'This can only be done by the logged in user.',
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: PetstoreDemo, args: Record<string, unknown> | undefined) => {
  const { username, ...body } = args as any;
  await client.user.delete(username);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
