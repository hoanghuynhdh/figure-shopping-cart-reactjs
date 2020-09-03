import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Home from '../Home/Home';
import HomeContainer from '../../container/HomeContainer';
import News from '../News/News';
import Post from '../News/Post';
import ProductsContainer from '../../container/ProductsContainer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Detail from '../Detail/Detail';

import CartContainer from '../../container/CartContainer';
import CheckoutContainer from '../../container/CheckoutContainer';
import AdminPage from '../AdminPage/AdminPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomeContainer}></Route>
                    <Route path="/news" component={News}></Route>
                    <Route path="/post" component={Post}></Route>
                    <Route path="/product" component={ProductsContainer} ></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/detail/:slug" component={Detail}></Route>
                    <Route path="/admin" component={AdminPage}></Route>
                    <Route path="/cart" component={CartContainer}></Route>
                    <Route path="/checkout" component={CheckoutContainer}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route component={Home}></Route>
                    
                </Switch>
            </div>
        );
    }
}

export default RouterURL;