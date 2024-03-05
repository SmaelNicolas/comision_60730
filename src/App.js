// import { useState } from "react";
// import { ApiRnM } from "./components/EjemplosClases/ApiRnM";
// import { ArrayDeDependencias } from "./components/EjemplosClases/ArrayDeDependencias";
// import { CicloDeVida } from "./components/EjemplosClases/CicloDeVida";
// import { HookUseRef } from "./components/EjemplosClases/HookUseRef";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// import { Promises } from "./components/EjemplosClases/Promise";
import { Navbar } from "./components/Navbar/Navbar";
// import {
// 	ButtonEjemploConEstado,
// 	ButtonEjemploSinEstado,
// } from "./components/EjemplosClases/EjemplosButton";
// import { Button } from "./components/MicroDesafio2/Button";

function App() {
	// const myStyles = {
	// 	background: "red",
	// 	color: "yellow",
	// 	padding: "20px 60px",
	// 	textAlign: "center",
	// 	cursor: "grab",
	// };
	// const [toggle, setToggle] = useState(false);

	return (
		<div className="App">
			{/* PROYECTO */}
			<Navbar />
			<ItemListContainer bienvenida="Hola Coder" />

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
		</div>
	);
}

export default App;
