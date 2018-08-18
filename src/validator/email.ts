import * as memoize from 'fast-memoize';
import { Validator } from 'redux-form';

/**
 * Matches 99.99% of emails by RFC 5322
 */
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const email = memoize(
  (message: string): Validator => value =>
    value && !emailPattern.test(value) ? message : undefined
);
