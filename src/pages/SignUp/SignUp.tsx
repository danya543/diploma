import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { type CreateUserResponse } from '~/api/createUser';
import { SignUpForm } from '~/features/SignUpForm/SignUpForm';
import { Button } from '~/shared/ui/Button/Button';

import signUpStyles from './SignUp.module.scss';

export const SignUpPage = () => {
  const [createdUser, setCreatedUser] = useState<CreateUserResponse | null>(
    null
  );
  const navigate = useNavigate();

  return (
    <div className={signUpStyles.container}>
      {createdUser ? (
        <>
          <h2>Registration Confirmation</h2>
          <p>{`Please activate your account with the activation
link in the email. Please, check your email`}</p>
          <Button
            text={'Home'}
            onClick={() => navigate('/')}
          />
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <SignUpForm onCreateUser={(newUser) => setCreatedUser(newUser)} />
          <div>
            <span>Already have an account?</span>
            <a href="/sign/in"> Sign In</a>
          </div>
        </>
      )}
    </div>
  );
};
