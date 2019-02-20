export const validationRules = {
  email: {
    presence: {
      message: 'Email is required',
    },
    email: true,
  },
  password: {
    presence: {
      message: 'Password is required',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
};
