// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_user',
  description: 'This can only be done by the logged in user.',
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
      id: {
        type: 'integer',
      },
      email: {
        type: 'string',
      },
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      userStatus: {
        type: 'integer',
        description: 'User Status',
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: Record<string, unknown> | undefined) => {
  const { username, ...body } = args as any;
  return client.user.update(username, body);
};

export default { metadata, tool, handler };
