import React, { Component, version } from 'react'
import './Teian.css'
import 'font-awesome/css/font-awesome.min.css';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Teian extends Component{

  

    render() {
        const setting = {
            dots: true,
            infinite: false,
            accessibility: true,
            autoplaySpeed: 500,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="teian">
                <h1 className="midasi">私たちにもできること</h1>

                <Slider {...setting}>
                    <div>
                        <h3>関心を持とう！</h3>
                        <p　className="sentence">まずは環境問題に関心を持つことから初めてみよう！</p>
                        <p className="sentence"> 身近にある環境問題を知ることで危機感を感じ行動が変わるはずだから。</p>
                    </div>
                    <div>
                        <h3>電気を大切にしよう！</h3>
                        <p className="sentence">電気の消し忘れに気を配るだけでも地球環境を守るための立派な活動です。</p>
                        <p className="sentence">エアコンの設定温度や冷凍庫使い方を考え直してみよう！</p>
                    </div>
                    <div>
                        <h3>ごみを分別しよう！</h3>
                        <p className="sentence">リサイクルできるものをしっかりと分別するのもとても大切です。</p>
                        <p className="sentence">限られた資源を無駄にせずリサイクルすることがとても大切です。</p>
                    </div>
                    <div>
                        <h3>「マイ＊＊」をもとう！</h3>
                        <p className="sentence">外出時にはマイボトルやマイ箸を常備しよう！</p>
                        <p className="sentence">自分が排出するごみを減らすことで小さな力ですが、みんながやれば大きな力になります。</p>
                    </div>
                    <div>
                        <h3>水を大切に使おう！</h3>
                        <p className="sentence">何かと使うことの多い水を無駄にはしていませんか？</p>
                        <p className="sentence">歯を磨くときには水を出しっぱなしにはしない！</p>
                        <p className="sentence">お風呂の水は洗濯や打ち水に利用することでとても大きなエコ活動になります。</p>
                    </div>
                    <div>
                        <h3>知識を得たら行動しよう！</h3>
                        <p className="sentence">知識を得ただけでは何も意味がない！</p>
                        <p className="sentence">自分でもできる地球を守る活動をすぐ実行しよう！</p>
                    </div>
                   
                </Slider>
            </div>
        )
    }
}