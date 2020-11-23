import React from 'react';

const CustBg = (props)=>{
    return (
        <div style={{background:'yellow'}}>
            {props.children}
        </div>
    );
}

export default CustBg;