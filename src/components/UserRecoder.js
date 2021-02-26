import React, { useState } from 'react';
import ReactRecord from 'react-record';
import { Card, Button } from 'react-bootstrap'
import { RiRecordCircleFill } from 'react-icons/ri';


const UserRecoder = ({ props }) => {
    const [bloblURL, setBloblURL] = useState(null);
    const [isRecording, setIsRecording] = useState(false)


    const startRecording = () => {
        // switch mode will start ReactRecord 
        setIsRecording(true);
    }

    const stopRecording = () => {
        // switch mode will stop ReactRecord 
        setIsRecording(false);
    }


    const onStop = (blobObject) => {
        // save the record
        setBloblURL(blobObject.blobURL);
    }


    return (
        <Card
            bg={"light"}
            text={"dark"}
            style={{ width: '90%' }}
            className="mx-auto my-2 text-center"
        >
            <Card.Body className="row justify-content-around mx-1">
                <div className="record-mic my-auto">
                    <ReactRecord
                        record={isRecording}
                        onStop={onStop}
                    >

                        <Button className="mx-2" variant={"success"} onClick={startRecording} >
                            Record
                        </Button>

                        <Button className="mx-2" variant={"danger"} onClick={stopRecording} type="button">
                            Stop
                      </Button>
                        <span className="text-danger mx-3">
                            {isRecording ? <RiRecordCircleFill size={20} /> : null}
                        </span>


                    </ReactRecord>
                </div>
                {bloblURL !== null && <div>
                    <audio
                        controls="controls"
                        src={bloblURL}
                    >
                        <track kind="captions" />
                    </audio>
                </div>
                }

            </Card.Body>
        </Card>
    );
}


export default UserRecoder;