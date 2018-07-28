import { WrappedFieldProps } from 'redux-form';

export const mapFieldProps = (
  { meta, input, ...props }: WrappedFieldProps,
  errorProp = 'errorText'
) =>
  meta && meta.touched && (meta.error || meta.warning)
    ? {
        ...props,
        ...input,
        [errorProp]: meta.error || meta.warning
      }
    : { ...input, ...props };
