import React, { Component } from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
class About extends Component {
    render() {
        return (
            <div className="container text-left">
                <Breadcrumbs className="pt-3 pb-5" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <NavLink color="inherit" to="/" >Home</NavLink>
                    <Typography color="textPrimary">About</Typography>
                </Breadcrumbs>
                <img src="/template/images/bosuutam3.jpg" alt="..."/>
                <h4 className="text-danger"><i className="fas fa-caret-right" style={{fontSize: '24px'}} /> Manga là gì?</h4>
                <p>
                    Manga là một cụm từ trong tiếng Nhật để chỉ các loại truyện tranh và tranh biếm hoạ nói chung của các nước trên thế giới.
                </p>
                <h4 className="text-danger"><i className="fas fa-caret-right" style={{fontSize: '24px'}} /> Figure là gì?</h4>
                <p>
                    Figure là mô hình, là tượng, là bất kì sản phẩm 3D nào mô phỏng lại nhân vật trong phim, trong truyện, game, tranh vẽ.<br />
                    Thông thường figure mang hình dạng con người, đôi khi là thú, thần thánh, yêu tinh, quái vật hay thậm chí là sinh vật ngoài hành tinh... bất cứ nhân vật nào được họa sĩ ngĩ ra, được điêu khắc thành 3D thì được gọi là figure
                </p>
                <img src="/template/images/banner4.jpg" alt="..."/>
            </div>
        );
    }
}

export default About;