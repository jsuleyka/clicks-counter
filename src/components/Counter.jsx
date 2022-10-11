import React from "react";
import '../stylesheets/counter.css'

function Counter(props) {
    return(
        <div className="counter">
            {props.numClicks}
        </div>
    );
}

export default Counter;