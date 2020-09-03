import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BasketHead extends Component {
    render() {
        var { cart } = this.props;
        return (
            <div className="dropdown-cart-header">
                <span>{this.showCartCount(cart)} Items</span>
                <NavLink to="/cart">View Cart</NavLink>
            </div>
        );
    }
    showCartCount = (cart) => {
        var cartCount = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                cartCount += cart[i].quantity;
            }
        }
        return cartCount;
    }
}

export default BasketHead;