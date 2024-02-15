import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import FirstUpcase from "../utils/short-scripts.js";

const InputE = (props) => {
    // States group
    const [nameUpcase, setNameUpcase] = useState('')
    const [inpValue, setInpValue] = useState('')
    // Variables group
    const name = props.name
    const groupClass = props.groupClass
    const labelClass = props.labelClass
    const inpType = props.inpType
    const inpClass = props.inpClass
    // Effect functions group
    useEffect(() => {
        setNameUpcase((_) => FirstUpcase(name))
    }, [])
    useEffect(() => {
        props.onInputChange(name, inpValue)
    }, [inpValue])
    return (
        <div className={groupClass}>
            <label className={labelClass}>{nameUpcase}</label>
            <input type={inpType}
                   id={name}
                   name={name}
                   placeholder={name}
                   className={inpClass}
                   value={inpValue}
                   onChange={(e) => setInpValue((_) => e.target.value)}
            />
        </div>
    );
};

InputE.propTypes = {
    name: PropTypes.string.isRequired,
    groupClass: PropTypes.string,
    labelClass: PropTypes.string,
    inpType: PropTypes.string.isRequired,
    inpClass: PropTypes.string,
    onInputChange: PropTypes.func
}

export default InputE;
