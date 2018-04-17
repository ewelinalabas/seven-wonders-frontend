import { isActionPending, isActionRejected, isActionResolved } from 'action/asyncAction';

export function markAsyncAction(action: any): any {
  if (isActionPending(action)) {
    return { ...action, type: `${action.type} ⌛` };
  }
  if (isActionRejected(action)) {
    return { ...action, type: `${action.type} ✖` };
  }
  if (isActionResolved(action)) {
    return { ...action, type: `${action.type} ✔` };
  }

  return action;
}
