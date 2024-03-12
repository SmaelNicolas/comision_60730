import React from "react";

export const addOnClick = (WrappedComponent, text = "Bienvenidos") => {
	const handleClick = () => {
		alert("Hola desde HOC");
	};

	const AddOnClickComponente = () => {
		return <WrappedComponent onClick={handleClick} text={text} />;
	};

	return AddOnClickComponente;
};
