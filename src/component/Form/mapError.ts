import { WrappedFieldMetaProps } from 'redux-form';

export const mapError = (meta: WrappedFieldMetaProps, errorProp = 'errorText') =>
  meta && meta.touched && (meta.error || meta.warning)
    ? { [errorProp]: meta.error || meta.warning }
    : {};
