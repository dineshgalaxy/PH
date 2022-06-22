import React from "react";
import PropTypes from "prop-types";

const Heading = (
    {
    headingType,
    fontSize,
    color,
    textTransform,
    fontFamily,
    headingText,
    children,
},
    
) => {

const HeadingType = `${headingType}`;  
    return (
        <>
            <HeadingType
                className={`
               ${fontSize}
               ${color}
               ${textTransform}
                ${fontFamily}`}>
                {headingText}
                {children}
            </HeadingType>
        </>
    )
}
Heading.defaultProps = {
    headingText: "Lorem ipsum",
    headingType: 'h2'
}

Heading.propTypes = {
    headingType:PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    fontSize:PropTypes.string,
    color:PropTypes.string,
    textTransform:PropTypes.string,
    fontFamily:PropTypes.string,
    headingText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.node,
};



export default Heading;