/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FirstUpcase from '../utils/short-scripts.js';

const InputE = (props) => {
  // States group
  const [nameUpcase, setNameUpcase] = useState('');
  const [inpValue, setInpValue] = useState(props.value);
  const [error, setError] = useState(props.errors);
  // Variables group
  const name = props.name;
  const groupClass = props.groupClass;
  const labelClass = props.labelClass;
  const inpType = props.inpType;
  const inpClass = props.inpClass;
  // Effect functions group
  useEffect(() => {
    setNameUpcase((_) => FirstUpcase(name));
  }, []);
  useEffect(() => {
    props.onInputChange(name, inpValue);
  }, [inpValue]);
  useEffect(() => {
    setError((_) => props.errors);
    setInpValue((_) => props.value);
  }, [props]);
  return (
    <div className={groupClass}>
      <label className={labelClass}>{nameUpcase}</label>
      <input
        type={inpType}
        id={name}
        name={name}
        placeholder={name}
        className={error === '' ? inpClass : inpClass + ' border-red-600'}
        value={inpValue}
        onChange={(e) => setInpValue((_) => e.target.value)}
      />
      {error !== '' ? (
        <span className='text-sm text-red-600'>! Error: {error}.</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

InputE.propTypes = {
  name: PropTypes.string.isRequired,
  groupClass: PropTypes.string,
  labelClass: PropTypes.string,
  inpType: PropTypes.string.isRequired,
  inpClass: PropTypes.string,
  onInputChange: PropTypes.func,
  errors: PropTypes.string,
  value: PropTypes.string,
};

export default InputE;
