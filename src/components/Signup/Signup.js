import React, { Component } from 'react';
import { withStyles, CardContent, Typography, Card, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class Signup extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.signup}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng ký tài khoản
                                    </Typography>
                                </div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="cpassword"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <FormControlLabel control={<Checkbox value="agree" />} label="Tôi đã đọc chính sách và đồng ý điều khoản" className={classes.fullWidth} />
                                <Button variant="contained" color="primary" fullWidth type="submit">Signup</Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/login">
                                        <Button>Đã có tài khoản?</Button>
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

Signup.propType = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Signup);