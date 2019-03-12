import React, { Component } from 'react';
import spinner from '../../img/spinner/spinner.gif'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsAxiosData } from '../../actions/items';

import './allPosts.sass';

class AllPosts extends Component {

    
    componentDidMount() {
        this.props.itemsAxiosData();        
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

        const { posts, isLoaded } = this.props;
       
        if(isLoaded) {
            return  <div className="allPosts-spinner">
                        <img src={spinner} alt='spinner'/>
                    </div>
        }
        
        const visibleItem = this.visiblePost( posts );

        return (
            <div className="allPosts__wrapper-right">
                {visibleItem.map((item, id) => (
                   
                    <>
                        <div className="allPosts__right-posts" key={id}>
                            
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

const mapStateToProps = (state) => {

    return {
        posts: state.posts,
        isLoaded: state.isLoaded
    };
};

export default connect(mapStateToProps, {itemsAxiosData})(AllPosts);