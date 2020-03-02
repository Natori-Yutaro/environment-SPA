import React, { Component, version } from 'react'
import './Result.css'
import 'font-awesome/css/font-awesome.min.css';
import ScrollReveal from "scrollreveal"

export default class Result extends Component {

    componentDidMount = () => {
        const saku = {
            duration: 1000,
            delay: 500,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        };

        const saku2 = {
            duration: 1000,
            delay: 500,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        };

        ScrollReveal().reveal(this.refs.k1, saku);
        ScrollReveal().reveal(this.refs.k2, saku2);

        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset);
        });

        const mi = document.getElementById("saku");
        console.log(mi);






    }

    render() {
        return (
            <div className="result">
                <h1 id='saku' className='saku' ref='k1'>私たちにできることは何があるのだろう？</h1>
                <h1 id="saku" className="saku2" ref="k2">私たちにできることは？</h1>
                <i id='awe' className="fa fa-angle-double-down" aria-hidden="true"></i>

            </div>
        )
    }
}


