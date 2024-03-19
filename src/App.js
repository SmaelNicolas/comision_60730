import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer bienvenida="Hola Coder" />}
					/>
					<Route
						path="category/:idCategory"
						element={<ItemListContainer bienvenida="Hola Coder" />}
					/>
					<Route
						path="item/:idItem"
						element={<ItemDetailContainer />}
					/>
					{/* <Route
							path="/test"
							element={<ItemListContainer bienvenida="Hola Coder" />}
						/> */}
					{/* MAL */}
					{/* <Route
						path="category/teclado"
						element={<ItemListContainer bienvenida="Hola Coder" />}
					/>
					<Route
						path="category/headset"
						element={<ItemListContainer bienvenida="Hola Coder" />}
					/>
					<Route
						path="category/mouse"
						element={<ItemListContainer bienvenida="Hola Coder" />}
					/> */}

					<Route path="/coder" element={<>Coder</>} />
					<Route path="*" element={<>No hay ruta para ese path</>} />
				</Routes>

				{/* <ItemListContainer bienvenida="Hola Coder" /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
