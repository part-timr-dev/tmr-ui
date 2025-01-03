import type { Meta, StoryObj } from '@storybook/react';
import validator from 'validator';
import TmrForm, { TmrFormProps, TmrFormValues } from '../_components/TmrForm';

const meta: Meta<typeof TmrForm> = {
  title: 'Example/TmrForm',
  component: TmrForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TmrForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
  args: {
    heading: 'Login',
    submitButtonLabel: 'Enter',
    inputs: [
      {
        label: 'Username',
        placeholder: 'Enter your username',
        errorOnEmpty: 'Username is required',
        validateError: (value: string) =>
          value.length >= 3 || 'Username must be at least 3 characters long',
      },
      {
        label: 'Password',
        placeholder: 'Enter your password',
        errorOnEmpty: 'Password is required',
        validateError: (value: string) =>
          (value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[^A-Za-z0-9]/.test(value)) ||
          'Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character',
      },
    ],
  } as TmrFormProps,
};

export const SignUpForm: Story = {
  args: {
    heading: 'Sign Up',
    submitButtonLabel: '',
    inputs: [
      {
        label: 'Username',
        errorOnEmpty: 'Username is required',
        validateError: (value: string) =>
          value.length >= 3 || 'Username must be at least 3 characters long',
      },
      {
        label: 'Email',
        errorOnEmpty: 'Email is required',
        validateError: (value: string) =>
          validator.isEmail(value) || 'Email is not valid',
      },
      {
        label: 'Password',
        placeholder: 'Enter your password',
        errorOnEmpty: 'Password is required',
        validateError: (value: string) =>
          (value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[^A-Za-z0-9]/.test(value)) ||
          'Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character',
      },
      {
        label: 'Confirm Password',
        placeholder: 'Confirm your password',
        errorOnEmpty: 'Confirm Password is required',
        validateError: (value: string, formValues: TmrFormValues) =>
          value === formValues.password || 'Passwords do not match',
      },
    ],
  } as TmrFormProps,
};

export const ContactForm: Story = {
  args: {
    heading: 'Contact me',
    inputs: [
      {
        label: 'Name',
        errorOnEmpty: 'Name is required',
        validateError: (value: string) =>
          value.length >= 10 || 'Name must be at least 10 characters long',
      },
      {
        label: 'Email',
        placeholder: 'Your email',
        errorOnEmpty: 'Missing email',
        validateError: (value: string) => {
          console.log('validator.isEmail(value)', validator.isEmail(value));
          return (
            validator.isEmail(value) || 'We cannot find that email address'
          );
        },
        helperText: 'We will never ever share your email with anyone else',
      },
    ],
  } as TmrFormProps,
};
