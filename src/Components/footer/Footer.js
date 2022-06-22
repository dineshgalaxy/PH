import React from "react";
import Img from "../shared/Img/Img"
import Links from "../shared/Links/Links";
import Text from "../shared/Text/Text";
import Heading from "../shared/Heading/Heading";
import "./footer.scss"
import SubFooter from "./subfooter/SubFooter";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerItem">
                    <div className="footAddress">
                        <div className="footLogo">
                            <Links href="#"><Img srcPath="Group337.png" alt="Group337.png"/></Links>
                        </div>
                        <div className="address">
                            <Text textType="p"
                                text="209 W. Mt. Hope Ave.
                            Lansing, MI 48910
                            (517) 485-5090" color="black" fontFamily="ProximaMd" fontSize="sm"></Text>
                            <Text textType="p"
                                text="Email Us" color="black" fontFamily="ProximaMd" fontSize="sm"></Text>
                        </div>

                    </div>
                    <div className="footMenu">
                        <Heading headingText="QUICK LINKS" fontFamily="ProximaCondbld" headingType="h2" color="lightBlue" textTransform="capital" fontSize="sm"></Heading>
                            <div className="quick-link">
                                <ul>{footMenu1.map((menuValue) => <li key={menuValue.menu}> <Links textDecoration={false} linkText={menuValue.menu} href={menuValue.href} textTransform="capital" color="darkBlack" fontSize="sm" fontFamily="ProximaReg"></Links>  </li>)}
                                </ul>
                                <ul className="menuSecond">
                                    {footMenu2.map((menuValue) => <li key={menuValue.menu}> <Links textDecoration={false} linkText={menuValue.menu} href={menuValue.href} textTransform="capital" color="darkBlack" fontSize="sm" fontFamily="ProximaReg"></Links>  </li>)}
                                </ul>
                            </div>
                        
                    </div>
                </div>
                <SubFooter></SubFooter>
            </div>
        </div>
    )
}
const footMenu1 = [{ menu: ' Employee Login',href:'#' }, { menu: 'Careers',href:'#' }, { menu: 'Request A Quote',href:'#' }]
const footMenu2 = [{ menu: ' Services',href:'#' }, { menu: 'Locations',href:'#' }, { menu: 'Contact Us',href:'#' }]

export default Footer;