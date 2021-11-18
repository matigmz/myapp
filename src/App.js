import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './container/ItemListContainer'

function App() {
    return ( < div className = "App" >
        <Router>
        <NavBar/>
        <ItemListContainer/>
        </Router> </div >

    );
}

export default App;
