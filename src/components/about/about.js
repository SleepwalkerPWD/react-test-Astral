import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fetchApi from '../../service/fetchApi';
import bg from '../../img/about/bg.jpg';

import './about.sass';

export default class About extends Component {

    fetchApi = new fetchApi();

    render() {
                // console.log(this.fetchApi.getPost());

        return (
            <div className='about'>
                <div className="home__wrapper-left aboutSize">
                    <h2>
                        My personal blog
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis sit amet sodales ipsum. Aenean felis nibh, dignissim
                        eu tortor ut, pulvinar commodo tortor. Pellentesque 
                        gravida sapien velit, in pellentesque sapien sagittis nec.
                    </p>
                    <div className="line-up"></div>
                    <nav className="home__menu">
                        <div className="home__menu-home">
                            <Link to="/">
                                HOME
                            </Link>
                        </div>
                        <div className="home__menu-about">
                            <Link to="/about">
                                ABOUT
                            </Link> 
                        </div>
                    </nav>
                    <div className="line-down"></div>
                    <div className="left-icons-facebook">
                        <a href="https://facebook.com">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7778 0H2.22222C0.962963 0 0 0.962963 0 2.22222V17.7778C0 19.037 0.962963 20 2.22222 
                                20H10V12.2222H7.77778V9.48148H10V7.18518C10 4.81481 11.3333 3.11111 14.1481 3.11111H16.1481V6H14.8148C13.7037
                                6 13.2593 6.81482 13.2593 7.62963V9.48148H16.1481L15.5556 12.2222H13.3333V20H17.7778C19.037 20 20 19.037 20 
                                17.7778V2.22222C20 0.962963 19.037 0 17.7778 0Z" fill="#868686"/>
                            </svg>
                        </a>
                    </div>
                    <div className="left-icons-instagram">
                        <a href="https://instagram.com">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9216 10.0787C15.9216 13.3858 13.2549 16.1417 9.88235 16.1417C6.5098 16.1417 3.92157 13.3858 3.92157 
                                10.0787C3.92157 9.68504 3.92157 9.29134 4.07843 8.89764H0V16.9291C0 18.6614 1.41176 20 3.05882 20H16.7059C18.4314 
                                20 19.7647 18.5827 19.7647 16.9291V8.8189H15.7647C15.7647 9.2126 15.9216 9.6063 15.9216 10.0787ZM16.7059 0H3.05882C1.33333 
                                0 0 1.41732 0 3.07087V6.45669H5.01961C6.03922 4.88189 7.84314 3.85827 9.96078 3.85827C12 3.85827 13.7255 4.88189 14.902 6.45669H20V3.07087C19.7647 
                                1.41732 18.3529 0 16.7059 0ZM18.2745 3.93701C18.2745 4.33071 18.0392 4.56693 17.6471 4.56693H16C15.6863 4.56693 15.3725 4.33071 15.3725 3.93701V2.28346C15.3725
                                1.88976 15.6078 1.65354 16 1.65354H17.6471C17.9608 1.65354 18.2745 1.88976 18.2745 2.28346V3.93701ZM13.5686 10.0787C13.5686 8.11024 11.9216 6.37795 9.88235 6.37795C7.84314
                                6.37795 6.19608 8.0315 6.19608 10.0787C6.19608 12.126 7.84314 13.7795 9.88235 13.7795C11.9216 13.7795 13.5686 12.0472 13.5686 10.0787Z" fill="#868686"/>
                            </svg>
                        </a>
                    </div>
                    <div className="left-icons-github">
                        <a href="https://github.com">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.96416 0C4.51613 0 0 4.55622 0 10.2148C0 14.6975 2.86738 18.5923 6.81004 19.9151C7.31183 19.9886 7.4552
                                19.6946 7.4552 19.4007V17.637C4.6595 18.2249 4.08602 16.2407 4.08602 16.2407C3.65591 15.0649 3.01075 14.771 3.01075 
                                14.771C2.07885 14.1096 3.08244 14.1831 3.08244 14.1831C4.08602 14.2566 4.58781 15.2119 4.58781 15.2119C5.44803 
                                16.7551 6.9534 16.3142 7.4552 16.0937C7.52688 15.4324 7.81362 14.9914 8.10036 14.6975C5.87814 14.4035 3.58423 13.5952
                                3.58423 9.62685C3.58423 8.52454 3.94265 7.5692 4.58781 6.90782C4.58781 6.68736 4.22939 5.65853 4.73118 4.26227C4.73118
                                4.26227 5.5914 3.96832 7.4552 5.29109C8.24373 5.07063 9.10394 4.92366 9.96416 4.92366C10.8244 4.92366 11.6846 5.07063 
                                12.4731 5.29109C14.4086 3.96832 15.1971 4.26227 15.1971 4.26227C15.7706 5.65853 15.4122 6.68736 15.2688 6.98131C15.914
                                7.71618 16.2724 8.59803 16.2724 9.70034C16.2724 13.5952 13.9068 14.477 11.6846 14.771C12.043 15.0649 12.3297 15.7263
                                12.3297 16.6816V19.4742C12.3297 19.7681 12.5448 20.0621 13.0466 19.9886C17.1326 18.5923 20 14.771 20 10.2148C20 
                                4.55622 15.4839 0 9.96416 0Z" fill="#868686"/>
                            </svg>
                        </a>
                    </div>
                    <div className="left-icons-twitter">
                        <a href="https://twitter.com">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.971 5V5.625C17.971 12.3214 13.8406 20 6.30435 20C3.98551 20 1.81159 19.1964 0 17.7679C0.289855 17.7679 0.652174 17.8571 1.01449 17.8571C2.97101 17.8571 4.71015 17.0536 6.08696 15.7143C4.27536 15.7143 2.75362 14.1964 2.24638 12.2321C2.46377 12.3214 2.75362 12.3214 3.04348 12.3214C3.4058 12.3214 3.76812 12.2321 4.13043 12.1429C2.24638 11.6071 0.797101 9.55357 0.797101 7.14286V7.05357C1.37681 7.41071 1.95652 7.67857 2.68116 7.67857C2.1203 7.21924 1.66104 6.59515 1.34478 5.86256C1.02852 5.12997 0.865208 4.31191 0.869565 3.48214C0.869565 2.58929 1.08696 1.69643 1.44928 0.982143C3.47826 4.01786 6.52174 6.07143 9.92754 6.25C9.85507 5.89286 9.85507 5.53571 9.85507 5.08929C9.85507 2.32143 11.6667 0 13.9855 0C15.1449 0 16.2319 0.625 16.9565 1.60714C17.8986 1.33929 18.7681 0.982143 19.5652 0.357143C19.2754 1.51786 18.6232 2.5 17.7536 3.125C18.4783 3.03571 19.2754 2.76786 20 2.41071C19.4203 3.39286 18.7681 4.28571 17.971 5Z" fill="#868686"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="home-about-text">
                <img src={bg} alt="background"/>
                    <div className="home-about-wrapper">
                        <h1>About me</h1>
                        <p> 
                            Nulla lacinia, sapien nec mollis pharetra,
                            neque diam sodales ipsum, suscipit commodo
                            magna quam id felis. Morbi pulvinar venenatis elementum.
                            Etiam est ex, accumsan eu pellentesque nec, maximus 
                            id sem. Nulla facilisi. Donec malesuada aliquet diam, 
                            in porta ex condimentum nec.
                        </p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p>
                            In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci
                            viverra laoreet. Aliquam condimentum neque non cursus dapibus.
                            Aliquam aliquet quam dui, nec facilisis velit ultricies at. 
                            Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar.
                            Quisque fringilla augue ac massa interdum laoreet.
                        </p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p>
                            Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, 
                            pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt,
                            urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae 
                            dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. 
                            Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. 
                            Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis.
                            Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet,
                            blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.
                        </p>
                    
                    </div>

                </div>

            </div>
        );
    }
}
