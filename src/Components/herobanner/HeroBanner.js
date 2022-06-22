import React from "react";
import Menubar from "../header/menubar/Menubar";
import Heading from "../shared/Heading/Heading"
import Text from "../shared/Text/Text";
import "./herobanner.scss"
const HeroBanner = () => {
    return (
        <div className="heroBanner">
            <div className="container">
                <Menubar></Menubar>
                <div className="banner">
                    <Heading headingText="NitroSteel" fontFamily="TiWebSbld" headingType="h1" color="white" textTransform="capital" fontSize="h1"></Heading>
                    <Text textType="p" text="A longer-lasting alternative to chrome plating, NitroSteel/FNC is a ferritic nitrocarburized bar that is wear-resistant and corrosion-resistant. It supplies durability and leaves no hazardous byproduct in our facility or your operations." color="white" fontFamily="ProximaLight" fontSize="lg"></Text>
                </div>
            </div>
        </div>
    )
}
export default HeroBanner;