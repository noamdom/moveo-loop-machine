# Description
This project is part of a home task by Moveo. The project includes a Loop machine which plays track in loops by user control. It also has a record interface. The project deployed on Netlify and you can find it [here](https://pedantic-easley-96a02f.netlify.app/).

# Design
The project components:
* App.js - the main component which holds the whole application.
* Header.js - the screen's head panel, contains the project title and author's name.
* AudioBoard - It holds the 9 pads, the play/pause controllers.
* Pad.js - a single pad component. It contains the pad's track and state.
* UserRecoder.js - manages the recording option.

## Synchronization Description
* AudioBoard component has 'isPlaying' state field - which switches state on click.
* Pad has isPlaying (setPadState) state field too - which switches mode by clicking on the Pad.
* In addition, Pad has a 'PrevLoop' field. It determines if the pad is part of the active pads.
* When  AudioBoard is in 'play' mode and Pad is in 'on' mode, the Pad's audio starts playing the track.
* At the same time, AudioBoard starts a timeout which counts the loop number.
* The main synchronization idea, based on the react hooks - useEffect - principal which renders the audio.play() by each updates in 'loopNum' (as part of the dependency array).
* When a user clicks on a Pad in the middle of the loop it updates the 'PrevLoop' to be numLoop. Just before the next loop, Pad checks if padloop == numloop, if it is true then it renders audio.play() and joins this Pad to all active Pads.



# Libraries
* react-bootrstrap
* react-record
* react-icons


### References
* https://dev.to/ma5ly/lets-make-a-little-audio-player-in-react-p4p
* https://www.npmjs.com/package/react-record
* Moveo Logo - https://jobplanner.co.il/en/company/10/Moveo



