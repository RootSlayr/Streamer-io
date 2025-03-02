import { useState, useEffect } from "react";

const WS_URL = "ws://localhost:8000/ws"

function Chatbox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const ws = new WebSocket(WS_URL);
        ws.onopen = () => console.log("Connected to WebSocket");
        ws.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };
        setSocket(ws);

        return () => ws.close();
    }, []);

    const sendMessage = () => {
        if (input.trim() && socket) {
            // setMessages([...messages, input]);
            socket.send(input)
            setInput("");
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
            <h3>Chat</h3>
            <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a message...">
            </input>
            <button onClick={sendMessage}>Send</button>
        </div>
    );

}

export default Chatbox;