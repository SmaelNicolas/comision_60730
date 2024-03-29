import React, { useState } from "react";
import "./inputVocals.css";

const vocals = ["a", "e", "i", "o", "u"];

export const InputVocals = () => {
	// VERSION CORTA echa en clase
	// const handleKeyDown = (e) => {
	// 	const existe = vocals.includes(e.key);
	// 	console.log(e.key);
	// 	if (existe) e.preventDefault();
	// };

	// return (
	// 	<div className="inputVocal--container">
	// 		<input type="text" onKeyDown={handleKeyDown} />
	// 	</div>
	// );

	// VERSION LARGA
	const [keyPressed, setKeyPressed] = useState();
	const [keyCode, setKeyCode] = useState();
	const [time, setTime] = useState();

	const handleInput = (e) => {
		setKeyPressed(e.key);
		setKeyCode(e.keyCode);
		setTime(e.timeStamp);
		const search = vocals.includes(e.key);
		if (search) e.preventDefault();
	};

	return (
		<div className="inputVocal--container">
			<h2 className="inputVocal--title">Input sin Vocales</h2>
			<input
				className="inputVocal--input"
				type="text"
				onKeyDown={handleInput}
			/>
			<div className="inputVocal--output">Tecla : {keyPressed}</div>
			<div className="inputVocal--output">
				Codigo de Tecla : {keyCode}
			</div>
			<div className="inputVocal--output">
				Hora <br /> {Date(time)}
			</div>
		</div>
	);
};
