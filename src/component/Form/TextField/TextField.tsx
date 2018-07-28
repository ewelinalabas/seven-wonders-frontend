import { TextFieldProps } from 'material-ui';
import MaterialTextField from 'material-ui/TextField';
import * as React from 'react';
import { SFC } from 'react';
import { BaseFieldProps, Field } from 'redux-form';
import { createComponent } from '../createComponent';
import { mapError } from '../mapError';

const TextFieldFormComponent = createComponent(
  MaterialTextField,
  ({ defaultValue, input, meta, ...props }) => ({
    ...input,
    ...props,
    ...mapError(meta)
  })
);

export const TextField: SFC<BaseFieldProps<TextFieldProps> & TextFieldProps> = props => (
  <Field {...{ ...props, component: TextFieldFormComponent } as any} />
);
