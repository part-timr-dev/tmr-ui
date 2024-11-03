import type { Meta, StoryObj } from '@storybook/react';
import LoginForm, { LoginFormProps } from '../_components/LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Example/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Login',
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
  } as LoginFormProps,
};

export const CustomValidation: Story = {
  args: {
    heading: 'Custom Login',
    inputs: [
      {
        label: 'Email',
        placeholder: 'Enter your email',
        errorOnEmpty: 'Email is required',
        validateError: (value: string) =>
          /\S+@\S+\.\S+/.test(value) || 'Email is not valid',
      },
      {
        label: 'Password',
        placeholder: 'Enter your password',
        errorOnEmpty: 'Password is required',
        validateError: (value: string) =>
          value.length >= 10 || 'Password must be at least 10 characters long',
      },
    ],
  } as LoginFormProps,
};
