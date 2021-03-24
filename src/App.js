import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {ProductDetails} from './components/productDetails.component'
import { ProductsList } from './components/productsList.component'
import { CreateProductForm } from './components/createProductForm.component'
import { NotFoundPage } from './components/404Page.component';
import { HomePage } from './components/homePage.component';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product" exact component={ProductsList} />
            <Route path="/product/:id/edit" exact component={CreateProductForm} />
            <Route path="/product/new" exact component={CreateProductForm} />
            <Route path="/product/:id" exact component={ProductDetails} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
