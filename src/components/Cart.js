import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCheckout: false,
            name: "",
            email: "",
            address: "",
        };
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    createOrder = (e) => {
        e.preventDefault(); //we use prevent default to prevent refresh of page when submit is clicked;
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartIems: this.props.cartItems,
        };
        this.props.createOrder(order);
    };
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                <div>
                    {cartItems.length === 0 ? (
                        <div className="cart cart-header">Cart is Empty</div>
                    ) : (
                            <div className="cart cart-header">
                                You Have {cartItems.length} items in your cart{" "}
                                {console.log(cartItems.length)}
                            </div>
                        )}
                </div>
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}></img>
                                </div>
                                <div>{item.title}</div>
                                <div className="right">
                                    {formatCurrency(item.price)} x {item.count}{" "}
                                    <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length !== 0 && (
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + (c.price * c.count), 0
                                    ))}
                            </div>
                            <button className="button primary"
                                onClick={() => { this.setState({ showCheckout: true }) }}
                            >
                                Proceed
                            </button>
                        </div>
                    </div>)}
                    { ( this.state.showCheckout  ) && (
                        <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>E-mail</label>
                                    <input name="email" type="email" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <button type="submit" className="button-primary">Checkout</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    ) }

            </div>
        )
    }
}





// import React, { Component } from 'react'
// import formatCurrency from '../util';

// export default class Cart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showCheckout: false,
//             name: "",
//             email: "",
//             address: "",
//         };
//     };
//     handleInput = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };
//     createOrder = (e) => {
//         e.preventDefault(); //we use prevent default to prevent refresh of page when submit is clicked;
//         const order = {
//             name: this.state.name,
//             email: this.state.email,
//             address: this.state.address,
//             cartIems: this.props.cartItems,
//         };
//         this.props.createOrder(order);
//     };
//     render() {
//         const { cartItems } = this.props;
//         return (
//             <div>
//                 <div>
//                     {cartItems.length === 0 ? (
//                         <div className="cart cart-header">Cart is Empty</div>
//                     ) : (
//                             <div className="cart cart-header">
//                                 You Have {cartItems.length} items in your cart{" "}
//                                 {console.log(cartItems.length)}
//                             </div>
//                         )}
//                 </div>
//                 <div className="cart">
//                     <ul className="cart-items">
//                         {cartItems.map((item) => (
//                             <li key={item._id}>
//                                 <div>
//                                     <img src={item.image} alt={item.title}></img>
//                                 </div>
//                                 <div>{item.title}</div>
//                                 <div className="right">
//                                     {formatCurrency(item.price)} x {item.count}{" "}
//                                     <button className="button" onClick={() => this.props.removeFromCart(item)}>
//                                         Remove
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 {cartItems.length !== 0 && (
//                     <div className="cart">
//                         <div className="total">
//                             <div>
//                                 Total:{" "}
//                                 {formatCurrency(
//                                     cartItems.reduce((a, c) => a + (c.price * c.count), 0
//                                     ))}
//                             </div>
//                             <button className="button primary"
//                                 onClick={() => { this.setState({ showCheckout: true }) }}
//                             >
//                                 Proceed
//                             </button>
//                         </div>
//                     </div>
//                 )}
//                 {(this.state.showCheckout) && (console.log("arpit"))}

//             </div>
//         )
//     }
// }
