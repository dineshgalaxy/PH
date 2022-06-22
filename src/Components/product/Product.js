import React from "react";
import Heading from "../shared/Heading/Heading";
import Text from "../shared/Text/Text";
import Button from "../shared/Button/Button"
import Links from "../shared/Links/Links";
import "./product.scss"

const Product = () => {
	return (
		<div className="productTop">
			<div className="container">
				<div className="product">
					<div className=" productHeading">
						<Heading headingText="NitroSteel® Products" fontFamily="TiWebLight" headingType="h2" color="white" textTransform="capital" fontSize="h3"></Heading>
					</div>
					<div className="productText">
						<div className="product-quote">
							<Text textType="p" text="Quotes for other sizes and grades available on request, or we can process your material." color="white" fontFamily="ProximaMd" fontSize="sm"></Text>
							<Button btnText="REQUEST A QUOTE" type="button" textTransform="upper" fontSize="lg" color="darkblueBtn" fontFamily="ProximaCondbld"></Button>
						</div>
						<div className="productMenu">
							<ul>
								{
									productMenu.map((value,index) => <li key={index}><Links linkText={value.text}  color="white" fontSize="lg" fontFamily="ProximaLight"></Links></li>)
								}
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
const productMenu = [
	{
		text: 'Standard lengths 12’ and 24’'
	},
	{
		text: 'Alternate alloys, diameters and lengths are available on request'
	},
	{
		text: 'NitroBrite/Ultrabrite - For a shinier finish, choose NitroBrite (<12 RA) or UltraBrite (< 9 RA)'
	}
]

export default Product;