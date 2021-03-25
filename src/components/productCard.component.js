import React from 'react';
import myImg from '../images/defaultProduct.png'
import { Link } from "react-router-dom";

export class ProductCard extends React.Component {

    render() {
        return (
            <div className="cardWrapper">
                <div className="productCard__front">
                    <div className="productCard__image" style={{ background: `url(${this.props.product.image}) no-repeat center center/cover` }}></div>
                    <div className="productCard__details">
                        <div className="productCard__left">
                            <div className="details">
                                <h1>{this.props.product.name}</h1>
                                <p>{`${this.props.product.price}$`}</p>
                            </div>
                            <div className="buy"><i className="material-icons">add_shopping_cart</i></div>
                        </div>
                    </div>
                </div>
                <div className="productCard__info">
                    <div className="icon"><i className="material-icons">info_outline</i></div>
                    <div className="content">
                        <div className="item-description">
                            <p className='text--bold'>Item Description:</p>
                            <p>{this.props.product.info}</p>
                        </div>
                        <div className="item-actions">
                            <button>
                                <Link className="text--white" to={{pathname:`product/${this.props.product.id}/edit`, query:{mode:'update',updateProduct:this.props.updateProduct,product:this.props.product}}}><i className="material-icons">mode_edit</i></Link>
                            </button>
                            <button onClick={()=> this.props.deleteProduct(this.props.product.id)}><i className="material-icons">delete</i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


