import React from "react";

// a simple Input component
export default ({ name, label, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input id={ name } className="form-control" value={value} onChange={onChange} />
    </div>
);
