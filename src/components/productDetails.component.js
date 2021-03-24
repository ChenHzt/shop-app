import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

export class ProductDetails extends React.Component{
    render(){
        console.log(this.props.location.query);
      return (
        <div className="productCard">
            <img src={`${this.props.location.query.imageUrl}`} alt=""/>
            <p>{this.props.location.query.name}</p>
            <p>{this.props.location.query.info}</p>
            <p>{`Price: ${this.props.location.query.price}`}</p>
            <p>{`Amount: ${this.props.location.query.amount}`}</p>
            <Link to='/product'>Go Back</Link>
        </div>
      )
    }
  }


