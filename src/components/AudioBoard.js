import Pad from './Pad.js'
import { CardGroup } from 'react-bootstrap'
const path = require('path');

const AudioBoard = () => {
    const tracks = ['song1', 'song2', 'song3'];

    const directoryPath = path.join(__dirname, 'assets');



    return (
        <div>


            <h1>AudioBoard</h1>
            <div>
                {tracks.map((track, idx) => {
                    return (
                        <Pad key={idx} title={track} />
                    )
                })

                }
            </div>
        </div>
    );
};

export default AudioBoard;