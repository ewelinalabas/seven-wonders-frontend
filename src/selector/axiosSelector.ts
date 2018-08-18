import { AxiosError, AxiosResponse } from 'axios';
import { Selector } from 'reselect';

/**
 * Select response code, for example 201
 */
export const selectResponseStatusCode: Selector<
  AxiosResponse | undefined,
  number | undefined
> = response => response && response.status;

/**
 * Select response code group like 200, 300, 400 or 500
 */
export const selectResponseStatusCodeGroup = (response: AxiosResponse | undefined) => {
  const responseCode = selectResponseStatusCode(response);

  return responseCode ? Math.round(responseCode / 100) * 100 : undefined;
};

export const selectResponseData = (
  response: AxiosResponse | undefined,
  field?: string,
  notSetValue?: any
) => {
  const data = response && response.data;

  if (field) {
    return (data || {})[field] || notSetValue;
  } else {
    return data;
  }
};

export const selectIsAxiosError: Selector<any, boolean> = error =>
  error && error.response && error.response.status;

export const selectErrorResponse: Selector<
  AxiosError | undefined,
  AxiosResponse | undefined
> = error => error && error.response;

/**
 * Select error code, for example 403
 */
export const selectErrorStatusCode = (error: AxiosError | undefined) =>
  selectResponseStatusCode(selectErrorResponse(error));

/**
 *   Select error code group like 400 or 500
 */
export const selectErrorCodeGroup = (error: AxiosError | undefined) =>
  selectResponseStatusCodeGroup(selectErrorResponse(error));

export const selectErrorData = (error: AxiosError | undefined, field?: string, notSetValue?: any) =>
  selectResponseData(selectErrorResponse(error), field, notSetValue);

export const throwErrorData = (error: AxiosError, field?: string, notSetValue?: any): never => {
  throw selectErrorData(error, field, notSetValue);
};

/**
 * Select has response error code
 */
export const selectHasResponseErrorCode = (error: AxiosError | undefined) =>
  !!(selectErrorData(error) && selectErrorData(error).error && selectErrorData(error).error.code);

/**
 * Select response error code like RESPONDENT_PROTECTION
 */
export const selectResponseErrorCode = (error: AxiosError | undefined) =>
  selectErrorData(error).error.code;
