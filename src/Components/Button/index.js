import React from 'react';
import './style.css';

const CustomButton = (props) => {
    const { buttontext, onSubmit } = props;
    return (
        <button onClick={onSubmit} data-test="buttonComponent" {...props}>
            <span>{buttontext}</span>
        </button>
    )
}

export { CustomButton };
