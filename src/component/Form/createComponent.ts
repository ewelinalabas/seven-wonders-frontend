import * as React from 'react';
import { ComponentClass, SFC } from 'react';

export function createComponent(Component: ComponentClass | SFC, mapProps: (props: any) => any) {
  const FormComponent: SFC = props =>
    React.createElement(Component as ComponentClass, mapProps(props));
  FormComponent.displayName = `Form(${Component.name})`;

  return FormComponent;
}
