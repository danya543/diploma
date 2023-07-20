import { useNavigate } from 'react-router-dom';

import { SignInForm } from '~/features/SignInForm/SignInForm';

import signInStyles from './SignIn.module.scss';

export const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <div className={signInStyles.container}>
      <h2>Sign In</h2>
      <SignInForm />
      <div>
        <span>Don’t have an account?</span>
        <a onClick={() => navigate('/sign/up')}> Sign Up</a>
      </div>
    </div>
  );
};
