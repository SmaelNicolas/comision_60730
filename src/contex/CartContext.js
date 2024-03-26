import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addProduct = (prod, count) => {
        //PRIMERO TIENE QUE CORROBOAR QUE NO EXISTA EN EL CARRITO
        // SI NO EXISTE
		setCart([...cart, { ...prod, quantity: count }]);

        // SI EXISTE , TIENE QUE SUMAR CANTIDADES
	};

	const removeProduct = () => {
        // BUSCAR EL PRODUCTO (UNO SOLO) EN EL CARRITO y eliminarlo
    };

	const emptyCart = () => {
		setCart([]);
	};

    const contarCantidad=() =>{
        // Recorrer el carrito y sumar todas las cantidades de cada producto
    }

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<CartContext.Provider
			value={{ cart, addProduct, removeProduct, emptyCart }}>
			{children}
		</CartContext.Provider>
	);
};
