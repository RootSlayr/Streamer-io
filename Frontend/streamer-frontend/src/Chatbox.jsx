import {useState} from "react";

function Chatbox(){
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if(input.trim()){
            setMessages([...messages, input]);
            setInput("");
        }
    };

    return(
        <div style={{border:"1px solid #ccc", padding:"10px", width:"300px"}}>
            <h3>Chat</h3>
            <div style = {{maxHeight:"150px",overflowY:"auto"}}>
                {messages.map((msg, index)=>(
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