import React, { useEffect, useState } from "react";
import { DatosPais } from "./DatosPais";

export const ApiPaises = () => {
	const [search, setSearch] = useState("");
	const [country, setCountry] = useState(undefined);

	useEffect(() => {
		if (search === "") return;
		fetch(`https://restcountries.com/v3.1/name/${search}?fullText=true`)
			.then((resp) => resp.json())
			.then((data) => setCountry(data[0]));
	}, [search]);

	console.log(search);

	return (
		<div>
			<select onChange={(e) => setSearch(e.target.value)}>
				<option value={""}>Seleccionar un pais</option>
				<option value={"Argentina"}> Argentina</option>
				<option value={"Brazil"}> Brazil </option>
			</select>
			{country && <DatosPais pais={country} />}
		</div>
	);
};
