import React from "react";
import './button.scss';
import PropTypes from 'prop-types';

const Button = ({
    type,
    fontSize,
    color,
    textTransform,
    fontFamily,
    btnText,
    children
}) => {
    const btnProps =
            color === 'lightblueBtn' ? 'lightBlueBtn' :
            color === 'darkblueBtn' ? 'darkBlueBtn' :
            color === 'blackBtn' ? 'blackBtn' : 
            color==='textBtn'? 'textBtn':'defaultBtn'

    return (
        <>
            <button
                    type={type}
                    className={`${btnProps}
                    ${fontSize} 
                    ${color} 
                    ${textTransform} 
                    ${fontFamily}`}>
                {btnText}{children}
            </button>
        </>
    )
}

Button.defaultProps = {
    type:'button',
    btnText: 'button',
}
Button.propTypes = {
    type:PropTypes.oneOf(['button','submit']),
    fontSize:PropTypes.string,
    color:PropTypes.string,
    textTransform:PropTypes.string,
    fontFamily:PropTypes.string,
    btnText: PropTypes.string.isRequired,
    linkBtn:PropTypes.string,
    children: PropTypes.node,
}
export default Button;