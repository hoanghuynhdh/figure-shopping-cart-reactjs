import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BasketResult extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { cart } = this.props;
        return (
            <div className="bottom">
                <div className="total">
                <span>Tổng cộng:</span>
                <span className="total-amount">{this.format_currency(this.showTotalAmount(cart))} VNĐ</span>
                </div>
                <NavLink to="/checkout" className="btn animate">Checkout</NavLink>
            </div>
        );
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
}

export default BasketResult;