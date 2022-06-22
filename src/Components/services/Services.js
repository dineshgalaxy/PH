import React from "react";
import Heading from "../shared/Heading/Heading";
import Img from "../shared/Img/Img";
import Text from "../shared/Text/Text";
import "./services.scss";
const Services = () => {
    return (
        <div className="serviesTop">
            <div className="container">
                <div className="servicesHeading">
                    <Heading headingText="Why NitroSteel?" fontFamily="TiWebBold" headingType="h2" color="lightBlue" textTransform="capital" fontSize="h3"> </Heading>
                </div>
            </div>
            <div className="container">
                <div className="services">
                    {
                        serviceItem.map((serviceValue,index) => {
                            return (
                                <div className="sHead col_4 col_6" key={index}>
                                    <div className="servicesItem ">
                                        <div className="serviceImg" >
                                            <Img srcPath={serviceValue.img} alt={serviceValue.alt}></Img>
                                        </div>
                                        <div className="serviceText">

                                            <Heading headingText={serviceValue.heading} fontFamily="ProximaBold" headingType="h2" color="black" textTransform="capital" fontSize="lg"> </Heading>
                                            <Text textType="p" text={serviceValue.para} color="black" fontFamily="ProximaLight" fontSize="sm"></Text>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }

                  
                </div>
            </div>
        </div>
    )
}
const serviceItem = [
    {
        img: 'PremierThermalPlantProcesses162.jpg',
        alt: 'PremierThermalPlantProcesses162.jpg',
        heading: 'Superior Performance',
        para: 'Superior corrosion resistance means no pitting and flaking, unlike chrome.',
    },
    {
        img: 'shutterstock_605994224.jpg',
        alt: 'shutterstock_605994224.jpg',
        heading: 'Increased Profitability',
        para: 'Wear resistance ensures a durable and long-lasting product that keeps your equipment out of the shop and in the field.',
    },
    {
        img: 'hydraulic shock edited DEEP RED TWO.jpg',
        alt:'hydraulic shock edited DEEP RED TWO.jpg',
        heading: 'Environmentally Safe',
        para: 'Unlike chrome, NitroSteel leaves no hazardous byproduct in our facility or in your operations.',
    },
]
export default Services;