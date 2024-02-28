import React, { useState } from 'react';
import InputE from './InputE';
import FormDataType from '../repositories/FormDataType';
import RegisterFields from '../variables/RegisterFields';
import InputValidate from '../utils/InputValidate';

const Form = () => {
  const fields = RegisterFields;
  const defaultData = {
    username: '',
    email: '',
    dob: '',
    age: '',
    password: '',
    confirmpassword: '',
  };
  // React state
  const [formData, setFormData] = useState<FormDataType>(defaultData);
  // const [fieldError, setFieldError] = useState('')
  // Callback function
  const handleInputChange = (name: string, value: string) => {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleValidate()
  };
  const handleValidate = () => {
    RegisterFields.forEach((field) => {
      if (Array.isArray(field.validate)) {
        let err
        const rules = field.validate as string[]
        for(const rule of rules){
          if(rule.indexOf(':') !== -1){
            const data = rule.split(':')
            const ruleName = data[0] as keyof typeof InputValidate;
            const error = InputValidate[ruleName](formData[field.name], parseInt(data[1]))
            if(error.error){
              err = true
              console.log(error)
            }
          } else {
            const ruleName = rule as keyof typeof InputValidate;
            const error = InputValidate[ruleName](formData[field.name], 0)
            if(error.error){
              err = true
              console.log(error)
            }
          }
          if(err){
            break
          }
        }
      }
    })
  }
  // Attributes for input component
  const inputAttrib = (f: {name: string; type: string}) => {
    return {
        className: 'input_text',
        name: f.name,
        type: f.type,
        placeholder: `Enter ${f.name}...`,
        value: formData[f.name]
    }
  }
  return (
    <div className='mx-auto card_simple w-[720px] rounded-lg'>
      <h2 className='mb-4 text-center card_title'>Register form</h2>
      <form action='' method=''>
        {fields.map((f, i) => (
          <InputE
            key={i}
            onInputChange={handleInputChange}
            label={f.name}
            atrb={inputAttrib(f)}
          />
        ))}
        <div className='mt-4 element_center'>
          <button type='button' className='btn_green' onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
