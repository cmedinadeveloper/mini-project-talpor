import validation from 'validate.js';
import { validationRules } from './Constants';

const validate = (fieldName, value) => {
  const formValues = {};
  formValues[fieldName] = value;
  const formFields = {};
  formFields[fieldName] = validationRules[fieldName];
  const result = validation(formValues, formFields);
  if (result) {
    return result[fieldName][0];
  }

  return null;
};

export default validate;
