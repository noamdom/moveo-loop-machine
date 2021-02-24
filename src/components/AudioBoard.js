import Pad from './Pad.js'
import { CardGroup } from 'react-bootstrap'
const fs = require('fs');
const path = require('path');

const AudioBoard = () => {
    const tracks = ['song1', 'song2', 'song3'];

    const directoryPath = path.join(__dirname, 'assets');


    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file);
        });
    });



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