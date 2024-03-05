import React, { useRef, useState } from "react";

export const HookUseRef = () => {
	const divRef = useRef(null);

	const [suma, setSuma] = useState(0);
	const countRef = useRef(0);
	countRef.current++;

	const handleClick = () => {
		console.log(divRef);
		divRef.current.innerHTML = "Modificado usando useRef";
	};

	return (
		<div>
			<button onClick={handleClick}>Modificar Elemento</button>
			<div ref={divRef}> HOOK USE REF</div>

			<button onClick={() => setSuma(suma + 1)}>Suma</button>
			<div>Valor Suma = {suma}</div>
			<div> Renderizados = {countRef.current}</div>
		</div>
	);
};
