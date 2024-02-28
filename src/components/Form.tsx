import React, { useState } from 'react';
import InputE from './InputE';
import FormDataType from '../repositories/FormDataType';
import RegisterFields from '../variables/RegisterFields';

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
  // Callback function
  const handleInputChange = (name: string, value: string) => {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className='mx-auto card_simple w-[720px] rounded-lg'>
      <h2 className='card_title text-center mb-4'>Register form</h2>
      <form action='' method=''>
        {fields.map((f, i) => (
          <InputE
            key={i}
            className='input_text'
            label={f.name}
            name={f.name}
            type={f.type}
            placeholder={`Enter ${f.name}...`}
            value={formData[f.name]}
            onInputChange={handleInputChange}
          />
        ))}
        <div className='element_center mt-4'>
          <button type='button' className='btn_green' onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
