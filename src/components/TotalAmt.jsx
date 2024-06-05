import React from "react";
import "../css/TotalAmt.css";

const TotalAmt = ({ total }) => {
    const formattedTotal = total ? total.toFixed(2) : "0.00";

    return (
        <div className='totalAmt container'>
            <h6 className="Tot">Total:</h6>
            <h6 className="amount">${formattedTotal}</h6>
        </div>
    );
};

export default TotalAmt;
