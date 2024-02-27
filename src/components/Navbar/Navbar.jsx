import React from "react";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="containerNav">
			<div>🍀</div>
			<ul className="containerNav">
				<li>Teclados</li>
				<li>Mouses</li>
				<li>Pads</li>
			</ul>
			<CartWidget />
		</nav>
	);
};
