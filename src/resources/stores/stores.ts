// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrderAPI from './order';
import { Order, OrderCreateParams, OrderResource } from './order';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Stores extends APIResource {
  order: OrderAPI.OrderResource = new OrderAPI.OrderResource(this._client);

  /**
   * Returns a map of status codes to quantities.
   *
   * @example
   * ```ts
   * const response = await client.stores.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<StoreListInventoryResponse> {
    return this._client.get('/store/inventory', options);
  }
}

export type StoreListInventoryResponse = Record<string, number>;

Stores.OrderResource = OrderResource;

export declare namespace Stores {
  export { type StoreListInventoryResponse as StoreListInventoryResponse };

  export { OrderResource as OrderResource, type Order as Order, type OrderCreateParams as OrderCreateParams };
}
