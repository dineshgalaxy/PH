import React from "react";
import Img from "../../shared/Img/Img";
import Links from "../../shared/Links/Links";
import Button from "../../shared/Button/Button"
import Icon from "../../shared/Icon/Icon"
import "./menubar.scss";
const Menubar = () => {
    return (
        <header>
            <div className="menubar">
                <div className="logo">
                  <Links href="#"><Img srcPath="logo.png" alt="logo.png"></Img></ Links>
                </div>
                <div className="humburger">
                    <Icon color="white" fontSize="h4" iconName="fa fa-bars" />
                </div>
                <div className="menu">
                    <ul>
                        {
                            menuItem.map((menuValue,index) =>
                                <li key={index}> <Links linkText={menuValue.menuName} textDecoration={false} target="_blank" href={menuValue.link} textTransform="upper" color="white" fontSize="xs" fontFamily="ProximaReg"></Links>  </li>
                            )
                        }
                        <Button btnText="REQUEST A QUOTE" type="button" textTransform="upper" fontSize="xs" color="lightblueBtn" fontFamily="ProximaCondbld"></Button>
                    </ul>
                </div>
            </div>
        </header>
    )
}
const menuItem = [{ menuName: 'our company', link: '#' }, { menuName: ' WHAT WE DO ', link: '#' }, { menuName: ' CONTACT US ', link: '#' }]
export default Menubar;
