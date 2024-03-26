import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";

export const CartWidget = () => {
	const {cart} = useContext(CartContext)
	return (
		<Link to={"/cart"}>
			<div>{cart.length}🛒</div>
		</Link>
	);
};
