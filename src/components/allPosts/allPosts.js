import React, { Component } from 'react';
import spinner from '../../img/spinner/spinner.gif'
import {Link} from 'react-router-dom';

import fetchApi from '../../service/fetchApi';

import './allPosts.sass';

export default class AllPosts extends Component {

    fetchApi = new fetchApi();

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
        
    componentDidMount() {
        
        this.fetchApi.getPosts()
            .then( (items) => {

                this.setState ({
                    items,
                    isLoaded: true,
                })
            })
    }

    visiblePost(items) {

        return items.filter((item) => {
            if (item.id <= 7){
                return item;
            } else {
                return null;
            }
        });
    }

    getDate() {

        let d = new Date(),
            hrs = d.getHours(),
            min = d.getMinutes(),
            day = d.getDate(),
            month = d.getMonth(),
            year = d.getFullYear();


        let monthArray = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");
        const actualDate = ` ${day} ${monthArray[month]} ${year} года ${hrs} : ${min}`;
        
        return actualDate
    }

    render() {

        const { items, isLoaded } = this.state;

        if(!isLoaded) {
            return  <div className="allPosts-spinner">
                        <img src={spinner} alt='spinner'/>
                    </div>
        }

        const visibleItem = this.visiblePost( items );

        return (
            <div className="allPosts__wrapper-right">
                {visibleItem.map((item) => (
                   
                    <>
                        <div className="allPosts__right-posts" key={item.id}>
                            
                            <h1>{item.title}</h1>
                            <div className="allPosts-right-data">
                                {this.getDate()}  |  TRAVEL
                            </div>

                            <p>{item.body}</p>
                            <div className="allPosts__button">
                                <Link className="allPosts__button-viewPost" to={`/posts/${item.id}`} >
                                    Continue reading    
                                </Link>
                            </div>

                        </div>
                        <div className="allPosts-right-line"></div>
                    </>
                    
                ))}
                <div>
                    <a className="allPosts-button-down" href='/'>
                        More posts
                    </a>
                </div>    
            </div>
        );
    }
}