import React from "react";
import { useCount } from "../hooks/useCount";
import "./itemCount.css";

export const ItemCount = ({ prod }) => {
	console.log(prod)
	const { count, decrement, increment, addToCart } = useCount();

	return (
		<div className="container--itemCount">
			<div className="container--itemCount--buttons">
				<button className="itemCount--button" onClick={decrement}>
					➖
				</button>
				<span className="itemCount--count">{count}</span>
				<button className="itemCount--button" onClick={increment}>
					➕
				</button>
			</div>
			<button
				className="itemCount--buttonCart"
				onClick={() => addToCart(prod)}>
				Agregar al 🛒
			</button>
		</div>
	);
};
