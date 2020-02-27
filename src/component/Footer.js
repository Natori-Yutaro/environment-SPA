import React, { Component } from "react";
import "./Footer.css";
import 'font-awesome/css/font-awesome.min.css';
import { animateScroll as scroll } from "react-scroll";

export default class Footer extends Component{

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className="footer">
                <i onClick={this.scrollToTop} id="footericon" className="fa fa-angle-double-up" aria-hidden="true"></i>

                <p className="last">Change the environment　</p>
                <p className="last1">presented by yutaro natori</p>
            </div>
        );
    }
}