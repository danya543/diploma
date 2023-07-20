import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';
import { useAppDispatch } from '~/store/store.types';

import formStyles from './SignInForm.module.scss';
import { createTokens } from '../states/userSlice/user.api';

export const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const tokenName = 'iphone';
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <form
      className={formStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(createTokens({ email, password, token_name: tokenName }))
          .then(() => {
            setIsLoading(true);
            navigate('/');
          })
          .catch(() => setIsLoading(false));
      }}
    >
      <InputField
        label="Email"
        type="email"
        placeholder="Your email"
        id="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        shouldFitContainer
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Your password"
        id="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        shouldFitContainer
      />
      <Button
        text={'Sign in'}
        type="submit"
        disabled={isLoading || email.length === 0 || password.length === 0}
      />
    </form>
  );
};
