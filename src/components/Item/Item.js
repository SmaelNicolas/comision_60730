import React from "react";

export const Item = ({ producto }) => {
	console.log(producto);
	return <div>{producto.title}</div>;
};
