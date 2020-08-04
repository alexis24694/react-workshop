import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            id,
            className,
            label,
            labelOverflow,
            hideLabel,
            suggestions,
            required,
			error
        } = this.props;

		const input = this._getInputField();
        const errorClass = error ? 'error' : '';
        const requiredClass = required ? 'text-input--required' : '';
        const hasSugs = suggestions && suggestions.length;
		const sugsId = `${id}_suggestions`;
		const labelText = labelOverflow || hideLabel ? (<span>{label}</span>) : label;
		const labelStyle = hideLabel ? { visibility: 'hidden' } : {};
		const labelClass = labelOverflow ? 'text-input--label-overflow' : ''

        return (
            <div className={`text-input ${typeClass} ${cssClass} ${errorClass}`}
				role={hasSugs ? 'combobox' : ''}
                aria-owns={sugsId}
				aria-controls={sugsId}
				aria-expanded={hasSugs}
				aria-haspopup={hasSugs ? 'listbox' : ''} >
                <label htmlFor={id}
                    style={labelStyle}
                    id={`${id}_label`}
                    className={`text-input--label ${requiredClass} ${labelClass}`}>{labelText}</label>
				{input}
				{description ? <p className="text-input--description">{description}</p> : null}
				{this._showSuggestions(suggestions)}
            </div>
        );
    }
}

export default TextInput;