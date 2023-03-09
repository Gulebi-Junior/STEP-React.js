import { AddProductForm, Counter, ProductsList } from "./components";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <h1>Redux</h1>
            {/* <Counter /> */}
            <ProductsList />
            <AddProductForm />
        </div>
    );
}

export default App;
