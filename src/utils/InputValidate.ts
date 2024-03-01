import { RegExpInclude } from './ShortScript';

const InputValidate = {
  // Field must has value
  required: (value: string) => {
    if (value.trim() === '') {
      return {
        error: true,
        message: 'field can not blank.',
      };
    }
    return {
      error: null,
      message: '',
    };
  },
  // Field has at least minimun character as argument
  min_char: (value: string, min: string) => {
    if (value.length < parseInt(min)) {
      return {
        error: true,
        message: `field must at least ${min} characters.`,
      };
    }
    return {
      error: null,
      message: '',
    };
  },
  // Field has at maximun character as argument
  max_char: (value: string, max: string) => {
    if (value.length > parseInt(max)) {
      return {
        error: true,
        message: `field must below ${max} characters.`,
      };
    }
    return {
      error: null,
      message: '',
    };
  },
  // Field has at least minimun number as argument
  min_num: (value: string, min: string) => {
    if (parseInt(value) < parseInt(min)) {
      return {
        error: true,
        message: `number must larger than ${min}.`,
      };
    }
    return {
      error: null,
      message: '',
    };
  },
  // Field has at maximum number as argument
  max_num: (value: string, max: string) => {
    if (parseInt(value) > parseInt(max)) {
      return {
        error: true,
        message: `number must lower than ${max}`,
      };
    }
    return {
      error: null,
      message: '',
    };
  },
  // Field must be email
  email: (value: string) => {
    // Email regex format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!emailRegex.test(value)) {
      return {
        error: true,
        message: 'field is invalid.',
      };
    }
    return {
      error: null,
      message: '',
    };
  },
  // Field must including character "word,number,_,@,#"...
  include: (value: string, including: string) => {
    const charTypes = including.split(',');
    const exceptedChar = new RegExp(RegExpInclude(charTypes));
    if (!exceptedChar.test(value)) {
      return {
        error: true,
        message: `field must start with Word (a,b,c) and include only "${including}".`,
      };
    }
    return {
      error: null,
      message: '',
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
  //
};

export default InputValidate;
