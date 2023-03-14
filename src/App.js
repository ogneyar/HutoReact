
import { Button } from 'react-bootstrap';

import logo from './assets/logo.svg';

import './styles/App.css';


function App() {
    return (
        <div className="App">
            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">ХуторянинЪ</h1>
            </header>

            <Button variant="danger">Danger</Button>
            <Button variant="secondary">Secondary</Button>
        </div>
    );
}

export default App;
