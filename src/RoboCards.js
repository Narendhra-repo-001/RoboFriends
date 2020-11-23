import React from 'react';
import RoboCard from './RoboCard';

const RoboCards = ({ robots })=>{
    let robotCards = robots.map((robot)=>{return <RoboCard robot={robot}  key={robot.id}/>});//template inside javascript
    return <div>{robotCards}</div>
}

export default RoboCards;