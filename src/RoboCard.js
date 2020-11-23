import React from 'react';

const RoboCard = (props)=>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow" id={props.robot.id}>
            <img src={`https://robohash.org/${props.robot.id}?200x200`} alt='a robot img'/>
            <h2>{props.robot.name}</h2>  {/*javascript inside template*/}
            <h3>{props.robot.email}</h3>
        </div>
    );
}

export default RoboCard;