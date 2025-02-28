import { useRef, useState, useEffect } from "react";

function Videoplayer() {
    const videoref = useRef(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if (videoref.current) {
            if (playing) {
                videoref.pause();
            }
            else {
                videoref.play();
            }
            setPlaying(!playing);
        }
    };

    return (
        <div>
            <video ref={videoref} width="600" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                Your browser does not support Video tag
            </video>
            <br />
            <button onClick={togglePlay}>{playing ? "pause" : "play"}</button>
        </div>
    )
};

export default Videoplayer;
