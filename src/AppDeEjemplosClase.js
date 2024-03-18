// import { useState } from "react";
// import { ApiRnM } from "./components/EjemplosClases/ApiRnM";
// import { ArrayDeDependencias } from "./components/EjemplosClases/ArrayDeDependencias";
// import { CicloDeVida } from "./components/EjemplosClases/CicloDeVida";
// import { HookUseRef } from "./components/EjemplosClases/HookUseRef";
// import { Button } from "./components/EjemplosClases/MicroDesafio2/Button";
import { EventoBoton } from "./components/EjemplosClases/EventoBoton/EventoBoton";
import { Button } from "./components/EjemplosClases/HoC/Button";
import { addOnClick } from "./components/EjemplosClases/HoC/addOnClick";
import { ItemCount } from "./components/EjemplosClases/ItemCount/ItemCount";
import { ApiPaises } from "./components/EjemplosClases/MicroDesafio4/ApiPaises";
import { Producto } from "./components/EjemplosClases/RenderProps/Producto";
import { modificarProducto } from "./components/EjemplosClases/RenderProps/modificarProducto";
import { Comments } from "./components/EjemplosClases/fetch/Comments";
import { Posts } from "./components/EjemplosClases/fetch/Posts";
import { Users } from "./components/EjemplosClases/fetch/Users";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// import { Promises } from "./components/EjemplosClases/Promise";
import { Navbar } from "./components/Navbar/Navbar";
// import {
// 	ButtonEjemploConEstado,
// 	ButtonEjemploSinEstado,
// } from "./components/EjemplosClases/EjemplosButton";

function AppDeEjemplosClase() {
	// const myStyles = {
	// 	background: "red",
	// 	color: "yellow",
	// 	padding: "20px 60px",
	// 	textAlign: "center",
	// 	cursor: "grab",
	// };
	// const [toggle, setToggle] = useState(false);

	// const ButtonHoC = addOnClick(Button, "HOLA");

	const ProductoModificado = modificarProducto(Producto);

	return (
		<div className="App">
			{/* <Navbar />
			<ItemListContainer bienvenida="Hola Coder" /> */}

			{/* EJEMPLOS DE CLASE */}
			{/* <ApiRnM /> */}
			{/* <Promises /> */}
			{/* <ArrayDeDependencias /> */}
			{/* <button onClick={() => setToggle(!toggle)}>
				Montar y Desmontar
			</button> */}
			{/* {toggle ? <CicloDeVida /> : ""} */}
			{/* <HookUseRef /> */}
			{/* <ButtonEjemploSinEstado></ButtonEjemploSinEstado>
			<ButtonEjemploConEstado text="Hola" text2="HOLA 2" /> */}
			{/* <Button
				background="red"
				label="BUtton Alert"
				func={() => alert("HOLA")}>
				HOLA
			</Button> */}
			{/* <ApiPaises /> */}
			{/* <ItemCount /> */}
			{/* <Comments />
			<Users />
			<Posts /> */}
			{/* <Button />
			<ButtonHoC /> */}
			{/* <Producto nombre="Producto 1" precio={1000} /> */}
			{/* <ProductoModificado nombre="Producto 2" precio={1000} /> */}
			<EventoBoton />
		</div>
	);
}

export default AppDeEjemplosClase;
