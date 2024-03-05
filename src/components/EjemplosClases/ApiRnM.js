import React, { useEffect, useState } from "react";

export const ApiRnM = () => {
	const [chars, setChars] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch("https://rickandmortyapi.com/api/character")
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					setChars(data.results);
				});
		}, 3000);
	}, []);

	return (
		<div>
			Cantidad de personajes = {chars.length}
			{chars.map((ch) => (
				<div key={ch.id}>
					<div>{ch.status}</div>
					{ch.name}
				</div>
			))}
		</div>
	);
};
