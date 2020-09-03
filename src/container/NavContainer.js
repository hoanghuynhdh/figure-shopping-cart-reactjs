import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from '../components/Nav/Nav';
import Basket from '../components/Nav/Basket';
import BasketResult from '../components/Nav/BasketResult';
import BasketHead from '../components/Nav/BasketHead';
import * as Message from '../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class NavContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Nav>
                { this.showItem(cart)}
                { this.showCartItem(cart)}
                { this.showTotalAmount(cart) }
            </Nav>
        );
    }
    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = <span><small>{Message.MSG_CART_EMPTY}</small></span>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <Basket
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
    showItem = (cart) => {
        var result = null;
        if (cart.length >= 0) {
            result = <BasketHead cart={cart} />
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <BasketResult cart={cart} />
        }
        return result;
    }
}
NavContainer.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(NavContainer);