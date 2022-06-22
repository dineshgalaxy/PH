import React from "react";
import Heading from "../shared/Heading/Heading";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button"
import "./contact.scss";
const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
            <div className="contactHeading">
                <Heading headingText="Request A Quote Today" fontFamily="TiWebBold" headingType="h2" color="white" textTransform="capital" fontSize="h4xl"></Heading>
            </div>
            <div className="contactForm">
                <form>
                    <div>
                        <Input type="text" inputType="input" placeholder="Name"></Input>
                    </div>
                    <div className="form-control">
                        <div>
                            <Input type="tel" inputType="input" placeholder="Phone"></Input>
                        </div>
                        <div>
                            <Input type="email" inputType="input" placeholder="Email"></Input>
                        </div>
                    </div>
                    <div>
                        <Input type="text" inputType="input" placeholder="Company"></Input>
                    </div>
                    <div>
                        <Input type="text" inputType="input" placeholder="Job Title"></Input>
                    </div>
                    <div>
                        <Input type="text" inputType="input" placeholder="Industry"></Input>
                    </div>
                    <div>
                        <Input inputType="textarea" rows="4"  type="text"  placeholder="Specifications"></Input>
                    </div>

                    <div className="btnContact">
                    <Button btnText="REQUEST A QUOTE" type="button" textTransform="upper" fontSize="md" color="blackBtn" fontFamily="ProximaCondExbld"></Button>

                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
export default Contact;