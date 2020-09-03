import React, { Component } from 'react';
import * as Message from '../../constants/Message';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { InputBase,TableCell, TableRow, TableBody } from '@material-ui/core';
class CartItem extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { item } = this.props;
        var { quantity } = item;
        // console.log(item)
        return (
            <TableBody className="table">
                <TableRow >
                    <TableCell><img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" /></TableCell>
                    <TableCell><h5><strong>{item.product.name}</strong></h5></TableCell>
                    <TableCell><span>{this.format_currency(item.product.price)}VNĐ</span></TableCell>
                    <TableCell>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                <RemoveIcon />
                            </label>
                            <InputBase value={quantity} readOnly/>
                            <label onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                <AddIcon/>
                            </label>
                        </div>
                    </TableCell>
                    <TableCell><span>{this.format_currency(this.showSubTotal(item.product.price, item.quantity))}VNĐ</span></TableCell>
                    <TableCell>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item" onClick={() => this.onDelete(item.product)}>
                            X
                        </button>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;