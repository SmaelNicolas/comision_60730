import { useContext } from "react";
import { CartContext } from "../../contex/CartContext";
import { CartItem } from "../CartItem/CartItem";
import "./cartItemList.css";

export const CartItemList = () => {
	const {cart} = useContext(CartContext);
    
	return (
		<div className="ItemOnCartContainerList">
			{cart.map((product) => (
				<div
					key={product.id + "onCart"}
					className="ItemOnCartContainerProduct">
					<CartItem
						id={product.id}
						img={product.img}
						title={product.title}
						quantity={product.quantity}
						price={(product.price * product.quantity).toFixed(2)}
					/>
				</div>
			))}
		</div>
	);
}

