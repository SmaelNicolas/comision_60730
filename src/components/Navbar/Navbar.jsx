import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="containerNav">
			<Link to="/">
				<div>🍀</div>
			</Link>
			<ul className="containerNav--ul">
				<Link className="containerNav--ul--li" to="category/teclado">
					Teclados
				</Link>
				<Link className="containerNav--ul--li" to="category/headset">
					Headsets
				</Link>
				{/* <Nav.Link as={Link}>Abrigos</Nav.Link> */}
				<Link className="containerNav--ul--li" to="category/mouse">
					Mouse Pads
				</Link>
				{/* <NavLink className="containerNav--ul--li" to="test">
					Test
				</NavLink> */}
			</ul>
			<CartWidget />
		</nav>
	);
};
