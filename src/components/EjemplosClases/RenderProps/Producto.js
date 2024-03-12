import React from "react";

export const Producto = ({ nombre, precio }) => {
	return (
		<div>
			<div>Nombre : {nombre}</div>
			<div>Precio : {precio}</div>
		</div>
	);
};
