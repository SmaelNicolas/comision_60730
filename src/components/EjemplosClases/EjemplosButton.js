import { useState } from "react";

export const ButtonEjemploSinEstado = () => {
	let stock = 1;

	const sumarStock = () => {
		stock = stock + 1;
		console.log("SUMO STOCK SIN ESTADO");
	};
	return (
		<div>
			<button onClick={sumarStock}>Sumar Stock SIN ESTADO</button>
			{stock}
		</div>
	);
};

export const ButtonEjemploConEstado = ({ text }) => {
	// const { text, text2 } = props;
	// console.log(props);
	const [stock, setStock] = useState(1);
	const [precio, setPrecio] = useState(100);

	const sumarStock = () => {
		setStock(stock + 1);
		console.log("SUMO STOCK cON ESTADO");
	};

	return (
		<div>
			{text}
			<button onClick={sumarStock}>Sumar Stock CON ESTADO</button>
			{stock}
			{precio * stock}
		</div>
	);
};
