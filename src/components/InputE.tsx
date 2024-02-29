/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect, useRef } from 'react';
import { FirstUpcase } from '../utils/ShortScript';
import InputEProps from '../repositories/propsType/InputEProps';

const InputE: FC<InputEProps> = ({
  label,
  onInputChange,
  errorMessage,
  ...data
}) => {
  // --- State variable ---
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  // --- Effect function ---
  // Update current input value
  useEffect(() => {
    setInputValue((_) => data.atrb.value);
  }, [data.atrb.value]);
  // Update input value for field to group input data
  useEffect(() => {
    onInputChange(label, inputValue);
  }, [inputValue, label]);
  // Set error when error appear
  useEffect(() => {
    if (errorMessage !== '') {
      inputRef.current!.classList.add('border-red-500');
    }
  }, [errorMessage]);
  // --- Callback funtion ---
  // Update current input value and clear error
  const onInputType = (event: { target: { value: string } }) => {
    setInputValue((_) => event.target.value);
    inputRef.current!.classList.remove('border-red-500');
  };
  // Upcase for first character of label
  const handleLabel = (label: string) => {
    if (label.indexOf('_') !== -1) {
      const newLabel = label.split('_');
      let finalLabel = '';
      newLabel.map((_label) => {
        finalLabel = finalLabel !== '' ? finalLabel + ` ${_label}` : _label;
      });
      return FirstUpcase(finalLabel);
    }
    return FirstUpcase(label);
  };
  // --- JSX Element ---
  return (
    <div className='input_group'>
      <label className='input_label'>{handleLabel(label)}</label>
      <input ref={inputRef} {...data.atrb} onChange={onInputType} />
      <span className='col-1'></span>
      {errorMessage !== '' && (
        <span className={`col-span-3 text-sm text-red-600 font-thin`}>
          {`${FirstUpcase(label)} ${errorMessage}`}
        </span>
      )}
    </div>
  );
};

export default InputE;
