import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { CgToggleSquare, CgToggleSquareOff } from 'react-icons/cg';
import { GoMute, GoUnmute } from 'react-icons/go';


const INIT_PAD = -10;


export default function Pad({ title, playingState, loopNum }) {
    const [padState, setPadState] = useState(false);
    const [prevLoop, setPrevLoop] = useState(INIT_PAD);
    const [audio, setaudio] = useState(new Audio(`/assets/${title}`));

    useEffect(() => {
        if (playingState && padState && prevLoop >= loopNum - 1) {
            setPrevLoop(loopNum);
            audio.play();
        } else {
            audio.currentTime = 0;
            audio.pause();
        }

    }, [playingState, loopNum]);



    const handleOnClick = () => {
        // update pad state and activiaty
        if (padState) {
            // turn off
            audio.currentTime = 0;
            audio.pause();
            setPrevLoop(INIT_PAD);
        } else {
            // turn on
            setPrevLoop(loopNum)
        }
        setPadState(!padState);
    }



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

                   
                    <Card.Text className='my-auto'>
                        <span className="my-auto mr-3">{playingState ? <GoUnmute /> : <GoMute />}</span>
                        {title}
                    </Card.Text>
                </div>
                <div className="mx-1 ml-auto" >{padState ? <CgToggleSquareOff /> : <CgToggleSquare />}</div>

            </Card.Body>

        </Card>
    );
}
