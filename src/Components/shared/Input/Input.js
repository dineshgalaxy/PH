import PropTypes from 'prop-types';

const Input = ({ inputType, type, rows, placeholder }) => {

    const Inputype = `${inputType}`

    return (
        <Inputype type={type} rows={rows} placeholder={placeholder}></Inputype>
    )
}
Input.propTypes = {
    type: PropTypes.oneOf(['text','password','email','tel','number']).isRequired,
    inputType: PropTypes.string,
    rows: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input;