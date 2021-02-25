import React, { useState, useEffect, useRef } from 'react';
import {  Card } from 'react-bootstrap';
import { CgToggleSquare, CgToggleSquareOff } from 'react-icons/cg';
import { GoMute, GoUnmute } from 'react-icons/go';
const path = require('path');


export default function Pad({ title, playingState, handleOnTimeUpdate, time }) {
    const [padState, setPadState] = useState(false)
    const audioRef = useRef(null);


    useEffect(() => {
        if (playingState && padState ) {
            audioRef.current.play();
        }  else {
            audioRef.current.pause();
        }

    }, [playingState, padState]);


    const handleOnClick = () => {
        setPadState(!padState);
    }


    // const handleOnEnded = () => {
    //     // console.log("pad", title, "ended");
    //     audioRef.current.play();
    // }









    return (
        <Card
            bg={padState ? "info" : "light"}
            text={padState ? "white" : "dark"}
            style={{ width: '90%' }}
            className="mx-auto my-1 text-center"
            onClick={handleOnClick}
        >
            <Card.Body className="row justify-md-content-between justify-lg-content-between justify-content-sm-center mx-1">
                <div>

                    <audio src={`/assets/${title}`}
                        ref={audioRef}
                        // onEnded ={handleOnEnded} 
                        onTimeUpdate={() => handleOnTimeUpdate(audioRef.current.currentTime)}
                        // loop
                    // controls
                    />
                    <Card.Text className='my-auto'>
                        <span className="my-auto mr-3">{playingState ? <GoUnmute /> : <GoMute />}</span>
                        {title}
                    </Card.Text>
                </div>
                    <div  className="mx-1 ml-auto" >{padState ? <CgToggleSquareOff  /> : <CgToggleSquare />}</div>

            </Card.Body>

        </Card>
    );
}
