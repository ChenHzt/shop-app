import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import React from 'react';
import axios from 'axios';
import API from '../api';
import myImg from '../images/defaultProduct.png'

export class ProductsList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            products: new Map()
        }
        this.createNewProductCallback = this.createNewProduct.bind(this);
    }

    componentDidMount = async () =>{
        const response = await API.get(`product`);
        console.log(response);
        const tempMap = new Map();
        response.data.forEach((product) => tempMap.set(product.id,product))

        this.setState({products:tempMap});
    }

    createNewProduct = async (newProduct) => {
        console.log(newProduct);
        const response = await API.post(`product`,newProduct);
        const stateProducts = this.state.products;
        stateProducts.set(response.data.id,response.data);
        this.setState({products:stateProducts});
    }

    updateProduct = async (product) => {
        console.log(product);
        const response = await API.put(`product/${product.id}`,product);
        const stateProducts = this.state.products;
        stateProducts.set(response.data.id, response.data);
        this.setState({products:stateProducts});
    }


    render(){
        console.log(this.state);

      return (
        <div className="productsList">
            {Array.from(this.state.products.values()).map((product,index) => 
            <Link key={product.id} to={{pathname: `${this.props.location.pathname}/${product.id}`, query: {product,updateCallback:this.updateProduct}}} >
                <div className="productCard">
                    <img className="productCard__image" src={myImg} alt={product.name}/>
                    <p className="productCard__title">{product.name}</p>
                    {product.amount > 0 ? <p className='text--green productCard__stock'>In Stock</p> : <p className='text--red productCard__stock'>Out Of Stock</p>}
                </div>
            </Link>)}
            <Link to={{pathname: `${this.props.location.pathname}/new`, query:{onClick:this.createNewProductCallback}}}>create new product</Link>
        </div>
      )
    }
  }


