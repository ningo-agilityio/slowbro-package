import { OptionSelect } from 'src/components/Select';
import { VALIDATE_ERROR } from 'src/constants/errors';
import { PLAID_PAYMENT_EXCEED, TransferData } from 'src/constants/transfer';
import { VALIDATIONS_CONSTANT } from 'src/constants/validates';
import { AddressType, FullNameType } from 'src/models/user';
import { calculateAge } from './datepicker';
import { PayeeFormData } from 'src/constants/payee';
import { PersonalInfoType } from 'src/pages/Onboarding/PersonalInfo';
import { AddressType as VerifyAddressType } from 'src/pages/Onboarding/VerifyAddress';
import { SignUpField } from 'src/constants/onboarding';

export const MIN_PASSWORD_LENGTH = 8;
export const MIN_AGE = 18;

export const isBrowser = typeof window !== 'undefined';
export const SSN_PATTERN = new RegExp('d{3}[-]d{2}[-]d{4}');
// eslint-disable-next-line
export const SPECIAL_CHARACTERS_PATTERN = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const PHONE_PATTERN = /^(\d{3})(\d{3})(\d{4})$/;
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isEmail = (value = '') => value.match(EMAIL_PATTERN);
export const isPhone = (value = '') => !Number.isNaN(value);
/**
 *
 * @param value +2345678900
 * @returns "+(234)-567-8900"
 */
export const formatPhone = (value = '') => {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(PHONE_PATTERN);

  if (match) {
    return `(${match[1]})-${match[2]}-${match[3]}`;
  }
  return value;
};
/**
 *
 * @param value "+(234)-567-8900"
 * @returns +2345678900
 */
export const santizerPhone = (value = '') => `+${value.replace(/\D+/g, '')}`;
export const validatePhone = (value = '') => {
  const formattedValue = value.replace(/\D+/g, '');
  return formattedValue.length === 10 && formattedValue.match(PHONE_PATTERN);
};

export const formatSSN = (value = '') =>
  value
    .match(/\d*/g)
    .join('')
    .match(/(\d{0,3})(\d{0,2})(\d{0,4})/)
    .slice(1)
    .join('-')
    .replace(/-*$/g, '')
    .replace(/[0-9]/g, '*');

export const getFullAddress = (address?: AddressType): string =>
  !address.street2
    ? `${address?.street}, ${address?.city}, ${address?.state} ${address?.postal_code} ${address?.country}`
    : `${address?.street}, (${address?.street2}), ${address?.city}, ${address?.state} ${address?.postal_code} ${address?.country}`;

export const getFullName = (fullName: FullNameType): string =>
  `${fullName.first} ${fullName.last}`;

const removeStringEffect = (value: string) =>
  value
    .trim()
    .replaceAll(/\s/g, '')
    .toLowerCase();

export const isEqualString = (value1: string, value2: string): boolean =>
  value1 && value2 && removeStringEffect(value1) === removeStringEffect(value2);

export const getSelectOptionsFromState = (state: {
  [key: string]: string;
}): OptionSelect[] =>
  Object.keys(state).map(key => ({
    value: key,
    label: state[key]
  }));

// replace all characters without number
export const formatNumber = (value: string) =>
  value ? value.replace(/\D/g, '') : '';

/**
 *
 * @param value "2345678900"
 * @returns +1(234)-567-8900
 */
export const convertPhoneFormat = (basePhone = '') =>
  `+1${basePhone.slice(1).replace(/^(\d{3})(\d{3})(\d+)$/, '($1)$2-$3')}`;

export const unmaskCountryCodePhoneNumber = (phoneNumber = '') =>
  phoneNumber.slice(1);

// groupby
export const groupBy = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K
) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);

    if (!previous[group]) {
      const previousTemp = previous;

      previousTemp[group] = [];
    }
    previous[group].push(currentItem);

    return previous;
  }, {} as Record<K, T[]>);

export const isNumber = (value: string): boolean => /^\d+$/.test(value);

const validateAmount = (amount = 0): string => {
  switch (true) {
    // case 1: enter 0 dollar
    case amount === 0:
      return VALIDATE_ERROR.INVALID_CURRENCY_EQUAL_ZERO;
    // case 2: enter empty, undefine, ..
    case !amount:
      return VALIDATE_ERROR.INVALID_EMPTY;
    // case 3: exceed daily plaid payment
    case amount > PLAID_PAYMENT_EXCEED:
      return VALIDATE_ERROR.INVALID_EXCEED_PAYMENT;
    default:
      return '';
  }
};

export const validateName = (name = ''): string => {
  switch (true) {
    // case 1 empty
    case !name || !name.trim():
      return VALIDATE_ERROR.INVALID_EMPTY;
    // case 2: alphabetic character
    case !VALIDATIONS_CONSTANT.validateUseName(name):
      return VALIDATE_ERROR.INVALID_ALPHABETIC_CHARACTER_ONLY;
    default:
      return null;
  }
};

export const validateForm = {
  accountNumber: (accountNumber: string) =>
    VALIDATIONS_CONSTANT.validateAccountNumber(accountNumber),
  fullName: (name: string) => VALIDATIONS_CONSTANT.validateUserFullName(name),
  routingNumber: (routingNumber: string) =>
    VALIDATIONS_CONSTANT.validateRoutingNumber(routingNumber),
  amount: (amount: number) => validateAmount(amount),
  firstName: (firstName: string): string => validateName(firstName),
  lastName: (lastName: string): string => validateName(lastName),
  phoneNumber: (phoneNumber: string): string => {
    switch (true) {
      case !phoneNumber:
        return VALIDATE_ERROR.INVALID_EMPTY;
      case !VALIDATIONS_CONSTANT.validatePhoneNumber(
        unmaskCountryCodePhoneNumber(phoneNumber)
      ):
        return VALIDATE_ERROR.INVALID_PHONENUMBER;
      default:
        return null;
    }
  },
  socialSecurityNumber: (socialSecurityNumber: string): string => {
    switch (true) {
      // case 1: empty
      case !socialSecurityNumber:
        return VALIDATE_ERROR.INVALID_EMPTY;
      // case 2: invalid SSN
      case !VALIDATIONS_CONSTANT.validateSecurityNumber(socialSecurityNumber):
        return VALIDATE_ERROR.INVALID_SOCIAL_SECURITY_NUMBER;
      default:
        return null;
    }
  },
  dateOfBirth: (dateOfBirth: string): string => {
    switch (true) {
      // case 1: empty
      case !dateOfBirth:
        return VALIDATE_ERROR.INVALID_EMPTY;
      // case 2: ages lower than 18
      case calculateAge(dateOfBirth) < 18:
        return VALIDATE_ERROR.INVALID_NOT_ENOUGH_BIRTH_DAY;
      default:
        return null;
    }
  },
  addressOne: (addressOne: string): string => {
    switch (true) {
      // case 1: empty
      case !addressOne || !addressOne.trim():
        return VALIDATE_ERROR.INVALID_EMPTY;
      // case 2: contain number only or special character
      case isNumber(addressOne) || SPECIAL_CHARACTERS_PATTERN.test(addressOne):
        return VALIDATE_ERROR.INVALID_CONTAIN_NUMBER_SPECIAL_CHARACTER;
      default:
        return '';
    }
  },

  addressTwo: (addressTwo: string, addressOne: string): string => {
    switch (true) {
      // case 1: contain number only or special character
      case isNumber(addressTwo) || SPECIAL_CHARACTERS_PATTERN.test(addressTwo):
        return VALIDATE_ERROR.INVALID_CONTAIN_NUMBER_SPECIAL_CHARACTER;
      // case 2: address lines are the same
      case isEqualString(addressOne, addressTwo):
        return VALIDATE_ERROR.SAME_ADDRESS_LINE;
      default:
        return '';
    }
  },
  city: (city: string): string => validateName(city),
  state: (state: string): string => VALIDATIONS_CONSTANT.validateEmpty(state),

  zipCode: (zipCode: string): string => {
    switch (true) {
      // case 1: empty
      case !zipCode:
        return VALIDATE_ERROR.INVALID_EMPTY;
      // case 2: invalid zip code
      case !VALIDATIONS_CONSTANT.validateZipCode(zipCode):
        return VALIDATE_ERROR.INVALID_ZIPCODE;
      default:
        return '';
    }
  },
  amountTransfer: (amount: number): string =>
    VALIDATIONS_CONSTANT.validateCurrency(amount),
  fromAccount: (fromAccount: string): string =>
    VALIDATIONS_CONSTANT.validateEmpty(fromAccount),
  toAccount: (toAccount: string): string =>
    VALIDATIONS_CONSTANT.validateEmpty(toAccount),
  email: (email: string): string => {
    switch (true) {
      case !email:
        return VALIDATE_ERROR.INVALID_EMPTY;
      case !VALIDATIONS_CONSTANT.validateEmail(email):
        return VALIDATE_ERROR.INVALID_EMAIL;
      default:
        return '';
    }
  },
  password: (password: string): string => {
    switch (true) {
      case !password:
        return VALIDATE_ERROR.INVALID_EMPTY;
      case password.length < MIN_PASSWORD_LENGTH:
        return VALIDATE_ERROR.INVALID_PASSWORD_LENGTH;
      default:
        return '';
    }
  }
};

export const validateOnSubmit = (
  formValue:
    | PayeeFormData
    | PersonalInfoType
    | VerifyAddressType
    | TransferData
    | SignUpField,
  secondValue = ''
) => {
  const validation = {};

  Object.keys(formValue).forEach(key => {
    validation[key] = validateForm[key]?.(formValue[key], secondValue);
  });

  return validation;
};

export const getExtensionFile = (fileName = ''): string =>
  fileName.split('.').pop();

export const removeLastCharacter = (value: string): string =>
  value.substring(0, value.length - 1);

type ObjectData = {
  [key: string]: any;
};

/**
 * Function used for checking all fields is filled up or not
 * @param formInfo - the object contains all fields used in form
 * @returns - boolean value is check fields is filled up or not
 */
export const isAllFieldsFillUp = (formInfo: ObjectData): boolean =>
  !Object.values(formInfo).every(o => !!o);
