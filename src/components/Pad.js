import { Card } from 'react-bootstrap';



export default function Pad({ title }) {


    return (


        <Card
            bg={'primary'}
            text={'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Body>
                    

                    <audio src={"/assets/120_future_funk_beats_25.mp3"} controls  autoPlay  loop />

            </Card.Body>
        </Card>
    );
}
