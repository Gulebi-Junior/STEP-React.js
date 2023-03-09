import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createProductAction } from "../../actions/productsAction";

function AddProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(createProductAction({ name, price }));
    };

    return (
        <div className="add-product-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Price" onChange={(e) => setPrice(parseInt(e.target.value))} />
                <button>Add Product</button>
            </form>
        </div>
    );
}

export default AddProductForm;
