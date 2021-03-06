import React, { Component } from 'react'
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';

export default class Products extends Component {
    
    render() {
        return (
            <div>
                <Fade bottom cascade={true} >
                    <ul className="products">
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className="product">
                                    <a
                                        href={"#" + product._id}
                                    >
                                        <img src={product.image} alt={product.title} width="200" height="200"></img>
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button onClick={() => this.props.addToCart(product)} className="button-primary">
                                            Add To Cart
                                    </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                
            </div>
        )
    }
}
