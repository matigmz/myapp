import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './container/ItemListContainer'
import HomePage from './container/homePage/HomePage'
import ProductsPage from './container/productsPage/ProductsPage'
import AppRouter from './container/AppRouter/AppRouter';

function App() {
    return ( < div className = "App" >
        <NavBar/>
        <AppRouter/>

    </div >

    );
}

export default App;
