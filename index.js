// drumData.js
const { useRef, useEffect, useState } = React;

const drumPads = [
    {
      keyTrigger: 'Q',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      label: 'Heater 1',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'W',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      label: 'Heater 2',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'E',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      label: 'Heater 3',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'A',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      label: 'Heater 4',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'S',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      label: 'Clap',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'D',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      label: 'Open HH',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'Z',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      label: 'Kick n Hat',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'X',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      label: 'Kick',
      class: 'drum-pad',
      audioClass: 'clip'
    },
    {
      keyTrigger: 'C',
      sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      label: 'Closed HH',
      class: 'drum-pad',
      audioClass: 'clip'
    }
  ];

function App() {
    const [display, setDisplay] = useState('');

    return(<>
    <div id="drum-machine">
        <div id="display">{display}</div>
    {
        drumPads.map((pad) => (
            <Drum 
            keyTrigger={pad.keyTrigger}
            sound={pad.sound}
            label={pad.label}
            setDisplay={setDisplay}
            />
        ))
    }
    </div>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)