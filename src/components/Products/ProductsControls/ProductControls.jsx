import React from 'react';

export default function ProductControls(props) {
    return (
        <div>
        <button onClick={props.subtract}>-</button>
        <input style={{width: '4em'}} placeholder="1" min="0" value={props.value} name="count"  type="number" onChange={props.change} />
        <button onClick={props.add}>+</button>
        </div>
    )
}