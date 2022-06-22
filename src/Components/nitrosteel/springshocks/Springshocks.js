import React from "react";
import Heading from "../../shared/Heading/Heading";
import Img from "../../shared/Img/Img";
import "./springshocks.scss";
import Button from "../../shared/Button/Button"
import Links from "../../shared/Links/Links";
import Text from "../../shared/Text/Text";
const Springshocks = () => {
    return (
        <div className="springshocks">
            <div className="spring">
            <div className="springImg">
                <Img srcPath="Spring shocks copy.png" alt="Spring shocks copy.png"></Img>
            </div>
            <div className="contactInfo">
            <div className="springCont">
                <Heading headingText="Start Today" fontFamily="TiWebBold" headingType="h2" color="black" textTransform="capital" fontSize="h3"></Heading>
                <Button btnText="Contact Us" textTransform="upper" fontSize="lg" color="blackBtn" fontFamily="ProximaCondbld"></Button>
            </div>
            <div className="springMenu">
                <ul>
                    <li> <Text textType="span" text="1" color="white" fontFamily="TiWebBlack" fontSize="h4xl"></Text> <Links linkText="Contact Us" textTransform="capital" color="black" fontSize="lg" fontFamily="ProximaBold"></Links></li>
                    <li><Text textType="span" text="2" color="white" fontFamily="TiWebBlack" fontSize="h4xl"></Text> <Links linkText="Review Your RFQ Together" textTransform="capital" color="black" fontSize="lg" fontFamily="ProximaBold"></Links></li>
                    <li><Text textType="span" text="3" color="white" fontFamily="TiWebBlack" fontSize="h4xl"></Text>  <Links linkText="Receive Your Product" textTransform="capital" color="black" fontSize="lg" fontFamily="ProximaBold"></Links></li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Springshocks;