import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { NavLink, Link } from 'react-router-dom';
import JsonData from './data';

class Home extends Component {
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
    };
}
selectedTab(key) {
  this.setState({
      activeTab: key,
  });
}
    render() {  
        return (
            <div className="main-content ">
              <div className="banner">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/template/images/slide1.jpg" className="d-block w-100" alt="..." />
                      <div className="carousel-caption container">
                        <h1>Đặt hàng & thanh toán</h1>
                        <h2>vô cùng dễ dàng</h2>
                        <NavLink to="/product"><Button variant="contained" color="secondary">Xem ngay</Button></NavLink>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="/template/images/slide2.jpg" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Cung cấp</h1>
                        <h2>Sản phẩm chính hãng <br/>từ Nhật Bản.</h2>
                        
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="/template/images/slide3.jpg" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h2>Mang nhân vật yêu thích đến gần bạn hơn.</h2>  
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              
              <div className="content ">
                <section className="small-banner section">
                  <div className="container-fluid">
                    <div className="row">
                      {/* Single Banner  */}
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-banner">
                          <img src="/template/images/mini-banner1.jpg" alt="..." />
                          <div className="content">
                            <p>Action Figure Collectons</p>
                            <h3>Action Figure <br /> collection</h3>
                            <NavLink to="/product">Discover Now</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* /End Single Banner  */}
                      {/* Single Banner  */}
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-banner">
                          <img src="/template/images/mini-banner2.jpg" alt="..." />
                          <div className="content">
                            <p>Chibi Figure Collectons</p>
                            <h3>Awesome Figure <br /> 2020</h3>
                            <NavLink to="/product">Shop Now</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* /End Single Banner  */}
                      {/* Single Banner  */}
                      <div className="col-lg-4 col-12">
                        <div className="single-banner tab-height">
                          <img src="/template/images/mini-banner3.jpg" alt="..." />
                          <div className="content">
                            <p>Flash Sale</p>
                            <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                            <NavLink to="/product">Discover Now</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* /End Single Banner  */}
                    </div>
                  </div>
                </section>

                <div className="container mt-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title">
                        <h2>Trending Item</h2>
                      </div>
                    </div>
                  </div>
                  <div className="product-area row">
                    <div className="col-12">
                      <ul className="nav justify-content-center">
                        <li className={this.state.activeTab === 'actionFigure' ? 'nav-item active' : 'nav-item'}
                            onClick={() => this.selectedTab('actionFigure')}>
                          <a className="nav-link active" data-toggle="tab" href="#actionFigure" role="tab">Action Figure</a>
                        </li>
                        <li className={this.state.activeTab === 'chibiFigure' ? 'nav-item active' : 'nav-item'}
                            onClick={() => this.selectedTab('chibiFigure')}>
                          <a className="nav-link" data-toggle="tab" href="#chibiFigure" role="tab">Chibi Figure</a>
                        </li>
                        <li className={this.state.activeTab === 'manga' ? 'nav-item active' : 'nav-item'}
                            onClick={() => this.selectedTab('manga')}>
                          <a className="nav-link" data-toggle="tab" href="#manga" role="tab">Manga</a>
                        </li>
                        <li className={this.state.activeTab === 'cactheloaikhac' ? 'nav-item active' : 'nav-item'}
                            onClick={() => this.selectedTab('cactheloaikhac')}>
                          <a className="nav-link" data-toggle="tab" href="#cactheloaikhac" role="tab" >Các thể loại khác</a>
                        </li>
                      </ul>
                      
                      <div className="tab-content" id="tabContent">
                          <div className="row">
                          {this.state[this.state.activeTab].map((value, key) => {
                              return (
                            <div className="col-sm-3"  key={key}>
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
                        <div className="pagination">
                          <Pagination count={10} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  
                <section className="shop-blog section mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h2>Tin tức - bài viết</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Blog  */}
                        <div className="shop-single-blog">
                          <img src="/template/images/banner2.jpg" alt="..." />
                          <div className="content">
                            <p className="date">22 July , 2020. Monday</p>
                            <NavLink to="/post" className="title">Sed adipiscing ornare.</NavLink>
                            <NavLink to="/post" className="more-btn">Continue Reading</NavLink>
                          </div>
                        </div>
                        {/* End Single Blog  */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Blog  */}
                        <div className="shop-single-blog">
                          <img src="/template/images/banner2.jpg" alt="..." />
                          <div className="content">
                            <p className="date">22 July, 2020. Monday</p>
                            <NavLink to="/post" className="title">Man’s Fashion Winter Sale</NavLink>
                            <NavLink to="/post" className="more-btn">Continue Reading</NavLink>
                          </div>
                        </div>
                        {/* End Single Blog  */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Blog  */}
                        <div className="shop-single-blog">
                          <img src="/template/images/banner2.jpg" alt="..." />
                          <div className="content">
                            <p className="date">22 July, 2020. Monday</p>
                            <NavLink to="/post" className="title">Women Fashion Festive</NavLink>
                            <NavLink to="/post" className="more-btn">Continue Reading</NavLink>
                          </div>
                        </div>
                        {/* End Single Blog  */}
                      </div>
                    </div>
                  </div>
                </section>


                <div className="row mt-5" style={{background:"#f7f7f7",height:"200px",textAlign:"center",}}>
                    <div className="col-sm-3">
                      <div className="media">
                        <i className="fa fa-check align-self-center  mt-5" style={{fontSize:"36px", color: "red"}}></i>
                        <div className="media-body">
                          <h3 className="card-title mt-5">GIAO HÀNG NHANH</h3>
                          <p className="card-text">Vận chuyển trên toàn quốc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="media">
                          <i className="fa fa-check align-self-center  mt-5" style={{fontSize:"36px", color: "red"}}></i>
                          <div className="media-body">
                            <h3 className="card-title mt-5">MIỄN PHÍ GIAO HÀNG</h3>
                            <p className="card-text">Với các đơn hàng trên 1 triệu đồng.</p>
                          </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="media">
                        <i className='fas fa-check align-self-center mt-5' style={{fontSize:"36px", color: "red"}}></i>
                          <div className="media-body">
                            <h3 className="card-title mt-5">HỖ TRỢ 24/7</h3>
                            <p className="card-text">Phục vụ tận tình.</p>
                          </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="media">
                        <i className='fas fa-check align-self-center mt-5' style={{fontSize:"36px", color: "red"}}></i>
                          <div className="media-body">
                            <h3 className="card-title mt-5">Sản phẩm chính hãng 100%</h3>
                            <p className="card-text">Sản phẩm được nhập khẩu chính hãng.</p>
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

export default Home;