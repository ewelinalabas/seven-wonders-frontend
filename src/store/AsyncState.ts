export enum AsyncStatus {
  VOID = 'VOID',
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED'
}

export type AsyncStatusMap = {
  [type: string]: AsyncStatus;
};

export type AsyncState = {
  async: AsyncStatusMap;
};

export type AsyncAwareState = AsyncState & {
  [key: string]: any;
};
