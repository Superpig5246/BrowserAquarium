// import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
//import { resourceLimits } from 'worker_threads';

import React, { useState, useEffect, useRef } from 'react';

const Fish = ({ incrementCount, fish, value = 1 }) => {
    const [pos, setPos] = useState([Math.random() * 95, Math.random() * 100]);
    const [velocity, setVelocity] = useState([Math.random() * .1 - .05, Math.random() * .1 - .05]);
    const maxVelocity = .1

    useEffect(() => {
        const updatePos = async (pos, velocity) => {
            while (true) {
                let newPos = [pos[0] + velocity[0], pos[1] + velocity[1]];
                
                // Check boundaries to keep fish within the window
                newPos[0] = (newPos[0] + 100) % 100;
                newPos[1] = (newPos[1] + 100) % 100;

                setPos(newPos);
                pos = newPos;

                if (Math.random() > .99) {
                    let newVelocity = [velocity[0] + Math.random() * 0.02 - 0.01, velocity[1] + Math.random() * 0.02 - 0.01]

                    if (newVelocity[0] > maxVelocity) {
                        newVelocity[0] = maxVelocity
                    }
                    if (newVelocity[1] > maxVelocity) {
                        newVelocity[1] = maxVelocity
                    }

                    setVelocity(newVelocity)
                    velocity = newVelocity
                }

                await new Promise(resolve => setTimeout(resolve, 10)); // Adjust speed here
            }
        };


        updatePos(pos, velocity);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const moveStyles = {
        margin: 0,
        padding: 0,
        border: 0,
        position: 'absolute',
        left: `${pos[0]}vw`,
        top: `${pos[1]}vh`,
        transform: `rotate(${Math.atan2(-velocity[1], -velocity[0])}rad)`, 
    };

    return <img onClick={() => incrementCount(value)} style={moveStyles} src={fish} alt="Fish" />;
};

export default Fish;

/*
const Fish = ({incrementCount, fish}) => {
    
    const [pos, setPos] = useState([Math.random() * 95, Math.random() * 100])
    const [velocity, setVelocity] = useState([1, 1])

    useEffect(() => {
        async function updatePos(pos, velocity) {
                while (true) {
                    let newPos = [pos[0] + velocity[0], pos[1] + velocity[1]]
                    console.log("hi")
                    setPos(newPos)
                    pos = newPos

                    await new Promise(resolve => setTimeout(resolve, 10000))
                }
            }
        updatePos(pos, velocity)
    })

    const moveStyles = useRef({
        margin: 0,
        padding: 0,
        border:0,
        position: 'absolute',
        left: `${pos[0]}vw`,
        top: `${pos[1]}vh`,
        transform: 'scaleX(-1)'
    });
    
    return (<img onClick = {incrementCount} style={moveStyles.current} src={fish} />)
}



export default Fish

*/