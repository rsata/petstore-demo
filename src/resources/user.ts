// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class UserResource extends APIResource {
  /**
   * This can only be done by the logged in user.
   */
  create(body: UserCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/user', { body, ...options });
  }

  /**
   * Get user detail based on username.
   */
  retrieve(username: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/user/${username}`, options);
  }

  /**
   * This can only be done by the logged in user.
   */
  delete(username: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/user/${username}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates list of users with given input array.
   */
  createWithList(
    params: UserCreateWithListParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<User> {
    const { body } = params ?? {};
    return this._client.post('/user/createWithList', { body: body, ...options });
  }

  /**
   * Log into the system.
   */
  login(query: UserLoginParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/user/login', { query, ...options });
  }

  /**
   * Log user out of the system.
   */
  logout(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/user/logout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This can only be done by the logged in user.
   */
  updateUser(
    pathUsername: string,
    body: UserUpdateUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/user/${pathUsername}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface User {
  id?: number;

  email?: string;

  firstName?: string;

  lastName?: string;

  password?: string;

  phone?: string;

  username?: string;

  /**
   * User Status
   */
  userStatus?: number;
}

export type UserLoginResponse = string;

export interface UserCreateParams {
  id?: number;

  email?: string;

  firstName?: string;

  lastName?: string;

  password?: string;

  phone?: string;

  username?: string;

  /**
   * User Status
   */
  userStatus?: number;
}

export interface UserCreateWithListParams {
  body?: Array<User>;
}

export interface UserLoginParams {
  /**
   * The password for login in clear text
   */
  password?: string;

  /**
   * The user name for login
   */
  username?: string;
}

export interface UserUpdateUserParams {
  id?: number;

  email?: string;

  firstName?: string;

  lastName?: string;

  password?: string;

  phone?: string;

  body_username?: string;

  /**
   * User Status
   */
  userStatus?: number;
}

export declare namespace UserResource {
  export {
    type User as User,
    type UserLoginResponse as UserLoginResponse,
    type UserCreateParams as UserCreateParams,
    type UserCreateWithListParams as UserCreateWithListParams,
    type UserLoginParams as UserLoginParams,
    type UserUpdateUserParams as UserUpdateUserParams,
  };
}
