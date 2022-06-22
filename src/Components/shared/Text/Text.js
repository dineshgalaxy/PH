import React from "react";
import PropTypes from 'prop-types';

const Text = ({textType,fontSize,fontFamily,color,text,children})=>{
    const TextType = `${textType}`
    return(
            <TextType className={`${fontSize} ${fontFamily} ${color}`}>{text} {children}</TextType>
    )
}
Text.propTypes ={
    text:PropTypes.string,
    textType:PropTypes.oneOf(['p','span','div']).isRequired,
    fontSize:PropTypes.string,
    color:PropTypes.string,
    fontFamily:PropTypes.string,
    children: PropTypes.node,
}
Text.defaultProps = {
    textType:'p',
    text:'Hello word'
}
export default Text;