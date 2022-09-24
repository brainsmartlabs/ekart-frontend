import React from "react";
import "./Products.css";
import data from "../../backend/data";

function Products({handleAddProduct}) {
    const { productItems } = data;
    return (
        <div className="products">
            {productItems.map(item => {
                return (
                    <div className="card" key={item.name}>
                        <div>
                            <img className="product-image" src={item.image} />
                        </div>
                        <div>
                            <h2 className="product-name">
                                {item.name}
                            </h2>
                        </div>
                        <div className="product-price">
                            Rs.{item.price}/-
                        </div>
                        <div>
                            <button className="product-add-button"
                            onClick={() => handleAddProduct(item)}>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Products;