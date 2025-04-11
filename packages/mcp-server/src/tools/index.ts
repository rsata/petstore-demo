// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PetstoreDemo from 'petstore-demo';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_pet from './pet/create-pet';
import retrieve_pet from './pet/retrieve-pet';
import update_pet from './pet/update-pet';
import delete_pet from './pet/delete-pet';
import find_by_status_pet from './pet/find-by-status-pet';
import find_by_tags_pet from './pet/find-by-tags-pet';
import update_with_form_pet from './pet/update-with-form-pet';
import upload_pet from './pet/upload-pet';
import list_inventory_store from './store/list-inventory-store';
import create_store_order from './store/order/create-store-order';
import retrieve_store_order from './store/order/retrieve-store-order';
import delete_store_order from './store/order/delete-store-order';
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

addEndpoint(create_pet);
addEndpoint(retrieve_pet);
addEndpoint(update_pet);
addEndpoint(delete_pet);
addEndpoint(find_by_status_pet);
addEndpoint(find_by_tags_pet);
addEndpoint(update_with_form_pet);
addEndpoint(upload_pet);
addEndpoint(list_inventory_store);
addEndpoint(create_store_order);
addEndpoint(retrieve_store_order);
addEndpoint(delete_store_order);
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
