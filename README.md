# Description
* This project is part of home task from Moveo
* THe project inculde:
    * Loop machine - which playing tracks in loops by user control.
    * Reocred Option.
* The project deployed to Netlify and you can find it [here:]('https://pedantic-easley-96a02f.netlify.app/').

# Design:
This project conatin 5 components:
*  App.js - The Main component which hold the whole application
* Header.js - The screen's head panel , conatian the project title, auther numae
* AudioBoard - The main part of this task, it holds the 9 pads, and the play/pause controlres
* Pad.js - A single pad compnenet. It conatin the pad's track and state

## synchronization description:
* AudioBoard components has 'isPlaying' state field - which switches state, on click.
* Pad has isPlaying (setPadState) state field too - which switch mode by clicking on the Pad.
* In addition, Pad has a PrevLoop field - to determine if the pad is part of the active pads.
* In the case of AudioBoard in 'Play' mode and Pad in 'On' mode, the pad's audio starts playing the track.
* At the same time, AudioBoard starts timeout which counts the loop number.
* The main synchronization idea, based on the react hooks - useEffect - principal which renders the audio.play() by each update in 'loopNum' (as part of the dependency array).
* If we click on a Pad in the middle of the loop it updates the padLoop to be numLoop and at the next loop while we check if padloop == Numloop, the answer will yes, and then we render audio.play() and join this Pad to all active Pads.


# libraries
* react-bootrstrap
* bootsrap


### Refernces
* https://dev.to/ma5ly/lets-make-a-little-audio-player-in-react-p4p
* https://reactjsexample.com/a-react-component-with-render-prop-that-can-be-used-to-record-audio-video/




