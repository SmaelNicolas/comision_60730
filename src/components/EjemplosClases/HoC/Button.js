import React from "react";

export const Button = ({ onClick, text = "Bienvenidos" }) => {
	return <button onClick={onClick}>{text}</button>;
};
