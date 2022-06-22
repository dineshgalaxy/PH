import React from "react";
import PropTypes from 'prop-types';
import "./icon.scss";
const Icon = ({fontSize,color,iconName})=><span className={`icon ${iconName} ${fontSize} ${color}`}></span>

Icon.defaultProps ={
    iconName:'icon'
}

Icon.propTypes = {
    fontSize:PropTypes.string,
    color:PropTypes.string,
    iconName: PropTypes.string.isRequired,
}

export default Icon;