import React, { Component } from "react"
import './Intro.css';
import ScrollReveal from 'scrollreveal'
import poverty from './poverty.jpg'
import ondanka from './ondanka.jpg'
import sabakuka from './sabakuka.jpg'
import sanseiu from './sanseiu.jpg'



export default class Intro extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount = () => {
        const poverty = {
            duration: 1000,
            delay: 500,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        };

        const ondanka = {
            duration: 1000,
            delay: 650,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        }

        const sabakuka = {
            duration: 1000,
            delay: 800,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        }

        const sanseiu = {
            duration: 1000,
            delay: 950,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        }

        const teigi = {
            duration: 1000,
            delay: 1100,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        }

        const teigi2 = {
            duration: 1000,
            delay: 1100,
            distance: '20px',
            scale: 1,
            easing: 'ease'
        }



        ScrollReveal().reveal(this.refs.box1, poverty)
        ScrollReveal().reveal(this.refs.box2, ondanka)
        ScrollReveal().reveal(this.refs.box3, sabakuka)
        ScrollReveal().reveal(this.refs.box4, sanseiu)
        ScrollReveal().reveal(this.refs.box5, teigi)
        ScrollReveal().reveal(this.refs.box6, teigi2)
    }



    render() {
        return (
            <div className="intro">
                <h1 className="midasi" >あなたは環境について考えたことありますか？</h1>
                <h1 className="midasi-mb">環境問題を考える。</h1>
                <div className="content">
                    <div className="poverty" id='poverty' ref='box1'>
                        <p>貧困</p>
                        <img className="poverty-img" src={poverty} />
                        <p>2015年で苦しむ人は7億人弱になります。</p>
                    </div>


                    <div className="ondanka" id='ondanka' ref='box2'>
                        <p>温暖化</p>
                        <img className="ondanka-img" src={ondanka} />
                        <p>あと20年後には氷がなくなると言われています。</p>
                    </div>


                    <div className="sabakuka" id='sabakuka' ref='box3'>
                        <p>砂漠化</p>
                        <img className="sabakuka-img" src={sabakuka} />
                        <p>毎年264万haが砂漠化しています。</p>

                    </div>

                    <div className="sanseiu" id='sanseiu' ref='box4'>
                        <p>酸性雨</p>
                        <img className="sanseiu-img" src={sanseiu} />
                        <p> 酸性雨は人体被害や森林破壊を引き起こします。</p>

                    </div>


                </div>

                <p className='teigi' ref='box5'>これらは世界で起こっている問題のほんの<span>一部</span>に過ぎないのです。</p>
                <p className="teigi2" ref='box6'>これらは環境問題の<span>一部</span>に過ぎないのです。</p>
            </div>


        )
    }
}
