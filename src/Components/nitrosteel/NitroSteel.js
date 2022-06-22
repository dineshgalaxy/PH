import React from "react";
import Heading from "../shared/Heading/Heading";
import Img from "../shared/Img/Img";
import Links from "../shared/Links/Links";
import "./nitrosteel.scss";
const NitroSteel = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="nt_ch">
                    <div className="nitroImg">
                        <Img srcPath="NitroSteel Logo_REVERSE.png" alt="NitroSteel Logo_REVERSE.png"></Img>
                    </div>
                    <div className="vs">
                        <Heading headingText="vs." fontFamily="ProximaSbld" headingType="h2" color="white" textTransform="upper" fontSize="h3"> </Heading>
                    </div>
                    <div className="ch_plHeading">
                        <Heading headingText="Chrome Plated" fontFamily="TiWebBold" headingType="h2" color="white" textTransform="capital" fontSize="h2"> </Heading>
                    </div>
                </div>
            </div>
            <div className="ntChBar">
                <Img srcPath="nt-ch-bar.png" alt="nt-ch-bar.png"></Img>
            </div>
            <div className="container">
            <div className="ntText">
                <div className="ntSteel">
                    <ul className="ntList">
                    {
                         ntSteel.map((ntValue,index)=><li key={index}><Links linkText={ntValue.ntItem} textTransform="capital" color="white" fontSize="sm" fontFamily="ProximaReg"></Links></li>)
                    }
                    </ul>
                </div>
                
                <div className="chPlated">
                    <ul>
                    {
                         chPlated.map((ntValue,index)=><li key={index}> <Links linkText={ntValue.ntItem} textTransform="capital" color="white" fontSize="sm" fontFamily="ProximaReg"></Links></li>)
                    }
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
const ntSteel = [
    {
        ntItem:'Superior Corrosion Resistance',
    },{
        ntItem:'Improved Wear Resistance ',
    },{
        ntItem:'Better Lubrication Retention ',
    },
    {
        ntItem:'Dent Resistance without Induction Hardening ',
    },
    {
        ntItem:' Environmentally Friendly  ',
    },
    {
        ntItem:' No Surface Pitting or Flaking ',
    },
    {
        ntItem:' Increased Service Life ',
    }
]
const chPlated = [
    {
        ntItem:'“Micro Cracks” allow for Moisture Penetration and Rust'
    },
    {
        ntItem:'Flakes and Slivers Destroy Seals and Glands'
    },
    {
        ntItem:'Plating Creates Pits and Inherent Adhesion problems ',
    },
    {
        ntItem:'Environmentally Hazardous',
    },
    
]






export default NitroSteel;