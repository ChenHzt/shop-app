
import React from 'react';

export class CreateProductForm extends React.Component{
    render(){
      return (
        <form>
            <h2>Create New Product</h2>
            <div className="">
                <div className="form__item">
                    <label htmlFor="productnameInput">Name:</label>
                    <input type="text" id='productnameInput'/>
                </div>
                <div className="form__item">
                    <label htmlFor="productInfoInput">Info:</label>
                    <input type="text" id='productInfoInput'/>
                </div>
                <div className="form__item">
                    <label htmlFor="productPriceInput">Price:</label>
                    <input type='number' id='productPriceInput'/>
                </div>
                <div className="form__item">
                    <label htmlFor="productAmountInput">Amount:</label>
                    <input type="number" id='productAmountInput'/>
                </div>
                <div className="form__item">
                    <label htmlFor="productImageUrlInput">Image Url:</label>
                    <input type="text" id='productImageUrlInput'/>
                </div>
            </div>

        </form>
      )
    }
  }


