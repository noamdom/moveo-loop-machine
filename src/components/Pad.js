import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

const path = require('path');


export default function Pad({ title, playingState, handleOnTimeUpdate, time }) {
    const trackPath = path.join('assets', title);
    const [padState, setPadState] = useState(false)
    const audioRef = useRef(null);





    useEffect(() => {
        if (playingState && padState && time === 0) {
            audioRef.current.play();
        } else if (playingState && padState && time > 0.0) {
            setTimeout(() => audioRef.current.play(), time * 1000);
        } else {
            audioRef.current.pause();
        }

    }, [playingState, padState, time]);


    const handleOnClick = () => {
        console.log(audioRef.current.duration);
        setPadState(!padState);
    }


    // const handleOnEnded = () => {
    //     // console.log("pad", title, "ended");
    //     audioRef.current.play();
    // }









    return (
        <Card
            bg={'primary'}
            text={'white'}
            style={{ width: '80%' }}
            className="mx-auto my-2 text-center"
        >
            <Card.Body className="row justify-content-between mx-1">
                <audio src={`/assets/${title}`}
                    ref={audioRef}
                    // onEnded ={handleOnEnded} 
                    onTimeUpdate={() => handleOnTimeUpdate(audioRef.current.currentTime)}
                    loop
                // controls

                />
                <Card.Text className='my-auto'>
                    {title}
                </Card.Text>
                <Button variant={padState ? "danger" : "success"} className="mx-1" onClick={handleOnClick}>{padState ? "off" : "on"}</Button>



            </Card.Body>

        </Card>
    );
}
