import React, { useState, useEffect } from "react";
import { useDes } from "../contextAPI/CardContext";
import "../css/Card.css";
import Total from "./Total";
import TotalAmt from "./TotalAmt";
import Shipping from "./Shipping";

const Card = () => {
    const { description, setDescription } = useDes();
    const [totals, setTotals] = useState(0);
    
    useEffect(() => {
        recalculateTotal(description);
    }, [description]);

    const handleQuantityChange = (index, value) => {
        const updatedDescription = { ...description };
        updatedDescription.products[index].quantity = value;
        setDescription(updatedDescription);
        recalculateTotal(updatedDescription);
    };

    const handleRemove = (index) => {
        const updatedDescription = { ...description };
        updatedDescription.products.splice(index, 1);
        setDescription(updatedDescription);
        recalculateTotal(updatedDescription);
    };

    const recalculateTotal = (updatedDescription) => {
        const total = updatedDescription.products.reduce((acc, product) => {
            return acc + (product.price * (product.quantity || 0));
        }, 0);
        setTotals(total);
    };

    return (
        <div className="container">
            {description.products.map((product, index) => (
                <div key={product.id} className="cart container">
                    <div className="image">
                        <img
                            src={product.images}
                            className="img-fluid rounded-start"
                            alt="iphone 13 Pro"
                        />
                    </div>

                    <div className="box1">
                        <h5 className="text card-title fw-bold">{product.title}</h5> <br />
                        <p className="text card-text fw-semibold">{product.subtitle}</p>
                        <p className="text card-text">{product.description}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">Ratings: {product.rating}</small><br />
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>

                    <div className="box2">
                        <div className="price">
                        <input type="number" className="quantity" value={product.quantity || 0}
                        onChange={(e) => {
                        const quantity = parseInt(e.target.value);
                        if (quantity >= 0) {
                        handleQuantityChange(index, quantity);
                        }
                         }}
                           />     
                        <p className="rate">${product.price}</p>
                        </div>
                        <button type="button" className="remove" onClick={() => handleRemove(index)}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <br />
            <br />
            <hr />
            <Total total={totals} />
            <Shipping/>
           <TotalAmt total={totals}/>
        </div>
    );
};

export default Card;
