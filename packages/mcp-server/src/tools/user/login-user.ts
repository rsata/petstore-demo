// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'login_user',
  description: 'Log into the system.',
  inputSchema: {
    type: 'object',
    properties: {
      password: {
        type: 'string',
        description: 'The password for login in clear text',
      },
      username: {
        type: 'string',
        description: 'The user name for login',
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.user.login(body);
};

export default { metadata, tool, handler };
