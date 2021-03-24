import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import React from 'react';

export class CreateProductForm extends React.Component {
    constructor(props) {
        super(props);
        const temp = this.props.location.query.product
        console.log(this.props);
        if(temp)
            this.state = {
                newProduct: {
                    id: temp.id || -1,
                    name: temp.name || '',
                    info: temp.info || '',
                    price: temp.price || '',
                    amount: temp.amount || '',
                    image: temp.image || ''
                }
            }
        else this.state = {
            newProduct: {
                name:  '',
                info:  '',
                price:  '',
                amount: '',
                image: ''
            }
        }
    }

    handleSubmit = (event) => {
        if(this.props.location.query.createNewProduct) 
            this.props.location.query.createNewProduct(this.state.newProduct);
        else if (this.props.location.query.onUpdateProduct){
            this.props.location.query.onUpdateProduct(this.state.newProduct);
        }
    }

    onChangeInput = (event) => {
        const obj = this.state.newProduct;
        obj[event.target.id] = event.target.value;
        this.setState({newProduct:obj});
    }

    render() {
        return (
            <form>
                <h2>Create New Product</h2>
                <div className="">
                    <div className="form__item">
                        <label htmlFor="name">Name:</label>
                        <input onChange={(this.onChangeInput)} value={this.state.newProduct.name} type="text" id='name' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="info">Info:</label>
                        <input onChange={(this.onChangeInput)} value={this.state.newProduct.info} type="text" id='info' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="price">Price:</label>
                        <input onChange={(this.onChangeInput)} value={this.state.newProduct.price} type='number' id='price' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="amount">Amount:</label>
                        <input onChange={(this.onChangeInput)} value={this.state.newProduct.amount} type="number" id='amount' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="imageUrl">Image Url:</label>
                        <input onChange={(this.onChangeInput)} value={this.state.newProduct.image} type="text" id='image' />
                    </div>
                </div>

                {/* <button onClick={this.handleSubmit}>submit</button> */}
                <Link onClick={this.handleSubmit} to={`/product`}>submit</Link>

            </form>
        )
    }
}


