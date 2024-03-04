import React from "react";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="containerNav">
			<div>🍀</div>
			<ul className="containerNav--ul">
				<li className="containerNav--ul--li">Teclados</li>
				<li className="containerNav--ul--li">Mouses</li>
				<li className="containerNav--ul--li">Pads</li>
			</ul>
			<CartWidget />
		</nav>
	);
};
