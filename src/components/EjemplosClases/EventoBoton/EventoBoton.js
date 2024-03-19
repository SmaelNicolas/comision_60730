import React from "react";

export const EventoBoton = ({ handleClick }) => {
	// const handleClick = (evento) => {
	// 	console.log(evento);
	// };

	return (
		<button
			onClick={() => handleClick(true)}
			style={{
				left: 0,
				margin: "0 auto",
				padding: "15px 25px",
				position: "absolute",
				right: 0,
				top: "15vh",
				width: 300,
			}}>
			Simple Button
		</button>
	);
};
