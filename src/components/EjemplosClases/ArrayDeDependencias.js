import React, { useEffect, useState } from "react";

export const ArrayDeDependencias = () => {
	const [suma, setSuma] = useState(1);

	useEffect(() => {
		console.log("Se ejecuta SIEMPRE");
	});

	useEffect(() => {
		console.log("Se ejecuta una unica vez, cuando se monta el componente");
		console.log("LLAMADO A LA API PARA TRAER DATOS");
	}, []);

	useEffect(() => {
		console.log("Se ejecuta la 1era vez y SOLO cuando cambia suma");
	}, [suma]);

	return (
		<div>
			<button onClick={() => setSuma(suma + 1)}>Sumar +1</button>
			Suma = {suma}
		</div>
	);
};
