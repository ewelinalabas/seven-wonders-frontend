import * as memoize from 'fast-memoize';
import { Validator } from 'redux-form';

export const required = memoize(
  (message: string): Validator => value =>
    value === undefined || value === null || value === '' ? message : undefined
);
