import logo from './logo.svg';
const socket = new WebSocket("ws://localhost:8080")
function App() {
    // Connection opened
  socket.addEventListener("open", event => {
    socket.send("Connection established")
  });

  // Listen for messages
  socket.addEventListener("message", event => {
    console.log("Message from server ", event.data)
  });
  const handleClick = () => {
    socket.addEventListener("open", event => {
      socket.onclose("SOCKET")
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => handleClick()}>SOCKET</button>
      </header>
    </div>
  );
}

export default App;
