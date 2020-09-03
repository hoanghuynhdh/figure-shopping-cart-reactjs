import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FormControlLabel, FormControl, RadioGroup, Radio } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import JsonData from '../Home/data';
import Checkbox from '@material-ui/core/Checkbox';
class Product extends Component {
    format_currency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
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
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'actionFigure',
            actionFigure: JsonData.actionFigure.data,
            chibiFigure: JsonData.chibiFigure.data,
            manga: JsonData.manga.data,
            cactheloaikhac: JsonData.cactheloaikhac.data,
            products: JsonData.products.data,
        };
    }
    selectedTab(key) {
      this.setState({
          activeTab: key,
      });
    }
    render() {
        return (       
            <div className="main-content container">
                <Breadcrumbs className="pt-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Home</NavLink>
                    <NavLink color="inherit" to="/product">Product</NavLink>
                    <Typography color="textPrimary">Danh mục sản phẩm</Typography>
                </Breadcrumbs>
                <div className="content pt-5">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="slidecontainer">
                                <h4>
                                    <NavLink className={this.state.activeTab === 'products ' ? 'active' : ''}
                                    onClick={() => this.selectedTab('products')} to="#products" role="tab" aria-selected="true">Danh mục sản phẩm</NavLink>
                                </h4>
                            </div>
                            <div className="nav flex-column">
                                <NavLink className={this.state.activeTab === 'actionFigure ' ? 'nav-link' : 'nav-link active'}
                                    onClick={() => this.selectedTab('actionFigure')} to="#actionFigure" role="tab" aria-selected="true">Action Figure</NavLink>
                                <NavLink className={this.state.activeTab === 'chibiFigure' ? 'nav-link active' : 'nav-link'}
                                    onClick={() => this.selectedTab('chibiFigure')} to="#chibiFigure" role="tab" aria-selected="false">Chibi Figure</NavLink>
                                <NavLink className={this.state.activeTab === 'manga' ? 'nav-link active' : 'nav-link'}
                                    onClick={() => this.selectedTab('manga')} to="#manga" role="tab" aria-selected="false">Manga</NavLink>
                                <NavLink className={this.state.activeTab === 'cactheloaikhac' ? 'nav-link active' : 'nav-link'}
                                    onClick={() => this.selectedTab('cactheloaikhac')} to="#cactheloaikhac" role="tab" aria-selected="false">Các thể loại khác</NavLink>
                            </div>
                            <div className="slidecontainer">
                                <h4>Bộ lọc sản phẩm</h4>
                            </div>
                            <div className="filter-box">
                                <div className="filter-box-title">
                                    <h5>Thương hiệu</h5>
                                </div>
                                <ul>
                                    <li><Checkbox/>AAA</li>
                                    <li><Checkbox/>BBB</li>
                                    <li><Checkbox/>CCC</li>
                                    <li><Checkbox/>DDD</li>
                                    <li><Checkbox/>FFF</li>
                                </ul>
                            </div>
                            <div className="filter-price">
                                <div className="filter-price-title">
                                    <h5>Giá</h5>
                                </div>
                                <FormControl >
                                    <RadioGroup >
                                        <FormControlLabel value="price1" control={<Radio />} label="Nhỏ hơn 500.000 VNĐ" />
                                        <FormControlLabel value="price2" control={<Radio />} label="Từ 500.000 VNĐ - 1.000.000 VNĐ" />
                                        <FormControlLabel value="price3" control={<Radio />} label="Từ 1.000.000 VNĐ - 5.000.000 VNĐ" />
                                        <FormControlLabel value="price4" control={<Radio />} label="Từ 5.000.000 VNĐ - 10.000.000 VNĐ" />
                                        <FormControlLabel value="price5" control={<Radio />} label="Lớn hơn 10.000.000 VNĐ" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="tab-content" id="tabContent">
                                <div className="tab-pane fade show active" id="actionFigures" role="tabpanel" >
                                    <div className="row" >
                                        {this.state[this.state.activeTab].map((value, key) => {
                                            return (
                                                    <div className="col-sm-4" key={key}>
                                                        <div className="product-grid8" >
                                                            <div className="product-image8" >
                                                                <img className="pic-1" alt={value.name} src={value.image} />
                                                                <img className="pic-2" alt={value.name} src={value.imageDetail} />
                                                                <ul className="social">
                                                                <li><Link to={"/detail/" + value.id + "/" + this.to_slug(value.name) + ".html"} className="fa fa-search" /></li>
                                                                <li><Link to="#" className="fa fa-shopping-cart" onClick={ () => this.onAddToCart(value)} /></li>
                                                                </ul>
                                                                <span className="product-discount-label">-20%</span>
                                                            </div>
                                                            <div className="product-content">
                                                                <h3 className="title"><NavLink to={"/detail/" + value.id + "/" + this.to_slug(value.name) + ".html"}>{value.name}</NavLink></h3>
                                                                <div className="price">{this.format_currency(value.price)} VNĐ</div>
                                                                <span className="product-shipping">Free Shipping</span>
                                                                <Link className="all-deals" to={"/detail/" + value.id + "/" + this.to_slug(value.name) + ".html"} >See all deals <i className="fa fa-angle-right icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                        )})}
                                    </div>
                                </div>
                                <div className="pagination">
                                    <Pagination count={10} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }
}



export default Product;