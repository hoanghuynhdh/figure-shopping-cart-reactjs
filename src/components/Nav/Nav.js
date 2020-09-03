import React, { Component } from 'react';
import {Link,NavLink, Route} from "react-router-dom";
import Search from '../Search/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Badge } from '@material-ui/core';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact : true
    },
    {
        name: 'News',
        to: '/news',
        exact : false
    },
    {
        name: 'Product',
        to: '/product',
        exact : false
    },
    {
        name: 'About',
        to: '/about',
        exact : false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact : false
    }
]
const subMenus = [
    {
        name: 'Action Figure',
        to: '/product/action-figure',
    },
    {
        name: 'Chibi Figure',
        to: '/product/chibi-figure',
    },
    {
        name: 'Manga',
        to: '/product/manga',
    },
    {
        name: 'Các thể loại khác',
        to: '/product/cac-the-loai-khac',
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={active}>
                    <Link to={to} className="my-link">{ label }</Link>
                </li>
            )
        }} />
    )
}
class Nav extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         keyword : '',
    //     }
    // }
    render() {
        return (
            <div className="trang">
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <Link className="navbar-brand" to="/ "><img src="/template/images/logo.png" alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Search onSearch={this.props.onSearch} />
                    </div>
                    
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                               <a className="nav-link" href="/login "><AccountCircleIcon />Tài khoản </a>
                            </li>
                            <li className="nav-item shopping">
                                <Badge badgeContent={4} color="primary">
                                    <NavLink activeClassName="active shopping-cart" to="/cart"><ShoppingCartOutlinedIcon/></NavLink>
                                </Badge>
                                <div className="shopping-item">
                                    <div>
                                        <ul className="shopping-list">
                                            {this.props.children}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>      
                </nav>
                <div className="menu">
                <ul className="root" id="root">
                { this.showMenus(menus) }
                    {/* <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">	
                            <div className="nav-inner">	
                            <ul className="nav main-menu menu navbar-nav">
                                <li className="active"><a href="# ">Home</a></li>
                                <li><a href="# ">Product</a></li>												
                                <li><a href="# ">Service</a></li>
                                <li><a href="# ">Shop<i className="ti-angle-down" /><span className="new">New</span></a>
                                <ul className="dropdown">
                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                </ul>
                                </li>
                                <li><a href="# ">Pages</a></li>									
                                <li><a href="# ">Blog<i className="ti-angle-down" /></a>
                                <ul className="dropdown">
                                    <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                                </ul>
                                </li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                            </div>
                        </div>
                    </nav> */}
                  <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                  <li><NavLink activeClassName="active" to="/product">Product</NavLink>
                    <ul className="submenu">
                        { this.showSubMenus(subMenus) }
                    </ul>
                  </li>
                  <li><a href="/admin">About</a></li>
                  <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>  
        );
    }
    showMenus(menus) {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu,index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }
        return result;
    }
    showSubMenus(subMenus) {
        var result = null;
        if(subMenus.length > 0) {
            result = subMenus.map((subMenu,index) => {
                return (
                    <MenuLink key={index} label={subMenu.name} to={subMenu.to} />
                )
            })
        }
        return result;
    }
    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }
}

export default Nav