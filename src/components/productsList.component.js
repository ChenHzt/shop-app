import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import React from 'react';
import axios from 'axios';

import API from '../api';

export class ProductsList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }

    componentDidMount = async () =>{
        const response = await API.get(`product`);
        console.log(response);
        this.setState({products:response.data});
    }

    render(){
      return (
        <div className="productsList">
            {this.state.products.map((product,index) => <Link key={product.id} to={{pathname: `${this.props.location.pathname}/${product.id}`, query: product}} >
                <div className="productCard">
                    <img src={product.image} alt={product.name}/>
                    <p>{product.name}</p>
                    {product.amount > 0 ? <p className='text--green'>In Stock</p> : <p className='text--red'>Out Of Stock</p>}
                </div>
            </Link>)}
        </div>
      )
    }
  }


