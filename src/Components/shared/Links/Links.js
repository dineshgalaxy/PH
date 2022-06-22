import "./links.scss";
import PropTypes from 'prop-types';

const Links = (
    { fontSize,
        color,
        textTransform,
        fontFamily,
        href,
        target,
        textDecoration,
        linkText,
        children }

) => {
    const textDecorat = textDecoration ? '' :'textDecoration';
    return (
        <>
            <a
                href={href}
                target={target}
                rel="noreferrer"
                className={`${textDecorat} ${textTransform} 
                ${color} ${fontFamily} 
                ${fontSize}`}>
                {linkText}{children}
            </a>
        </>
    )
}


Links.defaultProps = {
    textDecoration:true,
}

Links.propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.string,
    textTransform: PropTypes.string,
    fontFamily: PropTypes.string,
    href: PropTypes.string,
    linkText: PropTypes.string,
    children: PropTypes.node,
}

export default Links;