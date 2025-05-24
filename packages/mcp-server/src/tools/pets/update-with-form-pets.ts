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
  name: 'update_with_form_pets',
  description: 'Updates a pet resource based on the form data.',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      name: {
        type: 'string',
        description: 'Name of pet that needs to be updated',
      },
      status: {
        type: 'string',
        description: 'Status of pet that needs to be updated',
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  return client.pets.updateWithForm(petId, body);
};

export default { metadata, tool, handler };
