import { Detector } from 'redux-detector';

/**
 * Higher order detector that checks if state has been changed
 */
export function changed<T = any>(detector: Detector<T>): Detector<T> {
  return (prevState, nextState) => {
    if (prevState !== nextState) {
      return detector(prevState, nextState);
    }
  };
}

/**
 * Higher order detector that checks if state has been changed to non falsy value
 */
export function changedPositive<T = any>(detector: Detector<T>): Detector<T> {
  return (prevState, nextState) => {
    if (prevState !== nextState && nextState) {
      return detector(prevState, nextState);
    }
  };
}

/**
 * Higher order detector that checks if state has been changed to falsy value
 */
export function changedNegative<T = any>(detector: Detector<T>): Detector<T> {
  return (prevState, nextState) => {
    if (prevState !== nextState && !nextState) {
      return detector(prevState, nextState);
    }
  };
}
