import React from "react";
import '../stylesheets/button.css'

function Button({ text , isClick, manageClick }) {
    return(
        <button 
            className={ isClick ? 'click-button' : 'reset-button' }
            onClick={manageClick}>
            {text}
        </button>
    );
}

export default Button;