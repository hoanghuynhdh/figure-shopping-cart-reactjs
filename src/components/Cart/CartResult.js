import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TableBody,TableCell, TableRow } from '@material-ui/core';
class CartResult extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { cart } = this.props;
        return (
            <TableBody className="table">
                <TableRow>
                    <TableCell colSpan={2}></TableCell>
                    <TableCell colSpan={2} className="text-right"><h5><strong>Tạm tính :</strong></h5></TableCell>
                    <TableCell colSpan={2} className="text-right"><span>{this.format_currency(this.showTotalAmount(cart))} VNĐ</span></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}></TableCell>
                    <TableCell colSpan={2} className="text-right"><h5><strong>Tổng Tiền :</strong></h5></TableCell>
                    <TableCell colSpan={2} className="text-right"><span>{this.format_currency(this.showTotalAmount(cart))} VNĐ</span></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={4}></TableCell>
                    <TableCell colSpan={2} className="text-right"><NavLink to="/checkout"><button type="button" className="btn btn-primary waves-effect waves-light">Thanh Toán</button></NavLink></TableCell>
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

export default CartResult;