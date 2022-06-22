import React from "react";
const Img = ({srcPath,alt})=><img src={srcPath} alt={alt}></img>

Img.defaultProps = {
    srcPath:"logo.png",
}
export default Img;