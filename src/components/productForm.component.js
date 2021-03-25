import { Link } from "react-router-dom";

import React from 'react';

export class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        const product = this.props.location.query.product
        console.log(this.props);
        if (this.props.location.query.mode === 'update')
            this.state = {
                newProduct: {
                    id: product.id,
                    name: product.name,
                    info: product.info,
                    price: product.price,
                    amount: product.amount,
                    image: product.image
                }
            }
        else if (this.props.location.query.mode === 'create')
            this.state = {
                newProduct: {
                    name: '',
                    info: '',
                    price: '',
                    amount: '',
                    image: ''
                }
            }
    }

    handleSubmit = (event) => {
        if (this.props.location.query.mode === 'create')
            this.props.location.query.createNewProduct(this.state.newProduct);
        else if (this.props.location.query.mode === 'update') {
            this.props.location.query.updateProduct(this.state.newProduct);
        }
    }

    onChangeInput = (event) => {
        const obj = this.state.newProduct;
        obj[event.target.id] = event.target.value;
        this.setState({ newProduct: obj });
    }

    render() {
        return (
            <div className="formContainer">
                <div className="imagePreview" style={{background:`url(${this.state.newProduct.image}) no-repeat center center/cover`}}></div>
                <form>
                    <h2>{this.props.location.query.mode === 'create' ? 'Create New Product' : 'Edit Product Details'}</h2>
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

                    <Link onClick={this.handleSubmit} to={`/product`}>submit</Link>
                </form>
            </div>
        )
    }
}


