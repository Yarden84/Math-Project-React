import React, { Component } from 'react';
import './search.css';

import { BrowserRouter, NavLink } from 'react-router-dom';


class Search extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="searchResult">
                    {this.props.chapters.map(chapter => (
                        <div className="link" key={chapter} >
                            <NavLink className="nav-link" to={chapter.chapter} target="_parent" onClick={() => this.props.setSlide(chapter.num)}>{chapter.section}</NavLink>
                        </div>
                    ))}
                </div>
            </BrowserRouter>
        );
    }
}

export default Search;



