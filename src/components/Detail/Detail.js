import React, { Component } from 'react';
import myData from '../Product/data.json';
import { NavLink } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { Breadcrumbs, InputBase } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CheckIcon from '@material-ui/icons/Check';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import JsonData from '../Home/data';

class Detail extends Component {
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
            actionFigure: JsonData.actionFigure.data,
            chibiFigure: JsonData.chibiFigure.data,
            manga: JsonData.manga.data,
            cactheloaikhac: JsonData.cactheloaikhac.data,
            products: JsonData.products.data
        };
    }
    render() {
        var pid = this.props.match.params.slug;
        var { item } = this.props;
        // console.log(JsonData.products.data)
        // console.log(myData.products)
        return (
            <div className="wrapper container">
                <Breadcrumbs className="pt-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Home</NavLink>
                    <NavLink color="inherit" to="/product">Product</NavLink>
                    {
                        myData.products.map((val,key) => {
                            if (val.id === pid) {
                                return (
                                    <div key={key}>{ val.name }</div>
                                )
                            }
                            return '';
                        })
                    }
                    {/* {
                        JsonData.products.data.map((value,key) => {
                            if (value.id === pid) {
                                return (
                                    <div key={key}>{value.name}</div>
                                )
                            }
                            return ''
                        })
                    } */}
                </Breadcrumbs>
                <div className="row">
                    <div className="row col-sm-9 pt-5">
                        <div className="left-content col-sm-6">
                            {
                                myData.products.map((val,key) => {
                                    if (val.id === pid) {
                                        return (
                                            <div className="aaa" key={key}>
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: val.name,
                                                        isFluidWidth: true,
                                                        src: val.image,
                                                        },
                                                        largeImage: {
                                                        src: val.image,
                                                        width: 1200,
                                                        height: 1800
                                                        },
                                                        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
                                                }} />
                                                
                                                {/* <input type="radio" defaultChecked name="active" id="img1" />
                                                <input type="radio" name="active" id="img2" />
                                                <input type="radio" name="active" id="img3" />
                                                <div className="img-show ">
                                                    <img src={val.image} alt={val.name} />
                                                    <img src={val.imageDetail} alt={val.name} />
                                                    <img src={val.imageDetail2} alt={val.name} />
                                                </div>
                                                <div className="sliders-show" >
                                                    <label htmlFor="img1"><img src={val.image} alt={val.name} /></label>
                                                    <label htmlFor ="img2"><img src={val.imageDetail} alt={val.name} /></label>
                                                    <label htmlFor ="img3"><img src={val.imageDetail2} alt={val.name} /></label>
                                                    
                                                </div> */}
                                            </div>
                                        )
                                    }
                                    return '';
                                })
                            }
                            <div className="space40">&nbsp;</div>
                            <div className="space50">&nbsp;</div>
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Mô tả chi tiết</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Bình luận</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                {
                                    myData.products.map((val,key) => {
                                        if (val.id === pid) {
                                            return (
                                                <div className="description" key={key}> 
                                                    <p>Nhân vật: { val.name }</p>
                                                    <p>Series: {val.series}</p>
                                                    <p>Chiều cao: {val.size}</p>
                                                    <p>Tác giả: {val.author}</p>
                                                    <p>Phát hành: {val.released}</p>
                                                </div>
                                            )
                                        }
                                        return '';
                                    })
                                }
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="mb15">
                                        <div className="title-block">
                                            <h2 className="title-group">Bình luận</h2>
                                        </div>
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div id="fb-root" />					
                                            <div className="fb-comments" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="information col-sm-6">
                            {
                                myData.products.map((val,key) => {
                                    if (val.id === pid) {
                                        return (
                                            <div key={key}>
                                                <h1>{ val.name }</h1>
                                                <h2 style={{color: 'red'}}> { this.format_currency(val.price) } VNĐ </h2> 
                                                <ul>
                                                    <li><CheckIcon/>Nhân vật: { val.name }</li>
                                                    <li><CheckIcon/>Series: {val.series}</li>
                                                    <li><CheckIcon/>Chiều cao: {val.size}</li>
                                                    <li><CheckIcon/>Tác giả: {val.author}</li>
                                                    <li><CheckIcon/>Phát hành: {val.released}</li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                    return '';
                                })
                            }
                            <div className="select">
                                <h5 style={{textAlign: 'justify'}}>Số lượng</h5>
                                <div className="btn-group">
                                    <label onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                        <RemoveIcon />
                                    </label>
                                    <InputBase value={1} readOnly/>
                                    <label  className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                        <AddIcon/>
                                    </label>
                                </div>
                                <div style={{width: '100%'}}>
                                    <button className="btn btn-primary" type="submit" onClick={ () => this.onAddToCart()} ><i className="fas fa-shopping-cart" style={{fontSize: '18px'}} />Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        {/* <div className="side-bar"> */}
                            <div className="widget recent-posts">
                                <h5 className="widget-title">Sản phẩm liên quan</h5>
                                {
                                    myData.products.map((val,key) => {
                                        if (val.id !== pid) {
                                            return (
                                                // <div className="post-area" key={key}>
                                                //     <div className="post-img">
                                                //         <NavLink to="/post"><img src={val.image} className="img-fluid" alt={val.name} style={{width:"200px"}}/></NavLink>
                                                //     </div>
                                                //     <div className="post-text">
                                                //         <h5><NavLink to="/post">{val.name}</NavLink></h5>
                                                //         <span className="text-primary">{val.price}</span>
                                                //     </div>
                                                // </div>
                                                <div className="media" key={key}>
                                                    <NavLink to={"/detail/" + val.id + "/" + this.to_slug(val.name) + ".html"}><img src={val.image} className="align-self-center img-fluid mr-3" alt={val.name} /></NavLink>
                                                    <div className="media-body">
                                                        <NavLink to={"/detail/" + val.id + "/" + this.to_slug(val.name) + ".html"}><h6 className="mt-0">{val.name}</h6></NavLink>
                                                        <p style={{color:"red"}} >{ this.format_currency(val.price) } VNĐ</p>                                                        
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                
                
            </div>
        );
    }
    // onAddToCart = (product) => {
    //     this.props.onAddToCart(product);
    // }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart } = this.props;
            onUpdateProductInCart(product, quantity);
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
    }
}

export default Detail;