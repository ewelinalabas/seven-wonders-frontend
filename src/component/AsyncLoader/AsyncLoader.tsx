import * as React from 'react';
import { ComponentClass, ReactElement, SFC } from 'react';
import { connect } from 'react-redux';
import { selectAsyncStatus } from 'selector/asyncSelector';
import { AsyncStatus } from 'store/AsyncState';

export namespace AsyncLoader {
  export type StateProps = {
    status: AsyncStatus;
  };
  export type OwnProps = {
    name: string;
    void?: () => ReactElement<any> | null;
    pending?: () => ReactElement<any> | null;
    resolved?: () => ReactElement<any> | null;
    rejected?: () => ReactElement<any> | null;
  };
  export type Props = StateProps & OwnProps;
}

export const AsyncLoaderPure: SFC<AsyncLoader.Props> = props => {
  switch (props.status) {
    case AsyncStatus.VOID:
      return props.void ? props.void() : null;
    case AsyncStatus.PENDING:
      return props.pending ? props.pending() : null;
    case AsyncStatus.RESOLVED:
      return props.resolved ? props.resolved() : null;
    case AsyncStatus.REJECTED:
      return props.rejected ? props.rejected() : null;
  }
};

export const AsyncLoader: ComponentClass<AsyncLoader.OwnProps> = connect(
  (state, ownProps: AsyncLoader.OwnProps): AsyncLoader.StateProps => ({
    status: selectAsyncStatus(ownProps.name)(state)
  })
)(AsyncLoaderPure) as ComponentClass<AsyncLoader.OwnProps>;
