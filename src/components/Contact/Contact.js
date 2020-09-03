import React, { Component } from 'react';
import { NavLink, Prompt } from 'react-router-dom';
import { Breadcrumbs, Typography, TextField, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
class Contact extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isBlocking : false,
            // isRedirect : false
            txtName : "",
            txtEmail : "",
            txtPhone : "",
            txtMessage : "",
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
        var content = "";
        content += "Họ tên : " + this.state.txtName;
        content += "Email : " + this.state.txtEmail;
        content += "Số điện thoại : " + this.state.txtPhone;
        content += "Tin nhắn : " + this.state.txtMessage;
        console.log(content)
    }
    render() {
        return (
            <div className="container">
                <Prompt when={this.state.isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`}/>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6111957143703!2d106.61747751801123!3d10.764418380361853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c24d0be5c7b%3A0xf41c59c7f024298a!2zMzgxLzEwLzQgVMOibiBIw7JhIMSQw7RuZywgQsOsbmggVHLhu4sgxJDDtG5nLCBCw6xuaCBUw6JuLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1592322013707!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                <Breadcrumbs className="pt-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Home</NavLink>
                    <Typography color="textPrimary">Contact</Typography>
                </Breadcrumbs>
                <div className="row pt-5">
                    <div className="rol-4 ml-auto mr-auto">
                    <table className="table table-bordered">
                        <thead>
                        <tr style={{color: 'blue'}}>
                            <th scope="col"><i className="fa fa-map-marker-alt" style={{fontSize: '18px'}} /></th>
                            <th scope="col"><strong>Địa chỉ</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">&nbsp;</th>
                            <td>381/10/22 Tân Hòa Đông P.Bình Trị Đông Q.Bình Tân</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="rol-4 ml-auto mr-auto">
                    <table className="table table-bordered">
                        <thead>
                        <tr style={{color: 'blue'}}>
                            <th scope="col"><i className="fa fa-envelope" style={{fontSize: '18px'}} /></th>
                            <th scope="col"><strong>Email</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">&nbsp;</th>
                            <td>hoanghuynhdh99@gmail.com</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="rol-4 mr-auto ml-auto">
                    <table className="table table-bordered">
                        <thead>
                        <tr style={{color: 'blue'}}>
                            <th scope="col"><i className="fa fa-phone" style={{fontSize: '18px'}} /></th>
                            <th scope="col"><strong>Điện thoại</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">&nbsp;</th>
                            <td>0898124973</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <h5 className="mt-5 mb-5" style={{textAlign: 'center', color: 'red'}}><strong>Nếu có thắc mắc nào xin hãy liên hệ với bọn mình dưới đây!</strong></h5>
                <form onSubmit = { (e) => this.submitForm(e) }>
                    <div className="row mb-4">
                        <div className="col">
                            <TextField id="fullName" label="Họ Tên*" name="txtName" value={ this.state.txtName } fullWidth variant="outlined" onChange={ (e) => this.isInputChange(e) }/>
                        </div>
                        <div className="col">
                            <TextField id="Email" label="Địa chỉ email*" name="txtEmail" value={ this.state.txtEmail } fullWidth variant="outlined" onChange={ (e) => this.isInputChange(e) }/>
                        </div>
                        <div className="col">
                            <TextField id="Phone" label="Số điện thoại*" name="txtPhone" value={ this.state.txtPhone } fullWidth variant="outlined" onChange={ (e) => this.isInputChange(e) }/>
                        </div>
                    </div>
                    <TextField variant="outlined" className="pb-3" id="outlined-textarea" label="Tin nhắn" name="txtMessage" value={ this.state.txtMessage } placeholder="Tin nhắn." multiline fullWidth rows={3} onChange={ (e) => this.isInputChange(e) }/>
                    <Button variant="contained" type="submit" color="secondary" style={{width: '120px'}} >Gửi</Button>
                </form>
            </div>

        );
    }
}

export default Contact;