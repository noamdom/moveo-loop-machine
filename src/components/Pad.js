import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

const path = require('path');


export default function Pad({ title, playingState }) {
    const trackPath = path.join('assets', title);
    const [padState, setPadState] = useState(false)
    const audioRef = useRef(null);

    // useEffect(() => {
    //     if (padState ) {
    //         audioRef.current.pause();
    //     } else {
    //         audioRef.current.play();
    //     }
    // }, [padState]);


    useEffect(() => {
        if(playingState && padState) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();

        }

    }, [playingState , padState]);


    const handleOnClick = () => {
        setPadState(!padState);
    }




    return (
        <Card
            bg={'primary'}
            text={'white'}
            style={{ width: '50%' }}
            className="mx-auto my-2 text-center"
        >
            <Card.Body>
                <audio src={"/assets/120_future_funk_beats_25.mp3"} ref={audioRef} loop />
                <Card.Text>
                    {title}
                </Card.Text>



            </Card.Body>
            <Card.Footer>
                <Button variant={padState ? "danger" : "success"} className="mx-1" onClick={handleOnClick}>{padState ? "off" : "on"}</Button>
                {/* <Button variant="danger" className="mx-1">Off</Button> */}
            </Card.Footer>
        </Card>
    );
}
