import { SignInForm } from '~/features/SignInForm/SignInForm';

import signInStyles from './SignIn.module.scss';

export const SignInPage = () => {
  return (
    <div className={signInStyles.container}>
      <h2>Sign In</h2>
      <SignInForm />
      <div>
        <span>Don’t have an account?</span>
        <a href="/sign/up"> Sign Up</a>
      </div>
    </div>
  );
};
