import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Header.css';
import { Reveal, RevealGlobalStyles } from 'react-genie';


// const App = () => {
//     return (
//         <div>
//             <RevealGlobalStyles />
//             <div>rest of the app</div>
//         </div>
//     );
// };

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("挿入されました");
        const main = document.getElementById("main");
        main.classList.add("active");
        console.log("activeクラスを足しました");
        // 1. 4　秒待つ
        // 2. submainになにかアニメーションクラスを与える "fade-in" とか


        const submain = document.getElementById("submain");
        const fadein = function () {
            submain.classList.add('fadein');
        }
        setTimeout(fadein, 4500);

        const fa=document.getElementById("font")
        const fadein1 = function () {
            fa.classList.add('fadein');
        }

        setTimeout(fadein1, 6000);
    }


    render() {
        return (
            <div className="header">
                <h1 className="main" id="main">環境問題の原因はあなたです。</h1>
                <h3 className="submain" id="submain">環境問題を知らないあなたへ</h3>
                <h3 className="submain2">環境とはなにか？</h3>
                <i id='font' className="fa fa-angle-double-down" aria-hidden="true"></i>
                
                
            </div>
         
        );
    }
}

