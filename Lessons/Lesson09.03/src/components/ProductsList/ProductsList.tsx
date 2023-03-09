import { RootState } from "@/store";
import React from "react";
import { IProduct } from "../../types";
import { useSelector } from "react-redux";

function ProductsList() {
    const products = useSelector<RootState, IProduct[]>((state) => state.products.list);

    return (
        <div className="products-list-container">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id}. {product.name} - {product.price}тг
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;
