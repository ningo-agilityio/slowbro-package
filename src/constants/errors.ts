export const VALIDATE_ERROR = {
  INVALID_EMAIL: 'This field requires a valid email address.',
  INVALID_EMPTY: 'This field cannot be empty.',
  INVALID_NOT_SELECTED: 'This field need to be selected.',
  INVALID_ZIPCODE: 'Zip code must be of a 5 digits number.',
  INVALID_PHONENUMBER: 'Phone number is not valid.',
  INVALID_ALPHABETIC_CHARACTER_ONLY: 'Please enter only alphabetic letters.',
  INVALID_SOCIAL_SECURITY_NUMBER: 'SSN must be of a 9 digits number.',
  INVALID_EXCEED_20MB: 'Maximum size for a document is 20MB.',
  SAME_ADDRESS_LINE:
    'The address Line 2 must not be the same with the Address Line 1.',
  INVALID_NOT_ENOUGH_BIRTH_DAY: 'Age should be more than 18 years.',
  INVALID_CURRENCY_EQUAL_ZERO: 'Amount must be greater than zero.',
  INVALID_ROUTING_NUMBER: 'Routing Number must consist of 9 digits.',
  INVALID_ACCOUNT: 'Invalid phone or email.',
  INVALID_ACCOUNT_NUMBER: 'Account Number must consist of 10 to 12 digits.',
  INVALID_EXCEED_BALANCE: 'Exceed the amount available.',
  INVALID_FULL_NAME: `Please enter payee's full name.`,
  INVALID_EXCEED_PAYMENT: `You have exceeded your payment limits.`,
  INVALID_CONTAIN_NUMBER_SPECIAL_CHARACTER:
    'This field cannot only contain numeric values or special characters.',
  INVALID_PASSWORD_LENGTH: 'Password must contain at least 8 characters'
};

export const API_ERROR = {
  DEFAULT_ERROR_APIS: 'Something goes wrong.',
  INVALID_AUTH: "You don't have permission to access this page.",
  INVALID_VERIFICATION_CODE: 'Incorrect code.',
  INVALID_EXCEED_AVAILABLE: 'You have exceeded the amount available.',
  INVALID_PAYEE: 'Payee incorrect.'
};
