import { AsyncLoader } from 'component/AsyncLoader/AsyncLoader';
import { LoaderWrapper } from 'component/DefaultLoader/DefaultLoader.s';
import * as React from 'react';
import { ReactElement, SFC } from 'react';

export namespace DefaultLoader {
  export type Props = {
    name: string;
    resolved?: () => ReactElement<any> | null;
    rejected?: () => ReactElement<any> | null;
  };
}

export const DefaultLoader: SFC<DefaultLoader.Props> = props => (
  <AsyncLoader
    name={props.name}
    void={() => <LoaderWrapper>Loading...</LoaderWrapper>}
    pending={() => <LoaderWrapper>Loading...</LoaderWrapper>}
    resolved={props.resolved}
    rejected={props.rejected}
  />
);
