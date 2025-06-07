// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'petstore-demo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import PetstoreDemo from 'petstore-demo';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/pet/{petId}',
  operationId: 'updatePetWithForm',
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

export const handler = async (client: PetstoreDemo, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  return asTextContentResult(await client.pets.updateWithForm(petId, body));
};

export default { metadata, tool, handler };
