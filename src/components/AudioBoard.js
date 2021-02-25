import React, { useState } from 'react';
import { Button } from 'react-bootstrap'


import Pad from './Pad.js'

const AudioBoard = () => {
    const globalTime = 8.045688
    const [playingState, setPlayingState] = useState(false);
    const [time, setTime] = useState(0);



    const tracks = [
        '120_future_funk_beats_25.mp3',
        '120_stutter_breakbeats_16.mp3',
        'Bass Warwick heavy funk groove on E 120 BPM.mp3',
        'electric guitar coutry slide 120bpm - B.mp3',
        'FUD_120_StompySlosh.mp3',
        'GrooveB_120bpm_Tanggu.mp3',
        'MazePolitics_120_Perc.mp3',
        'PAS3GROOVE1.03B.mp3',
        'SilentStar_120_Em_OrganSynth.mp3'
    ];

    const handleOnClick = () => {
        setPlayingState(!playingState);
    }


    const handleOnTimeUpdate = (currentTime) => {
        setTime(globalTime - currentTime)
        // console.log(time);
    }


    return (
        <div>


            <h1>AudioBoard</h1>
            <div>
                {tracks.map((track, idx) => {
                    return (
                        <Pad key={idx} 
                            title={track} 
                            playingState={playingState} 
                            handleOnTimeUpdate = {handleOnTimeUpdate}
                            time = {time}
                            
                            />
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