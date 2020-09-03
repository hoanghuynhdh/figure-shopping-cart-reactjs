import React, { Component } from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell} from '@material-ui/core';
import { Prompt } from 'react-router-dom';

class Checkout extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isBlocking : false,
            // isRedirect : false
            txtLastName : "",
            txtFirstName : "",
            txtAddress : "",
            txtState : "",
            txtPhone : "",
            txtEmail : "",
            txtMessage : "",
            sltCity : "hcm",
            rdPayment : 1,
        }
    }
    isInputChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            isBlocking : target.value.length > 0,
            [name] : value
        })
    }
    submitForm = (e) => {
        e.preventDefault()
        e.target.reset()
        this.setState({
            isBlocking : false,
            // isRedirect: true
        })
        var payment = "";
        if (parseInt(this.state.rdPayment,10) === 1) {
            payment = "PAY";
        } else if (parseInt(this.state.rdPayment,10) === 2) {
            payment = "MOMO"
        } else {
            payment = "COD"
        }
        var content = "";
        content += "Tên : " + this.state.txtLastName;
        content += "Họ : " + this.state.txtFirstName;
        content += "Địa chỉ : " + this.state.txtAddress;
        content += "Tỉnh / Thành phố : " + this.state.txtState;
        content += "Số điện thoại : " + this.state.txtPhone;
        content += "Email : " + this.state.txtEmail;
        content += "Tin nhắn : " + this.state.txtMessage;
        content += "Tỉnh/TP : " + this.state.sltCity;
        content += "Payment : " + payment;
        console.log(content)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Prompt when={this.state.isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`}/>
                    <div className="col-sm-7">
                        <h3>Thông tin thanh toán</h3>
                    <form onSubmit = { (e) => this.submitForm(e) }>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <TextField id="lastName" label="Tên*" name="txtLastName" value={ this.state.txtLastName } onChange={ (e) => this.isInputChange(e) } fullWidth variant="outlined"/>
                            </div>
                            <div className="form-group col-sm-6">
                                <TextField id="firstName" label="Họ*" name="txtFirstName" value={ this.state.txtFirstName } onChange={ (e) => this.isInputChange(e) } fullWidth variant="outlined" />
                            </div>
                        </div>
                        <div className="form-group">
                            <TextField id="Email" label="Địa chỉ email*" name="txtEmail" value={ this.state.txtEmail } onChange={ (e) => this.isInputChange(e) } fullWidth variant="outlined" />
                        </div>
                        <div className="form-group">
                            <TextField id="Phone" label="Số điện thoại*" name="txtPhone" value={ this.state.txtPhone } onChange={ (e) => this.isInputChange(e) } fullWidth variant="outlined" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Tỉnh / Thành phố*</label>
                                <select className="form-control-lg" name="sltCity" style={{width: "100%"}} value={ this.state.sltCity } onChange={ (e) => this.isInputChange(e) } id="country">
                                    <option value="hn">Hà Nội</option>
                                    <option value="dn">Đà Nẵng</option>
                                    <option value="hcm">Hồ Chí Minh</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <TextField id="Address" label="Địa chỉ*" name="txtAddress" value={ this.state.txtAddress } onChange={ (e) => this.isInputChange(e) } fullWidth variant="outlined" />
                        </div>
                        <div className="form-group">
                            <TextField id="State" label="Quận / Huyện*" name="txtState" value={ this.state.txtState } onChange={ (e) => this.isInputChange(e) } fullWidth variant="outlined" />
                        </div>
                        <div className="form-group">
                            <TextField variant="outlined" id="outlined-textarea" label="Thông tin bổ sung" name="txtMessage" value={ this.state.txtMessage } onChange={ (e) => this.isInputChange(e) } placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn." multiline fullWidth rows={4}/>
                        </div>
                    </form>

                    </div>
                    <div className="col-sm-5 checkout-cart">
                        <div className="single-widget">
                            <h3>Đơn hàng của bạn</h3>
                            <div className="content">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="text-left"><h6><strong>Sản phẩm</strong></h6></TableCell>
                                            <TableCell className="text-right"><h6><strong>Tạm tính</strong></h6></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {this.props.children}
                                </Table>
                            </div>
                        </div>
                        <div className="pay mt-5">
                            <form className="container" onSubmit = { (e) => this.submitForm(e) }>
                                <ul>
                                    <li className="mt-5">
                                        <input className="form-check-input payment" type="radio" name="rdPayment" value="1" onChange={ (e) => this.isInputChange(e) } id="payment"  checked={parseInt(this.state.rdPayment,10) === 1} />
                                        <label className="form-check-label" htmlFor="payment">Chuyển khoản ngân hàng</label>
                                        <div className="form-check payment">
                                            <p>Quý khách vui lòng chuyển tiền vào tài khoản dưới đây:</p>
                                            <h5>VIETCOMBANK</h5>
                                            <p>Chủ tài khoản: ...</p>
                                            <p>Số tài khoản: ...</p>
                                            <p>Chi nhánh ...</p>
                                            <p>SĐT: ... (vui lòng gọi xác nhận sau khi chuyển.)</p>
                                        </div>
                                    </li>
                                    <li className="mt-5">
                                        <input className="form-check-input payment" type="radio" name="rdPayment" value="2" onChange={ (e) => this.isInputChange(e) } id="momo"  checked={parseInt(this.state.rdPayment,10) === 2} />
                                        <label className="form-check-label" htmlFor="payment">Chuyển khoản qua MOMO</label>
                                        <div className="form-check payment">
                                            <p>Quý khách vui lòng chuyển tiền vào tài khoản:</p>
                                            <p>090...</p>
                                        </div>
                                    </li>
                                    <li className="mt-5">
                                        <input className="form-check-input cod" type="radio" name="rdPayment" value="3" onChange={ (e) => this.isInputChange(e) } id="cod" checked={parseInt(this.state.rdPayment,10) === 3}/>
                                        <label className="form-check-label" htmlFor="cod">Trả tiền mặt khi nhận hàng</label>
                                        <div className="form-check cod">
                                            <p>Đối với COD, chi phí vận chuyển được tính dựa theo vị trí tỉnh/thành mà quý khách muốn giao đến.</p>
                                            <p>Shop sẽ gọi điện xác nhận đơn và thông báo phí vận chuyển chính xác đến quý khách hàng.</p>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div className="single-widget get-button">
                                    <div className="content">
                                        <Button variant="contained" type="submit" color="secondary">Thanh Toán</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;