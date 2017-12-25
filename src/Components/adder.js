import React,{Component} from 'react';

const Adder =({add}) => {
    return (
        <div>
            <button className="col-md-4" onClick={add}>+</button>
        </div>

    );
};
export default Adder;