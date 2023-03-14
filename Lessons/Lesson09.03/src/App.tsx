import { AddProductForm, Counter, PostsList, ProductsList, Spinner, UsersList } from "./components";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
    const loading = useSelector<RootState, boolean>((state) => state.loader.loading);

    return (
        <div className="app-container">
            <h1>Redux</h1>
            {/* <Counter /> */}
            {/* <ProductsList />
            <AddProductForm />
            <UsersList />
            {loading && <Spinner />} */}
            <PostsList />
        </div>
    );
}

export default App;
