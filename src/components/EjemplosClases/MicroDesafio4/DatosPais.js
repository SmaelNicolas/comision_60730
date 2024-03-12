import React from "react";

export const DatosPais = ({ pais }) => {
	return (
		<div>
			<div>Capital : {pais.capital} </div>
			<img
				style={{ width: 300, height: 180 }}
				src={pais.flags.svg}
				alt="img"
			/>
		</div>
	);
};
