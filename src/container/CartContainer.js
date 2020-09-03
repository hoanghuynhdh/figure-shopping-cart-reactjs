import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart/Cart';
import CartItem from '../components/Cart/CartItem';
import CartResult from '../components/Cart/CartResult';
import * as Message from '../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        // console.log(cart)
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = <tr>
                         <td>{Message.MSG_CART_EMPTY}</td>
                    </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            size : PropTypes.string.isRequired,
            author : PropTypes.string.isRequired,
            series : PropTypes.string.isRequired,
            released : PropTypes.string.isRequired,
            productType : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            imageDetail : PropTypes.string.isRequired,
            imageDetail2 : PropTypes.string.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);