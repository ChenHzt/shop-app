import { Link } from "react-router-dom";
import React from 'react';
import API from '../api';
import { ProductCard, productCard } from './productCard.component'
import { NavBar } from './navbar.component';

export class ProductsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: new Map()
        }
        this.navbar = React.createRef(); 
        console.log(this.navbar);
        // this.createNewProductCallback = this.createNewProduct.bind(this);
    }

    componentDidMount = async () => {
        const response = await API.get(`product`);
        const tempMap = new Map();
        response.data.forEach((product) => tempMap.set(product.id, product))
        this.setState({ products: tempMap });
    }

    createNewProduct = async (newProduct) => {
        const response = await API.post(`product`, newProduct);
        const stateProducts = this.state.products;
        stateProducts.set(response.data.id, response.data);
        this.setState({ products: stateProducts });
    }

    updateProduct = async (product) => {
        const response = await API.put(`product/${product.id}`, product);
        const stateProducts = this.state.products;
        stateProducts.set(response.data.id, response.data);
        this.setState({ products: stateProducts });
    }

    deleteProduct = async (productId) => {
        const response = await API.delete(`product/${productId}`);
        const stateProducts = this.state.products;
        stateProducts.delete(response.data.id);
        this.setState({ products: stateProducts });
    }

    render() {
        return (
            <div className="productsListPage ">
                <NavBar />
                <div className="productsList container">
                    {/* {Array.from(this.state.products.values()).map((product) =>
                        <Link key={product.id} to={{ pathname: `${this.props.location.pathname}/${product.id}`, query: { product, updateProduct: this.updateProduct, deleteProduct: this.deleteProduct } }} >
                            <ProductCard product={product} />
                        </Link>)} */}

                    {
                        Array.from(this.state.products.values()).map((product) =>
                            <ProductCard product={product} updateProduct={this.updateProduct} deleteProduct={this.deleteProduct} />)
                    }
                </div>
                <Link className='plus-btn' to={{ pathname: `${this.props.location.pathname}/new`, query: { mode: 'create', createNewProduct: this.createNewProduct } }}>+</Link>
            </div>
        )
    }
}


