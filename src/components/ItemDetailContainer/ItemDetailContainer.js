import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
	const { idItem } = useParams();
	const [loading, setLoading] = useState(true);

	const [myProduct, setMyProduct] = useState({});
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 4500);
	});
	useEffect(() => {
		// CUANDO COMPAREN EL ID DE LA URL Y EL DE SUSPRODUCTOS CONTROLAR QUE AMBOS SEAN DEL MISMO TIPO (STRING O NUMBER)
		// EL VALOR idItem QUE VIENE DE LA URL ES DE TIPO STRING PESE A SER UN NUMERO
		myPromise
			.then((data) => {
				setMyProduct(data.find((prod) => prod.id === Number(idItem)));
			})
			.finally(() => setLoading(false));
	}, [idItem]);

	console.log(loading);

	if (loading) return <Loader />;

	// return <div>{loading ? <Loader /> : <ItemDetail prod={myProduct} />}</div>;
	// return (
	// 	<div>
	// 		{loading && <Loader />}
	// 		{ !loading   &&  <ItemDetail prod={myProduct} />}
	// 	</div>
	// );
	return (
		<div>
			<ItemDetail prod={myProduct} />
		</div>
	);
};
