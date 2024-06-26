import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { getProducts, getProductsByCategory } from "../../services/firebase";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import "./itemListContainer.css";

export const ItemListContainer = (props) => {
	const { idCategory } = useParams();
	const [loading, setLoading] = useState(true);

	// console.log(idCategory);

	const [myProducts, setMyProducts] = useState([]);
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 1500);
	});
	useEffect(() => {
		setLoading(true);
		
		const customNameFunction = idCategory
			? getProductsByCategory
			: getProducts

			customNameFunction(idCategory)
				.then((data) => {
					setMyProducts(data);
				})
				.finally(() => setLoading(false));
	}, [idCategory]);

	if (loading) return <Loader />;

	return (
		<div className="container--cards">
			<ItemList products={myProducts} />
		</div>
	);
};
