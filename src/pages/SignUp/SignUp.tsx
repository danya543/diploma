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
          <h2>You are registered</h2>
          <p>{`Now you can use our service`}</p>
          <Button
            text={'Sign In'}
            onClick={() => navigate('/sign/in')}
          />
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <SignUpForm onCreateUser={(newUser) => setCreatedUser(newUser)} />
          <div>
            <span>Already have an account?</span>
            <a onClick={() => navigate('/sign/in')}> Sign In</a>
          </div>
        </>
      )}
    </div>
  );
};
