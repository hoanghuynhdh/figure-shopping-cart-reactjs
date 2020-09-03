import React, { Component } from 'react';
import { TableRow, TableCell, TableBody } from '@material-ui/core';

class CheckoutResult extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { cart } = this.props;
        return (
            <TableBody>
                <TableRow>
                    <TableCell><h6><strong>Tạm tính</strong></h6></TableCell>
                    <TableCell className="text-right">{this.format_currency(this.showTotalAmount(cart))} VNĐ</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><h6><strong>Tổng</strong></h6></TableCell>
                    <TableCell className="text-right">{this.format_currency(this.showTotalAmount(cart))} VNĐ</TableCell>
                </TableRow>
            </TableBody>
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

export default CheckoutResult;