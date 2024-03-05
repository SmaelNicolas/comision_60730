import React, { useEffect } from "react";

const myProducts = [
	{
		id: "string",
		name: "string",
		description: "string",
		price: 1,
		stock: 2,
		category: "teclado",
	},
];

export const Promises = () => {
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (myProducts.length > 0) {
				resolve("La promesa se completo");
			} else {
				reject("La promesa fue rechazada");
			}
		}, 3000);
	});

	useEffect(() => {
		console.log(myPromise);
		myPromise
			.then((resp) => {
				if (resp.includes("completo"))
					throw new Error("Tiene la palabra completo");

				console.log(resp);
				console.log(myPromise);
			})
			.catch((err) => {
				console.log(err);
				console.log(myPromise);
			})
			.finally(() => console.log("Siempre se ejecuta"));
	}, []);

	return <div>Promises</div>;
};
