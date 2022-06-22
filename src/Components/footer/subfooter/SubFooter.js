import React from "react";
import "./subfooter.scss"
import Links from "../../shared/Links/Links";
import Icon from "../../shared/Icon/Icon";
const SubFooter = () => {
    return (
        <div className="subFooter">
            <div className="subFootMenu">
                <ul>
                    {subFoot.map((menuValue) => <li key={menuValue.menu}> <Links textDecoration={false} linkText={menuValue.menu} target="_blank" href={menuValue.href} textTransform="upper" color="darkBlack" fontSize="xs" fontFamily="ProximaReg"></Links>  </li>)}
                </ul>
            </div>
            <div className="socialMedia">
                <ul>{socialIcon.map((icon) => <li key={icon.icon}><Links textDecoration={false} href={icon.href}> <Icon iconName={icon.icon} fontSize="md" color="white"></Icon></Links></li>)}
                </ul>
            </div>
        </div>
    )
}
const subFoot = [
    { menu: 'TERMS & CONDITIONS',href:'#' }, { menu: 'PRIVACY POLICY',href:'#' }, { menu: 'COOKIE DISCLOSURE',href:'#' }, { menu: 'ACCESSIBILITY',href:'#' }, { menu: 'SITEMAP',href:'#' },]
const socialIcon = [
    { icon: 'icon-facebook',href:'https://www.facebook.com/' }, { icon: 'icon-linkedin2',href:'https://www.linkedin.com/' }, { icon: 'icon-search',href:'#' }]
export default SubFooter;