import React, { Component } from 'react';
import { TableRow, TableCell, TableBody } from '@material-ui/core';

class CheckoutItem extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { item } = this.props;
        // console.log(this.props)
        return (
            <TableBody>
                <TableRow >
                    <TableCell>{item.product.name} <span className="quantity">x {item.quantity}</span></TableCell>
                    <TableCell className="text-right">{this.format_currency(this.showSubTotal(item.product.price, item.quantity))} VNĐ</TableCell>
                </TableRow>
            </TableBody>
        );
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CheckoutItem;