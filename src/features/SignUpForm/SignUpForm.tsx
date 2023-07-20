import { useCallback, useMemo, useState } from 'react';

import { createUser, type CreateUserResponse } from '~/api/createUser';
import { formSchema } from '~/features/SignUpForm/form.schema';
import { type FormState } from '~/features/SignUpForm/form.types';
import {
  getDefaultFormValues,
  getFormErrors
} from '~/features/SignUpForm/form.utils';
import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';

import formStyles from './SignUpForm.module.scss';

export const SignUpForm = ({
  onCreateUser
}: {
  onCreateUser: (user: CreateUserResponse) => void;
}) => {
  const [formState, setFormState] = useState<FormState>(getDefaultFormValues);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    () => new Set()
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateFormValues = useCallback((newFormValue: Partial<FormState>) => {
    setFormState((previousFields) => ({ ...previousFields, ...newFormValue }));
    setTouchedFields(
      (previousFields) =>
        new Set([...previousFields.values(), ...Object.keys(newFormValue)])
    );
  }, []);

  const formErrors = useMemo(() => getFormErrors(formState), [formState]);

  return (
    <form
      className={formStyles.container}
      onSubmit={(event) => {
        event.preventDefault();

        const { ...user } = formState;
        setIsLoading(true);

        createUser(user)
          .then((data) => {
            setIsLoading(false);
            onCreateUser(data);
          })
          .catch((error) => {
            setIsLoading(false);
            console.error(error);
            setErrorMessage((error as Error).message);
          });
      }}
    >
      {errorMessage ? <div>{errorMessage}</div> : null}
      {formSchema.map((field) => (
        <InputField
          {...field}
          key={field.name}
          value={formState[field.name]}
          error={
            touchedFields.has(field.name) ? formErrors[field.name] : undefined
          }
          onChange={({ target: { value } }) =>
            updateFormValues({ [field.name]: value })
          }
          shouldFitContainer
        />
      ))}
      <Button
        type="submit"
        text="Sign Up"
        disabled={
          isLoading ||
          touchedFields.size === 0 ||
          Object.keys(formErrors).length > 0
        }
      />
    </form>
  );
};
