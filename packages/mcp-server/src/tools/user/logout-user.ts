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
  name: 'logout_user',
  description: 'Log user out of the system.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const {} = args;
  return client.user.logout();
};

export default { metadata, tool, handler };
