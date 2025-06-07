// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Beta extends APIResource {
  /**
   * Returns a map of status codes to quantities.
   */
  betafeature(options?: RequestOptions): APIPromise<BetaBetafeatureResponse> {
    return this._client.get('/store/inventory', options);
  }
}

export type BetaBetafeatureResponse = Record<string, number>;

export declare namespace Beta {
  export { type BetaBetafeatureResponse as BetaBetafeatureResponse };
}
