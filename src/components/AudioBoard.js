import React, { useState  } from 'react';
import { Button } from 'react-bootstrap'


import Pad from './Pad.js'

const AudioBoard = () => {
    const [playingState, setPlayingState] = useState(false);



    // const tracks = ['120_future_funk_beats_25.mp3'];
    const tracks = ['120_future_funk_beats_25.mp3', '120_stutter_breakbeats_16.mp3', 'Bass Warwick heavy funk groove on E 120 BPM.mp3'];

    const handleOnClick = () => {
        setPlayingState(!playingState);
    }


    return (
        <div>


            <h1>AudioBoard</h1>
            <div>
                {tracks.map((track, idx) => {
                    return (
                        <Pad key={idx} title={track} playingState={playingState} />
                    )
                })

                }
            </div>
            <div className='text-center'>
                <Button variant={playingState ? "danger" : "success"} className="mx-1" onClick={handleOnClick}>{playingState ? "Pause" : "Play"}</Button>
            </div>
        </div>
    );
};

export default AudioBoard;