import * as memoize from 'fast-memoize';
import { Validator } from 'redux-form';

export const equalTo = memoize(
  (field: string, message: string): Validator => (value, allValues) =>
    value !== allValues[field] ? message : undefined,
  (field: string, message: string) => JSON.stringify({ field, message })
);
