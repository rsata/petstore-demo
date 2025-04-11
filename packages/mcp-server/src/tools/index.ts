// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PetstoreDemo from 'petstore-demo';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_pets from './pets/create-pets';
import retrieve_pets from './pets/retrieve-pets';
import update_pets from './pets/update-pets';
import delete_pets from './pets/delete-pets';
import find_by_status_pets from './pets/find-by-status-pets';
import find_by_tags_pets from './pets/find-by-tags-pets';
import update_with_form_pets from './pets/update-with-form-pets';
import upload_pets from './pets/upload-pets';
import list_inventory_stores from './stores/list-inventory-stores';
import create_stores_order from './stores/order/create-stores-order';
import retrieve_stores_order from './stores/order/retrieve-stores-order';
import delete_stores_order from './stores/order/delete-stores-order';
import create_user from './user/create-user';
import retrieve_user from './user/retrieve-user';
import update_user from './user/update-user';
import delete_user from './user/delete-user';
import create_with_list_user from './user/create-with-list-user';
import login_user from './user/login-user';
import logout_user from './user/logout-user';

export type HandlerFunction = (client: PetstoreDemo, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_pets);
addEndpoint(retrieve_pets);
addEndpoint(update_pets);
addEndpoint(delete_pets);
addEndpoint(find_by_status_pets);
addEndpoint(find_by_tags_pets);
addEndpoint(update_with_form_pets);
addEndpoint(upload_pets);
addEndpoint(list_inventory_stores);
addEndpoint(create_stores_order);
addEndpoint(retrieve_stores_order);
addEndpoint(delete_stores_order);
addEndpoint(create_user);
addEndpoint(retrieve_user);
addEndpoint(update_user);
addEndpoint(delete_user);
addEndpoint(create_with_list_user);
addEndpoint(login_user);
addEndpoint(logout_user);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
