import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import * as Message from '../../constants/Message';
class Items extends Component {
    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    
    render() {
        var { product } = this.props;
        return (
            <div className="col-sm-4">
                <div className="product-grid8">
                    <div className="product-image8">
                        <img className="pic-1" alt={product.name} src={product.image} />
                        <img className="pic-2" alt={product.name} src={product.imageDetail} />
                        <ul className="social">
                        <li><Link to={"/detail/" + product.id + "/" + this.to_slug(product.name) + ".html"} className="fa fa-search" /></li>
                        <li><Link to="/product" className="fa fa-shopping-cart" onClick={ () => this.onAddToCart(product)} /></li>
                        </ul>
                        <span className="product-discount-label">-20%</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><NavLink to={"/detail/" + product.id + "/" + this.to_slug(product.name) + ".html"}>{product.name}</NavLink></h3>
                        <div className="price">{this.format_currency(product.price)} VNĐ</div>
                        <span className="product-shipping">Free Shipping</span>
                        <Link className="all-deals" to={"/detail/" + product.id + "/" + this.to_slug(product.name) + ".html"} >See all deals <i className="fa fa-angle-right icon" /></Link>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
}

export default Items;