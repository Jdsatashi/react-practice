const InputValidate = {
  required: (value: string) => {
    if (value.trim() === '') {
      return {
        error: true,
        message: 'field can not blank.',
      };
    }
    return {
      error: false,
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
      error: false,
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
      error: false,
      message: '',
    };
  },
  min_num: (value: number, min: number, message: string) => {
    if (value < min) {
      return {
        error: true,
        message: message,
      };
    }
    return {
      error: false,
      message: '',
    };
  },
  max_num: (value: number, max: number, message: string) => {
    if (value < max) {
      return {
        error: true,
        message: message,
      };
    }
    return {
      error: false,
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
      error: false,
      message: '',
    };
  },
  include: (value: string, options: Array<string>) => {},
};

export default InputValidate;
