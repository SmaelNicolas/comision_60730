import React from "react";

export const modificarProducto = (ProductoRecibido) => {
	return function cambiePrecio({ nombre, precio }) {
		let nuevoPrecio = precio + 500;

		return <ProductoRecibido precio={nuevoPrecio} nombre={nombre} />;
	};
};
