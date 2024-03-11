import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemListContainer bienvenida="Hola Coder" />
		</div>
	);
}

export default App;
