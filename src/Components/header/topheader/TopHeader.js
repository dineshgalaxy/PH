import React from "react";
import Text from "../../shared/Text/Text";
import Icon from '../../shared/Icon/Icon'
import "./topheader.scss"

const TopHeader = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="headerText"> 
                    <Text textType="span" text="(800) 648-1687" fontFamily="ProximaCondReg" fontSize="lg" color="white"></Text>
                   <div className="sIcon">
                    <Icon iconName="icon-search" fontSize="xlg" color="white"></Icon>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TopHeader;