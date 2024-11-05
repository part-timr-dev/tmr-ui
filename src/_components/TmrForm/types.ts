export type InputItemType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'date'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'url'
  | 'tel';

export type InputItem = {
  label: string;
  type?: InputItemType;
  placeholder: string;
  errorOnEmpty: string;
  validateError: (value: string) => string | boolean;
};
