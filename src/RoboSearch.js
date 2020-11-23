import React from 'react';

const RoboSearch = ({ searchRobots })=>{
    return (
        <div className="pa2">
            <input
                className="pa2 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search"
                style={{outline:'none'}}
                onChange={searchRobots}
            />
        </div>
    );
}

export default RoboSearch;