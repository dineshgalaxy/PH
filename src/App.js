// import Button  from "./Components/shared/Button/Button";
// import Heading from "./Components/shared/Heading/Heading";
// import Links from "./Components/shared/Links/Links";
// import Input from "./Components/shared/Input/Input";
// import Img from "./Components/shared/Img/Img";
import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './App.scss';
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import HeroBanner from "./Components/herobanner/HeroBanner";
import NitroSteel from "./Components/nitrosteel/NitroSteel";
import Springshocks from "./Components/nitrosteel/springshocks/Springshocks";
import Product from "./Components/product/Product";
import Services from "./Components/services/Services";
const App = () =>{
    return(
        <>
        <Header></Header>
        <HeroBanner></HeroBanner>
        <Services></Services>
        <NitroSteel></NitroSteel>
        <Springshocks></Springshocks>
        <Product></Product>
        <Contact></Contact>
        <Footer></Footer>
        {/* <Button btnText="NitroSteel" color="darkblue" fontFamily="TitilliumWeb-SemiBold" fontSize="h1"></Button>
        <Heading fontFamily="ProximaBold" headingText="NitroSteel"></Heading>
        <Links linkText="anchor text"></Links>
        <Input type="text" placeholder="please enter your name"></Input>
        <Img srcPath="logo.png" alt="img"></Img> */}
        </>
    )
}

export default App;
