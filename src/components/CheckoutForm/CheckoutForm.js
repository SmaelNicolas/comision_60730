import React, { useContext, useState } from "react";
import { CartContext } from "../../contex/CartContext";
import { createBuyOrder } from "../../services/firebase";
import "./checkoutForm.css";

export const CheckoutForm = () => {
	const { cart } = useContext(CartContext);

	const [idOrder, setIdOrder] = useState();

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		items: "",
		date: "",
	});

	const handleChange = (event) => {
		const inputValue = event.target.value;
		const inputName = event.target.name;

		setUserData({ ...userData, [inputName]: inputValue });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userData.name === "" || userData.email === "") return;

		let order = {
			name: userData.name,
			email: userData.email,
			items: cart,
			date: new Date(),
		};

		console.table(order);
		createBuyOrder(order).then((data) => {
			setIdOrder(data);
		});
	};

	if (idOrder) return <div>{idOrder}</div>;

	return (
		<div className="form--container">
			<form className="form" onSubmit={handleSubmit}>
				<label className="label">
					Nombre
					<input
						className="input"
						type="text"
						placeholder="Ingrese su nombre"
						name="name"
						value={userData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<label className="label">
					Email
					<input
						className="input"
						type="email"
						placeholder="Ingrese su email"
						name="email"
						value={userData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit" className="custom-btn btn-3">
					<span>Enviar</span>
				</button>
			</form>
		</div>
	);
};
