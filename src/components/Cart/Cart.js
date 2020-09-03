import React, { Component } from 'react';
import { Table, TableHead, TableCell, TableRow } from '@material-ui/core';

class Cart extends Component {
    render() {
        return (
            <section className="section container">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Sản Phẩm</TableCell>
                            <TableCell>Giá</TableCell>
                            <TableCell>Số Lượng</TableCell>
                            <TableCell>Tổng cộng</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    {this.props.children}
                </Table>
            </section>
        );
    }
}

export default Cart;