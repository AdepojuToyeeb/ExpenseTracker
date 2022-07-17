import React from "react";
import './Expenses.css'

const Expenses = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear();
    return (
        <div className="data">
            <div className="data-content">
                <p className="data-name">{props.name}</p>
                <div className="data-date">
                    <div>{month}</div>
                    <div> {year}</div>
                    <div> {day}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Expenses 