//simport { type CreateUserResponse } from '~/api/createUser';
//import { SignUpForm } from '~/features/SignUpForm/SignUpForm';

//import { useState } from 'react';

//import { useNavigate } from 'react-router-dom';

//import { Button } from '~/shared/ui/Button/Button';

export const SignUpPage = () => {
  /*   const [createdUser, setCreatedUser] = useState<CreateUserResponse | null>(
    null
  ); */
  //const navigate = useNavigate();

  return (
    <div>
      {/* {createdUser ? (
        <>
          <h2>Registration Confirmation</h2>
          <p>{`Please activate your account with the activation
link in the email ${createdUser.email}. Please, check your email`}</p>
          <Button onClick={() => navigate('/')}>Home</Button>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <SignUpForm onCreateUser={(newUser) => setCreatedUser(newUser)} />
        </>
      )} */}
    </div>
  );
};
