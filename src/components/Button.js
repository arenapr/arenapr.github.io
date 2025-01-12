import React, {useEffect} from 'react'
import './Button.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function validateEmail() {
    const input = document.getElementById("emailAddressInput");
    const inputValue = input.value;

    if (!inputValue.includes("@"))
    {
        input.setCustomValidity("Please include an '@' in the email address. '" + inputValue + "' is missing '@'.");
    }
    else
    {
        input.setCustomValidity("You have joined our weekly newsletter.");
        input.value = '';
    }

    input.reportValidity();
}

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const navigate = useNavigate();

    const scrollToContactUs = () => {
        navigate('/', { state: { scrollPosition: '#home-contact-us' } })
    };

    if (type === 'contact-us') {
        return(
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} btn-contact-us`} 
                onClick={(e) => {
                    scrollToContactUs();
                }}
                type={type}
            >
                {children}
            </button>
        )
    } else if (type === 'subscribe') {
        return(
            <div className='btn-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={validateEmail} type={type}>
                    {children}
                </button>
            </div>
        )
    }
};