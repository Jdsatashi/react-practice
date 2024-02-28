const InputValidate = {
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
  min_char: (value: string, min: number) => {
    if (value.length < min) {
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
  max_char: (value: string, max: number) => {
    if (value.length > max) {
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
  min_num: (value: string, min: number) => {
    if (parseInt(value) < min) {
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
  max_num: (value: string, max: number) => {
    if (parseInt(value) > max) {
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
  email: (value: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!emailRegex.test(value)) {
      return {
        error: true,
        message: 'Email is invalid.',
      };
    }
    return {
      error: null,
      message: '',
    };
  },
};

export default InputValidate;
