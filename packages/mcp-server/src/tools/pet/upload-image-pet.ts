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
  name: 'upload_image_pet',
  description: 'Upload image of the pet.',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      additionalMetadata: {
        type: 'string',
        description: 'Additional Metadata',
      },
      body: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: PetstoreDemo, args: any) => {
  const { petId, ...body } = args;
  return client.pet.uploadImage(petId, body);
};

export default { metadata, tool, handler };
