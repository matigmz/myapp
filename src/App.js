import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './container/AppRouter/AppRouter';
import { Navbar } from 'react-bootstrap';

function App() {
    return ( < div className = "App" >
        <NavBar/>
        <AppRouter/>

    </div >

    );
}

export default App;
