// Add all the user related types here and same for blogs as well.

export interface LoginFormValues {
  email: string;
  password: string;
}

export type SignUpFormValues = LoginFormValues & {
    username: string;
  };

