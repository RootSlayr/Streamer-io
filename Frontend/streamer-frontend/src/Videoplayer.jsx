import { useRef, useState, useEffect } from "react";

const WS_URL = "ws://localhost:8000/ws"

function Videoplayer() {
    const videoref = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(WS_URL);
        ws.onopen = () => console.log("Connected to web socket Vid");
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type == "play") {
                videoref.current.currentTime = message.timestamp;
                videoref.current.play();
                setPlaying(true);
            } else if (message.type == "pause") {
                videoref.current.pause();
                setPlaying(false);
            }
        };
        setSocket(ws)

        return () => ws.close();
    }, []);

    const togglePlay = () => {
        if (!socket) return;

        if (playing) {
            socket.send(JSON.stringify({ type: "pause" }));
            videoref.current.pause();
        } else {
            socket.send(
                JSON.stringify({ type: "play", timestamp: videoref.current.currentTime })
            );
            videoref.current.play()
        }
        setPlaying(!playing)
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
