import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AdminPage extends Component {
    constructor (props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div id="wrapper">
                {/* Navigation */}
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="product_list.html">Admin Area</a>
                    </div>
                    {/* /.navbar-header */}
                    <ul className="nav navbar-top-links navbar-right">
                    {/* /.dropdown */}
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href=" ">
                        <i className="fa fa-user fa-fw" />  <i className="fa fa-caret-down" />
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                        <li><a href=" "><i className="fa fa-user fa-fw" /> User Profile</a>
                        </li>
                        <li><a href=" "><i className="fa fa-gear fa-fw" /> Settings</a>
                        </li>
                        <li className="divider" />
                        <li><a href="login.html"><i className="fa fa-sign-out fa-fw" /> Logout</a>
                        </li>
                        </ul>
                        {/* /.dropdown-user */}
                    </li>
                    {/* /.dropdown */}
                    </ul>
                    {/* /.navbar-top-links */}
                    <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                <i className="fa fa-search" />
                                </button>
                            </span>
                            </div>
                            {/* /input-group */}
                        </li>
                        <li>
                            <a href=" "><i className="fa fa-dashboard fa-fw" /> Dashboard</a>
                        </li>
                        <li>
                            <a href="cate_list.html"><i className="fa fa-bar-chart-o fa-fw" /> Category<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                            <li>
                                <a href=" ">List Category</a>
                            </li>
                            <li>
                                <a href="cate_add.html">Add Category</a>
                            </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                        <li>
                            <a href=" "><i className="fa fa-cube fa-fw" /> Product<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                            <li>
                                <a href=" ">List Product</a>
                            </li>
                            <li>
                                <a href=" ">Add Product</a>
                            </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                        <li>
                            <a href=" "><i className="fa fa-users fa-fw" /> User<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                            <li>
                                <a href=" ">List User</a>
                            </li>
                            <li>
                                <a href=" ">Add User</a>
                            </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                        </ul>
                    </div>
                    {/* /.sidebar-collapse */}
                    </div>
                    {/* /.navbar-static-side */}
                </nav>
                {/* Page Content */}
                <div id="page-wrapper">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <h1 className="page-header">Product
                            <small>List</small>
                        </h1>
                        </div>
                        {/* /.col-lg-12 */}
                        <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr align="center">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd gradeX" align="center">
                            <td>1</td>
                            <td>Áo Thun Nana</td>
                            <td>200.000 VNĐ</td>
                            <td>3 Minutes Age</td>
                            <td>Hiện</td>
                            <td className="center"><i className="fa fa-trash-o  fa-fw" /><a href=" "> Delete</a></td>
                            <td className="center"><i className="fa fa-pencil fa-fw" /> <a href=" ">Edit</a></td>
                            </tr>
                            <tr className="even gradeC" align="center">
                            <td>2</td>
                            <td>Áo Thun Polo</td>
                            <td>250.000 VNĐ</td>
                            <td>1 Hours Age</td>
                            <td>Ẩn</td>
                            <td className="center"><i className="fa fa-trash-o  fa-fw" /><a href=" "> Delete</a></td>
                            <td className="center"><i className="fa fa-pencil fa-fw" /> <a href=" ">Edit</a></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /#page-wrapper */}
            </div>
        );
    }
}

export default AdminPage;