import React, { useCallback, useEffect, useState } from 'react';
import InputE from './InputE';
import FormDataType from '../repositories/FormDataType';
import RegisterFields from '../variables/RegisterFields';
import InputValidate from '../utils/InputValidate';

// --- Assign variables required ---
const fields = RegisterFields;
const defaultData = {
  username: '',
  email: '',
  dob: '',
  age: '',
  password: '',
  confirm_password: '',
};

const Form = () => {
  /* --- React state --- */
  const [formData, setFormData] = useState<FormDataType>(defaultData);
  const [fieldError, setFieldError] = useState<FormDataType>(defaultData);
  const [submitting, setSubmitting] = useState<number>(0);
  /* --- React useEffect --- */
  // Handle submit when submitting was changed
  useEffect(() => {
    handleSubmit();
  }, [submitting]);
  /* --- Callback function --- */
  // Set field value to form data when typing
  const handleInputChange = useCallback(
    (name: string, value: string) => {
      // Update field value when typing
      setFormData((data) => ({ ...data, [name]: value }));
      // Remove error message when typing
      if (fieldError[name] !== '') {
        setFieldError((err) => ({ ...err, [name]: '' }));
      }
    },
    [formData, fieldError]
  );
  // Handle on submit/click submit button
  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Validate input error
    handleValidate();
    // Change submitting to process handle submit
    setSubmitting((submitting) => submitting + 1);
  };
  // Validate data before submit
  const handleValidate = useCallback(() => {
    // Loop through each field to check rules
    fields.forEach((field) => {
      if (Array.isArray(field.validate)) {
        let err;
        // Set type for field.validate/rules prevent error
        const rules = field.validate as string[];
        // Loop through each rule for validating
        for (const rule of rules) {
          // ':' for rule contain validate type and arguments
          if (rule.indexOf(':') !== -1) {
            // Split rule string to data[0]: "validate_type" and data[1]: "argument"
            const data = rule.split(':');
            // Set validate type as key to prevent error
            const ruleName = data[0] as keyof typeof InputValidate;
            // Check type of argument and set avaiable value
            const arg = data[1] in formData ? formData[data[1]] : data[1];
            const arg2 = Number.isNaN(parseInt(data[1])) ? arg : data[1];
            // Get return from validate type function
            const error = InputValidate[ruleName](formData[field.name], arg2);
            // If return data error.error = true, set err = true to break loop
            if (error.error) {
              err = true;
            }
            // Set field error = error message, when error.error = null => error.message = ''
            setFieldError((err) => ({ ...err, [field.name]: error.message }));
          } else {
            // Set validate type as key to prevent error
            const ruleName = rule as keyof typeof InputValidate;
            // Get return from validate type function
            const error = InputValidate[ruleName](formData[field.name], '');
            // If return data error.error = true, set err = true to break loop
            if (error.error) {
              err = true;
            }
            // Set field error = error message, when error.error = null => error.message = ''
            setFieldError((err) => ({ ...err, [field.name]: error.message }));
          }
          // Break loop rule when current rule got error
          if (err) {
            break;
          }
        }
      }
    });
  }, [formData]);
  // Handling submit function
  const handleSubmit = useCallback(() => {
    // Error false when all fields error = '' mean not have error message
    const notErr = fields.every((field) => fieldError[field.name] === '');
    // submitting > 0 prevent when first time submit all error message is ''
    if (submitting > 0 && notErr) {
      // Handle when submit
      console.log('Submitting');
    }
  }, [fieldError]);
  /* --- Attributes for input component --- */
  const inputAttrib = (f: { name: string; type: string }) => {
    return {
      className: 'input_text',
      name: f.name,
      type: f.type,
      placeholder: `Enter ${f.name}...`,
      value: formData[f.name],
    };
  };
  /* --- JSX Element --- */
  return (
    <div className='element_center'>
      <div className='card_simple w-[720px] rounded-lg mx-4'>
        <h2 className='mb-4 text-center card_title'>Register form</h2>
        <form action='' method=''>
          {fields.map((f, i) => (
            <InputE
              key={i}
              onInputChange={handleInputChange}
              errorMessage={fieldError[f.name]}
              label={f.name}
              atrb={inputAttrib(f)}
            />
          ))}
          <div className='mt-4 element_center'>
            <button type='button' className='btn_blue' onClick={submitForm}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
