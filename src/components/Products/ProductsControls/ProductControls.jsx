import React from 'react';

const ProductControls = (props) => (
    <div>
    <button onClick={props.subtract}>-</button>
    <input className="quantity" min="0" value="1"  type="number" />
    <button onClick={props.add}>+</button>
    </div>
);

export default ProductControls;