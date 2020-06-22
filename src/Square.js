import React from 'react';
import './styles.css';


function Square({onClick, value, highlightWinner, enable}) {
    const disableClick = enable ? onClick : null;
    const className = "square" + (highlightWinner ?  "highlight" : "");
return <button className ={className} onClick={disableClick}>{value}</button>
}

export default Square;