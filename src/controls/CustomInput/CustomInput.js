import React from 'react';
import './CustomInput.css';

function CustomInput(props){
  const {id, label, classStyle, errorClassStyle, placeholder, mandatory, validationMessage, onChange} = props;
  const changeHandler = (e) => {
    onChange(e);
  }

  return (
    <span>
      <label htmlFor={id}>{label}</label>
      <input type="text"
          className={`form-control ${classStyle}`}
          id={id}
          placeholder={placeholder ? placeholder : ""}
          onChange={changeHandler}
          required={mandatory === 'true' ? true : false}/>
      {mandatory === 'true' ?
        <div className={`invalid-feedback ${errorClassStyle}`}>
            {validationMessage}.
        </div>
      : null}
    </span>
  );
}

export default CustomInput;