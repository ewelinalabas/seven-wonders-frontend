import { compile, PathFunction } from 'path-to-regexp';
import { stringify as stringifyQuery } from 'query-string';

export type CompilePathParams = {
  [key: string]: string | number | string[] | number[];
};
export type CompilePathQuery = {
  [key: string]: any;
};
type CompilePathCache = {
  [key: string]: PathFunction;
};

const compilePathCache: CompilePathCache = {};

export function compilePath(
  pattern: string,
  params?: CompilePathParams,
  query?: CompilePathQuery
): string {
  if (!compilePathCache[pattern]) {
    compilePathCache[pattern] = compile(pattern);
  }

  const compiledPath = compilePathCache[pattern](params);
  const compiledQuery = query ? stringifyQuery(query) : null;
  let decodedPath;
  let decodedQuery;

  try {
    decodedPath = decodeURI(compiledPath);
    decodedQuery = compiledQuery ? decodeURIComponent(compiledQuery) : null;
  } catch (e) {
    throw new URIError(
      `Pathname "${
        compiledQuery ? `${compiledPath}?${compiledQuery}` : compiledPath
      }" could not be decoded. ` + `This is likely caused by an invalid percent-encoding.`
    );
  }

  return decodedQuery ? `${decodedPath}?${decodedQuery}` : decodedPath;
}
