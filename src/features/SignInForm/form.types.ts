export interface FormState {
  email: string;
  password: string;
  token_name: string;
}

export type FormErrors = Partial<Record<keyof FormState, string>>;
