/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import FirstUpcase from '../utils/ShortScript';
import InputEProps from '../repositories/propsType/InputEProps';

const InputE: FC<InputEProps> = ({ label, onInputChange, ...data }) => {
  // State variable
  const [inputValue, setInputValue] = useState('');
  // Effect function
  useEffect(() => {
    setInputValue((_) => data.atrb.value);
  }, [data.atrb.value]);
  useEffect(() => {
    onInputChange(label, inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, label]);
  // return element
  return (
    <div className='input_group'>
      <label className='input_label'>{FirstUpcase(label)}</label>
      <input
        {...data.atrb}
        onChange={(e) => setInputValue((_) => e.target.value)}
      />
    </div>
  );
};

export default InputE;
