import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import HomePage from '../homePage/HomePage';
import ProductsPage from '../productsPage/ProductsPage';

export default function AppRouter() {
    
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                
                <Route exact path="/productos">
                    <ProductsPage/>
                </Route>

                <Route path="/productos/products:id">
                    <ItemDetail/>
                </Route>

            </Switch>
        </Router>
    )
}