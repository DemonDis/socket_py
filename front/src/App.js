import logo from './logo.svg';
import MessageSocket from './components/MessageSocket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MessageSocket/>
      </header>
    </div>
  );
}

export default App;
