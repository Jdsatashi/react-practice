import { RegExpInclude } from './ShortScript';

const InputValidate = {
  // Field must has value
  required: (value: string) => {
    const condition = value.trim() === '';
    return {
      error: condition ? null : true,
      message: condition ? '' : `field can not blank.`,
    };
  },
  // Field has at least minimun character as argument
  min_char: (value: string, min: string) => {
    const condition = value.length >= parseInt(min);
    return {
      error: condition ? null : true,
      message: condition ? '' : `field must at least ${min} characters.`,
    };
  },
  // Field has at maximun character as argument
  max_char: (value: string, max: string) => {
    const condition = value.length <= parseInt(max);
    return {
      error: condition ? null : true,
      message: condition ? '' : `field must below at ${max} characters.`,
    };
  },
  // Field has at least minimun number as argument
  min_num: (value: string, min: string) => {
    const condition = parseInt(value) >= parseInt(min);
    return {
      error: condition ? null : true,
      message: condition ? '' : `number must lower than ${min}`,
    };
  },
  // Field has at maximum number as argument
  max_num: (value: string, max: string) => {
    const condition = parseInt(value) <= parseInt(max);
    return {
      error: condition ? null : true,
      message: condition ? '' : `number must lower than ${max}`,
    };
  },
  // Field must be email
  email: (value: string) => {
    // Email regex format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const condition = emailRegex.test(value);
    return {
      error: condition ? null : true,
      message: condition ? '' : 'field is invalid.',
    };
  },
  // Field must including character "word,number,_,@,#"...
  include: (value: string, including: string) => {
    const charTypes = including.split(',');
    const exceptedChar = new RegExp(RegExpInclude(charTypes));
    const condition = exceptedChar.test(value);
    return {
      error: condition ? null : true,
      message: condition
        ? ''
        : `field must start with Word (a,b,c) and include only "${including}".`,
    };
  },
  // Field must match with value of second argument
  confirm: (value: string, matchValue: string) => {
    const condition = value === matchValue;
    return {
      error: condition ? null : true,
      message: condition ? '' : 'field not matching.',
    };
  },
  // Datetime ...
  min_date: (value: string, min: string) => {
    console.log(value);
    console.log(min);
    return {
      error: null,
      message: '',
    };
  },
  max_date: (value: string, max: string) => {
    console.log(value);
    console.log(max);
    return {
      error: null,
      message: '',
    };
  },
};

export default InputValidate;
