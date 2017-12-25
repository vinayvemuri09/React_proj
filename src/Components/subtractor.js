import React,{Component} from 'react';

const Subtractor =({subtract}) => {
    return (
        <div>
            <button className="col-md-4" onClick={subtract}>-</button>
        </div>

    );
};
export default Subtractor;