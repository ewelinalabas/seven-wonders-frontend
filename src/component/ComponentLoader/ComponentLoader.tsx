import * as React from 'react';
import { SFC } from 'react';
import { LoadingComponentProps } from 'react-loadable';
import { LoaderWrapper } from 'component/ComponentLoader/ComponentLoader.s';

export namespace ComponentLoader {
  export type Props = LoadingComponentProps & {};
}

export const ComponentLoader: SFC<ComponentLoader.Props> = props => {
  if (props.error) {
    return <LoaderWrapper>Error!</LoaderWrapper>;
  } else if (props.timedOut) {
    return <LoaderWrapper>Taking a long time...</LoaderWrapper>;
  } else if (props.pastDelay) {
    return <LoaderWrapper>Loading...</LoaderWrapper>;
  } else {
    return null;
  }
};
