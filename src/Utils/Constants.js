export const validationRules = {
  displayName: {
    presence: {
      message: 'Display name is required',
    },
    length: {
      minimum: 5,
      message: '^Your display name must be at least 5 characters',
    },
  },
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
