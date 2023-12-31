import { type FormField } from '~/features/SignUpForm/form.types';

export const formSchema: FormField[] = [
  {
    label: 'Name',
    placeholder: 'Enter name',
    name: 'username',
    required: true
  },
  {
    label: 'Email',
    placeholder: 'Enter email',
    name: 'email',
    type: 'email',
    required: true
  },
  {
    label: 'Password',
    placeholder: 'Enter password',
    name: 'password',
    type: 'password',
    required: true
  },
  {
    label: 'Confirm password',
    placeholder: 'Repeat password',
    name: 'password_confirmation',
    type: 'password',
    required: true
  }
];
