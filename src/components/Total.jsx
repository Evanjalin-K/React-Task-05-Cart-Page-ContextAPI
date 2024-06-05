import React from "react";
import "../css/Total.css";

const Total = ({ total }) => {

    const formattedTotal = total ? total.toFixed(2) : "0.00";

    return (
        <div className="total container">
            <h6 className="subHeading text-muted">SUBTOTAL:</h6>
            <h6 className="subTotal">${formattedTotal}</h6>
        </div>
    );
};

export default Total;
