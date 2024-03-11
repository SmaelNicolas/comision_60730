import React, { useEffect, useState } from "react";
import { products } from "../../data/data";
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.css";

export const ItemListContainer = (props) => {
	const [myProducts, setMyProducts] = useState([]);
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 3000);
	});
	useEffect(() => {
		myPromise.then((data) => {
			setMyProducts(data);
		});
	}, []);

	console.log(myProducts);

	return (
		<div className="container--cards">
			<ItemList products={myProducts} />
		</div>
	);
};
