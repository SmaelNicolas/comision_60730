import React, { useEffect } from "react";

export const CicloDeVida = () => {
	console.log("1 = Se monta el componente");

	useEffect(() => {
		console.log("2 = Se ejecuta el useEffect");

		const handleClick = () => {
			console.log("Click");
		};

		window.addEventListener("click", handleClick);
		return () => {
			console.log("5 = Se limpiar el componente");
			window.removeEventListener("click", handleClick);
		};
	});

	console.log("3 = Se saltea el useEffect ");

	return (
		<div>
			CicloDeVida
			{console.log("4 = Ejecuta el return")}
		</div>
	);
};
