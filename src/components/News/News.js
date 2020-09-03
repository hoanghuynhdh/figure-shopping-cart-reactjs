import React, { Component } from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink } from 'react-router-dom';
class News extends Component {
    render() {
        return (
            <div className="news" >
                <div className="container">
                    <Breadcrumbs className="pt-3 pb-5" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <NavLink color="inherit" to="/" >Home</NavLink>
                        <Typography color="textPrimary">News</Typography>
                    </Breadcrumbs>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-4"><NavLink to="/post"><img className="img-fluid" src="/template/images/banner2.jpg" alt="..." /></NavLink></div>
                                <div className="col-sm-8 text-left pt-3">
                                    <NavLink to="/post"><h5>Tieu de bai bao</h5></NavLink>
                                    <span><small>Tac gia: asdasd</small></span>
                                    <p/>
                                    <NavLink to="/post"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p></NavLink>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-sm-4"><NavLink to="/post"><img className="img-fluid" src="/template/images/banner2.jpg" alt="..." /></NavLink></div>
                                <div className="col-sm-8 text-left pt-3">
                                    <NavLink to="/post"><h5>Tieu de bai bao</h5></NavLink>
                                    <span><small>Tac gia: asdasd</small></span>
                                    <p/>
                                    <NavLink to="/post"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p></NavLink>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-sm-4"><NavLink to="/post"><img className="img-fluid" src="/template/images/banner2.jpg" alt="..." /></NavLink></div>
                                <div className="col-sm-8 text-left pt-3">
                                    <NavLink to="/post"><h5>Tieu de bai bao</h5></NavLink>
                                    <span><small>Tac gia: asdasd</small></span>
                                    <p/>
                                    <NavLink to="/post"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p></NavLink>
                                </div>
                            </div>
                            <div className="pagination">
                                <Pagination count={10} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="side-bar">
                                <div className="widget recent-posts">
                                    <h5 className="widget-title">BÀI ĐĂNG MỚI</h5>
                                    <div className="post-area">
                                        <div className="post-img">
                                            <NavLink to="/post"><img src="/template/images/banner2.jpg" className="img-fluid" alt="..." /></NavLink>
                                        </div>
                                        <div className="post-text">
                                            <h6><NavLink to="/post">Tieu de bai bao</NavLink></h6>
                                            <span className="text-primary">24/02/2020</span>
                                        </div>
                                    </div>
                                    <div className="post-area">
                                        <div className="post-img">
                                            <NavLink to="/post"><img src="/template/images/banner2.jpg" className="img-fluid" alt="..." /></NavLink>
                                        </div>
                                        <div className="post-text">
                                            <h6><NavLink to="/post">Tieu de bai bao</NavLink></h6>
                                            <span className="text-primary">24/02/2020</span>
                                        </div>
                                    </div>
                                    <div className="post-area">
                                        <div className="post-img">
                                            <NavLink to="/post"><img src="/template/images/banner2.jpg" className="img-fluid" alt="..." /></NavLink>
                                        </div>
                                        <div className="post-text">
                                            <h6><NavLink to="/post">Tieu de bai bao</NavLink></h6>
                                            <span className="text-primary">24/02/2020</span>
                                        </div>
                                    </div>
                                    <div className="post-area">
                                        <div className="post-img">
                                            <NavLink to="/post"><img src="/template/images/banner2.jpg" className="img-fluid" alt="..." /></NavLink>
                                        </div>
                                        <div className="post-text">
                                            <h6><NavLink to="/post">Tieu de bai bao</NavLink></h6>
                                            <span className="text-primary">24/02/2020</span>
                                        </div>
                                    </div>
                                    <div className="post-area">
                                        <div className="post-img">
                                            <NavLink to="/post"><img src="/template/images/banner2.jpg" className="img-fluid" alt="..." /></NavLink>
                                        </div>
                                        <div className="post-text">
                                            <h6><NavLink to="/post">Tieu de bai bao</NavLink></h6>
                                            <span className="text-primary">24/02/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default News;