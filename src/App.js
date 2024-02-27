import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
// import {
// 	ButtonEjemploConEstado,
// 	ButtonEjemploSinEstado,
// } from "./components/EjemploBoton/EjemplosButton";
// import { Button } from "./components/MicroDesafio2/Button";

function App() {
	// const myStyles = {
	// 	background: "red",
	// 	color: "yellow",
	// 	padding: "20px 60px",
	// 	textAlign: "center",
	// 	cursor: "grab",
	// };

	return (
		<div className="App">
			<Navbar />
			<ItemListContainer bienvenida="Hola Coder" />
			{/* <ButtonEjemploSinEstado></ButtonEjemploSinEstado>
			<ButtonEjemploConEstado text="Hola" text2="HOLA 2" /> */}
			{/* <Button
				background="red"
				label="BUtton Alert"
				styles={myStyles}
				func={() => alert("HOLA")}>
				HOLA
			</Button> */}
		</div>
	);
}

export default App;
