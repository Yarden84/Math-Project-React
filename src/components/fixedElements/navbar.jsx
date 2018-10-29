import React, { Component } from 'react';
import './navbar.css';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import MainPage from '../mainPage/mainPage';
import About from '../about/about';
import Inequation from '../subjects/inequation';
import WordProblems from '../subjects/wordProblems';
import Induction from '../subjects/induction';
import Calculus from '../subjects/calculus';
import Trig from '../subjects/trig';
import Contact from '../contact/contact';
import ShoppingCart from '../shoppingCart/shoppingCart';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);

class NavBar extends Component {
    state = {
        subjects: ['inequation', 'wordProblems', 'induction', 'calculus', 'trig'],
        itemsNum: 0
    }

    constructor() {
        super();
        this.itemAdd = this.itemAdd.bind(this);
        this.badgeNum = this.badgeNum.bind(this);
    }

    componentDidMount() {
        let itemsNum = 0;
        for (let i = 0; i < this.state.subjects.length; i++) {
            if (localStorage.getItem(this.state.subjects[i]) === 'true') {
                itemsNum++;
            }
        }
        this.setState({ itemsNum });
    }

    itemAdd(item) {
        localStorage.setItem(item, true);
    }

    badgeNum() {
        let itemsNum = 0;
        for (let i = 0; i < this.state.subjects.length; i++) {
            if (localStorage.getItem(this.state.subjects[i]) === 'true') {
                itemsNum++;
            }
        }
        this.setState({ itemsNum });
    }




    render() {

        return (

            <BrowserRouter>
                <div className="NavBar">
                    <nav className="navbar navbar-expand-lg navbar-light row">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" id="searchLine" type="search" placeholder="חיפוש" aria-label="Search" dir="rtl">
                                </input>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/shoppingCart" activeStyle={{ color: 'black' }}><FontAwesomeIcon icon={faCartArrowDown} size="2x" /></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div className="items"><strong><span className="itemsNum">{this.state.itemsNum}</span></strong></div>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" activeStyle={{ color: 'black' }}>צרו קשר</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dir="rtl">
                                    נושאים
                                    <span style={{ marginRight: 5 }}></span></a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item text-right" to="/inequation">אי שוויון עם ערך מוחלט</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/wordProblems">בעיות מילוליות</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/induction">אינדוקציה מתמטית</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/calculus">חשבון דיפרנציאלי ואינטגרלי</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/trig">טריגונומטריה</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" activeStyle={{ color: 'black' }}>אודות</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mainPage" activeStyle={{ color: 'black' }}>דף הבית </NavLink>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>

                    <Route exact path="/" component={MainPage} />
                    <Route path="/mainPage" component={MainPage} />
                    <Route path="/about" component={About} />
                    <Route path="/inequation" render={(props) => (<Inequation {...props} itemAdd={this.itemAdd} />)} />
                    <Route path="/wordProblems" render={(props) => (<WordProblems {...props} itemAdd={this.itemAdd} />)} />
                    <Route path="/induction" render={(props) => (<Induction {...props} itemAdd={this.itemAdd} />)} />
                    <Route path="/calculus" render={(props) => (<Calculus {...props} itemAdd={this.itemAdd} />)} />
                    <Route path="/trig" render={(props) => (<Trig {...props} itemAdd={this.itemAdd} />)} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/shoppingCart" render={(props) => (<ShoppingCart {...props} badgeNum={this.badgeNum} />)} />
                </div>

            </BrowserRouter >

        );
    }

}

export default NavBar;