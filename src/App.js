import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {ProductDetails} from './components/productDetails.component'
import { ProductsList } from './components/productsList.component'
import { ProductForm } from './components/productForm.component'
import { NotFoundPage } from './components/404Page.component';
import { HomePage } from './components/homePage.component';
import { NavBar } from './components/navbar.component';

function App() {

  return (
    <div className="App">
        <BrowserRouter >
        
          <Switch>
            
            <Route path="/" exact component={HomePage} />
            <Route path="/product" exact component={ProductsList} />
            <Route path="/product/:id/edit" exact component={ProductForm} />
            <Route path="/product/new" exact component={ProductForm} />
            <Route path="/product/:id" exact component={ProductDetails} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
