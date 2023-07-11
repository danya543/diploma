import { useState } from 'react';

//import { useUserContext } from '~/contexts/UserContext/userContext';
import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';

import formStyles from './SignInForm.module.scss';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const { login, user } = useUserContext();

  return (
    <form
      className={formStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        //login({ email, password }).catch((error) => console.error(error));
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
      ></Button>
    </form>
  );
};
