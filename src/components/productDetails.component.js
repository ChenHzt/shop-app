import React from 'react';
import { Link } from "react-router-dom";

export class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      product: props.location.query.product,
      updateCallback: props.location.query.updateCallback,
      deleteCallback: props.location.query.deleteProduct
    }
  }
  update = () =>{

  }
  render() {
    console.log(this.props.location.query);
    return (
      <div className="productCard">
        <img src={`${this.state.product.image}`} alt="" />
        <p>{this.state.product.name}</p>
        <p>{this.state.product.info}</p>
        <p>{`Price: ${this.state.product.price}`}</p>
        <p>{`Amount: ${this.state.product.amount}`}</p>
        
        <Link onClick={() => this.state.deleteCallback(this.state.product.id)} to={{pathname:`/product`}}>Delete</Link>
        <Link to={{pathname:`${this.props.location.pathname}/edit`, query:{onUpdateProduct:this.state.updateCallback,product:this.state.product}}}>Update</Link>
        <Link to='/product'>Go Back</Link>
      </div>
    )
  }
}


