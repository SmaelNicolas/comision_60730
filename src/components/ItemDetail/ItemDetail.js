import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ prod }) => {
	return (
		<div>
			{/* PONER INFO DEL PROD */}
			<h3>{prod.title}</h3>
			<img src={prod.img} alt="name" />
			<ItemCount prod={prod} />
		</div>
	);
};
