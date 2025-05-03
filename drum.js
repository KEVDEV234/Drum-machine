const { useRef, useEffect } = React;

function Drum({ keyTrigger, sound, label, setDisplay }) {
    const audioRef = useRef(null);

    function playRef() {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setDisplay(label);
        }
    }

    useEffect(() => {
        const handlecgange = (e) => {
            if (e.key.toUpperCase() === keyTrigger ) {
                playRef();
            }
        }
        window.addEventListener('keydown', handlecgange);

        return () => {
            window.removeEventListener('keydown', handlecgange)
        }

    },
     [keyTrigger])

    return(
    <div onClick={playRef} className='drum-pad' id={label}>
        {keyTrigger}
        <audio className='clip' ref={audioRef} src={sound} id={keyTrigger} ></audio>
    </div>
)
}