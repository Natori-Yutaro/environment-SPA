import React, { Component,version} from 'react'
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

        ScrollReveal().reveal(this.refs.k1, saku);

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
                <i id='awe' className="fa fa-angle-double-down" aria-hidden="true"></i>

            </div>
        )
    }
}


