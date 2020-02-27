import React, { Component } from "react"
import "./Profile.css";
import 'font-awesome/css/font-awesome.min.css';
import Face from "./顔写真.JPG"


export default class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <h1 className="midasi2">About</h1>
                <div className="media">
                    <a href="https://twitter.com/5PFZadhulHDJYla"><i id="media" className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/natostagram/"> <i id="media" className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                <div className="keireki">
                    <ul className="keirekiul">
                        <li>2017年、豊島高校を卒業</li>
                        <li>2017年、環境問題に興味を持ち大学で学ぶ</li>
                        <li>2020年、酸性雨とpm2.5の関係性について研究を始める。</li>
                        <li>同年、プログラミングに興味を持ち勉強を始める</li>
                    </ul>
                </div>
                <div className="My">
                    <img className="Face" src={Face} />
                    <ul className="Proul">
                        <li><b>名前：</b>　　名執祐太郎</li>
                        <li><b>所属：</b>　　東京都市大学環境学部</li>
                        <li><b>研究室：</b>　咸研究室</li>
                        <li><b>研究内容：</b>酸性雨とpm2.5の関係性について</li>
                    </ul>
                </div>
            </div>
        );
    }
}