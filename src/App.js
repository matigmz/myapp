import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './container/ItemListContainer'
import HomePage from './components/HomePage'
import ProductsPage from './components/ProductsPage'

function App() {
    return ( < div className = "App" >
        <Router>
        <NavBar/>
        <ItemListContainer/>

        <Switch>

            <Route exact path="/">
            <HomePage/>
            </Route>

            <Route path='/productos'>
                <ProductsPage/>
            </Route>

        </Switch>

        </Router> </div >

    );
}

export default App;
