import React from "react";

export const Button = (props) => {
	console.log(props);
	return (
		<button onClick={props.func} style={props.styles} className="">
			{props.children}
		</button>
	);
};
