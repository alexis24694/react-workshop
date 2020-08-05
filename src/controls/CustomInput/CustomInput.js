import React from 'react';
import './CustomInput.css';

function CustomInput(props){
  const { 
    id, 
    label, 
    defaultValue,
    classStyle, 
    errorClassStyle, 
    placeholder, 
    mandatory, 
    validationMessage, 
    show_prepend, 
    onChange
  } = props;

  const changeHandler = (e) => {
    onChange(e);
  }

  return (
    <span>
      <label htmlFor={id}>{label}</label>
      <div className="input-group">
        {show_prepend === 'true' ?
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
        : null}
        <input type="text"
            className={`form-control ${classStyle}`}
            id={id}
            defaultValue={defaultValue}
            placeholder={placeholder ? placeholder : ""}
            onChange={changeHandler}
            required={mandatory === 'true' ? true : false}/>
        {mandatory === 'true' ?
          <div className={`invalid-feedback ${errorClassStyle}`}>
              {validationMessage}.
          </div>
        : null}
      </div>
    </span>
  );
}

export default CustomInput;