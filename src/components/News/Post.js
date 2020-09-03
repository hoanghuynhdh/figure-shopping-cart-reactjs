import React, { Component } from 'react';
import { Breadcrumbs, Typography, TextField, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink, Prompt } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
class Post extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isBlocking : false,
            // isRedirect : false
            txtName : "",
            txtEmail : "",
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
        content += "Tin nhắn : " + this.state.txtMessage;
        console.log(content)
    }
    render() {
        return (
            <div className="post">
                <Prompt when={this.state.isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`}/>
                <div className="container">
                    <Breadcrumbs className="pt-3 pb-5" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            <NavLink color="inherit" to="/" >Home</NavLink>
                            <NavLink color="inherit" to="/news" >News</NavLink>
                            <Typography color="textPrimary">Post</Typography>
                    </Breadcrumbs>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="article-inner mb-5">
                                <header className="entry-header mb-3">
                                    <div className="entry-header-text entry-header-text-top text-left">
                                        <h1 className="entry-title">Màu sắc nào sẽ thống trị làng mốt trong năm 2018?</h1>
                                        <div className="header-meta-info">
                                            <small><QueryBuilderIcon/><span> Posted on <NavLink to="/post">02/08/2018</NavLink> by <NavLink to="/post">Hoang Huynh</NavLink></span></small>
                                        </div>
                                    </div>
                                </header>
                                <div className="entry-content single-page">
                                    <p><strong>Ultra violet</strong>: Học viện Sắc màu Pantone vừa công bố tím đậm sẽ là tông màu của năm 2018, là gam màu chủ đạo trong các mẫu thiết kế trang phục vào mùa mốt năm sau. Sắc tím tượng trưng cho sự lạc quan, quyền lực. Chúng truyền
                                    tải thông điệp độc đáo, hướng về tương lai và sẽ được các nhà mốt thế giới như Proenza Schouler, Victoria Beckham, Michael Kors ứng dụng trong bộ sưu tập xuân hè 2018.</p>
                                    <p><img src="/template/images/banner2.jpg" alt="..."/></p>
                                    <p><strong>Lavender pink:</strong>&nbsp;Hồng lavender là gam màu nhẹ nhàng được pha trộn giữa hồng và tím tinh tế. Chúng mang đến vẻ mềm mại, lãng mạn, dễ dàng thu hút sự chú ý. Các thiết kế năm sau của nhiều nhà mốt thế giới sẽ thể hiện
                                    vẻ đẹp người phụ nữ ngọt ngào như đóa hoa lavender thơ mộng.</p>
                                    <p><img src="/template/images/banner2.jpg" alt="..."/></p>
                                    <p><strong>Arcadia</strong>: Đây cũng màu xanh lá cây, nhưng được pha trộn với các sắc thái khác nhằm thể hiện sự tươi mát, trong trẻo hơn. Màu xanh lam trong bộ sưu tập từ thương hiệu Diane von Furstenberg sẽ đưa giới mộ điệu đến với không
                                    gian ngập nắng của mùa xuân hè 2018.</p>
                                </div>
                            </div>
                            <div className="comments-area">
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Trả lời </h3>
                                    <form onSubmit = { (e) => this.submitForm(e) }>
                                        <TextField variant="outlined" className="comment-form" id="outlined-textarea" label="Tin nhắn" name="txtMessage" value={ this.state.txtMessage } placeholder="Tin nhắn." multiline fullWidth rows={3} onChange={ (e) => this.isInputChange(e) }/>
                                        <div className="row mb-4 mt-3">
                                            <div className="col">
                                                <TextField id="fullName" label="Họ Tên*" name="txtName" value={ this.state.txtName } fullWidth variant="outlined" onChange={ (e) => this.isInputChange(e) }/>
                                            </div>
                                            <div className="col">
                                                <TextField id="Email" label="Địa chỉ email*" name="txtEmail" value={ this.state.txtEmail } fullWidth variant="outlined" onChange={ (e) => this.isInputChange(e) }/>
                                            </div>
                                        </div>
                                        <Button variant="contained" type="submit" color="secondary" style={{width: '120px'}} >Phản hồi</Button>
                                    </form>
                                </div>
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

export default Post;