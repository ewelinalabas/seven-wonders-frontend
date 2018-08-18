import * as memoize from 'fast-memoize';
import { Validator } from 'redux-form';

const urlPattern = new RegExp(
  '^([a-z]+:\\/\\/)' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', // fragment locator
  'i'
);
export const url = memoize(
  (message: string): Validator => value => (value && !urlPattern.test(value) ? message : undefined)
);
