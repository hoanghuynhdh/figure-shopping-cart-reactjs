import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer row ">
                    <div className="img col-sm-3"><img src="/template/images/logo.png" alt="" /></div>
                    <div className="col-sm-3">
                    <h3>Thông Tin Liên Hệ</h3>
                    <ul>
                        <li><i className="fa fa-map-marker-alt" style={{fontSize: '24px', color: 'blue'}} /><strong>Địa chỉ: 381/10/22 Tân Hòa Đông, P.BTĐ, Q.BT. TP.HCM</strong></li>
                        <li><i className="fa fa-phone" style={{fontSize: '24px', color: 'blue'}}></i><strong>0898124973</strong></li>
                        <li><i className="far fa-clock" style={{fontSize: '24px', color: 'blue'}}></i><strong>Thời gian làm việc:Thứ 2 - Thứ 7/ 8:00 AM - 8:00 PM</strong></li>
                        <li><i className="fab fa-google-plus" style={{fontSize: '24px', color: 'blue'}} /><strong>hoanghuynhdh99@gmail.com</strong></li>
                        <li></li> 
                        <li><a href="https://www.facebook.com/hoang.huynh.332/"><i className="fab fa-facebook" style={{fontSize: '24px'}} /></a><a href="https://twitter.com/kickoffman112"><i className="fab fa-twitter" style={{fontSize: '24px'}} /></a><a href="#Home "><i className="fab fa-youtube" style={{fontSize: '24px'}} /></a><a href="https://www.instagram.com/hoang.huynh.332/"><i className="fab fa-instagram" style={{fontSize: '24px'}} /></a></li>
                    </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>Bài viết khác</h3>
                    </div>
                    <div className="col-sm-3"><iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6111957143703!2d106.61747751801123!3d10.764418380361853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c24d0be5c7b%3A0xf41c59c7f024298a!2zMzgxLzEwLzQgVMOibiBIw7JhIMSQw7RuZywgQsOsbmggVHLhu4sgxJDDtG5nLCBCw6xuaCBUw6JuLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1592322013707!5m2!1svi!2s" width={350} height={350} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /></div>
                </div>
                <hr />
                <div>Copyright © by HoangHuynh</div>
            </div>
        );
    }
}

export default Footer;