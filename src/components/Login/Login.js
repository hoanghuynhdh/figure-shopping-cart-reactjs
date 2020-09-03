import React, { Component } from 'react';
import { withStyles, CardContent, Typography, Card, TextField, Button } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
    constructor (props) {
        super(props)
        let loggedIn = false
        this.state = {
            email : '',
            password : '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitForm(e) {
        e.preventDefault()
        const { email, password } = this.state
        if( email === "kickoffmanvn@yahoo.com" && password === "123456") {
            localStorage.setItem("token","aaaaaaaaaa")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        const { classes } = this.props;
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form onSubmit={this.submitForm}>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng nhập để tiếp tục
                                    </Typography>
                                </div>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <Button variant="contained" color="primary" fullWidth type="submit">Login</Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/signup">
                                        <Button>Đăng ký tài khoản.</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

Login.propType = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Login);