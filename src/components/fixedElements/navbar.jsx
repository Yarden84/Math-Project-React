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
import Payment from '../shoppingCart/payment';

import Search from '../search/search';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);



class NavBar extends Component {

    constructor(props) {
        super(props);
        this.badgeNum = this.badgeNum.bind(this);
        this.searchChars = this.searchChars.bind(this);
        this.resetProps = this.resetProps.bind(this);
    }

    componentDidMount() {
        this.badgeNum();
    }

    badgeNum() {
        let itemsSum = 0;
        for (let i = 0; i < this.props.subjects.length; i++) {
            if (localStorage.getItem(this.props.subjects[i].name) === 'true') {
                itemsSum++;
            }
        }

        this.props.setItemsSum(itemsSum);
    }

    resetProps() {
        this.props.setSlide1(true);
        this.props.setSlide2(true);
        this.props.setSlide3(true);
        this.props.setAnswer1(false);
        this.props.setAnswer2(false);
        this.props.setAnswer3(false);
        this.props.setAnswer4(false);
        this.props.setSpin("");
        this.props.setMove("");
        this.props.setImgBtnClicked(false);
    }

    searchChars(event) {
        var foundMatch = false;
        if (event.target.value !== '') {
            const chaptersFound = [];
            for (var chapter in this.props.chapters) {

                for (var i = 0; i < this.props.chapters[chapter].length; i++) {
                    if (this.props.chapters[chapter][i].indexOf(event.target.value) > -1) {
                        foundMatch = true;
                        chaptersFound.push({ chapter: chapter, section: this.props.chapters[chapter][i], num: i });
                        this.props.setArr(chaptersFound);
                    }
                }
            }
        }
        this.props.foundChars(foundMatch);
    }



    render() {

        return (

            <BrowserRouter>
                <div className="NavBar">
                    <nav className="navbar navbar-expand-lg navbar-light row">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0">
                                <input onChange={this.searchChars} className="form-control mr-sm-2" id="searchLine" type="search" placeholder="חיפוש" aria-label="Search" dir="rtl">
                                </input>

                                {this.props.foundMatch ? <Search chapters={this.props.chaptersFound} setSlide={this.props.setSlide} /> : null}

                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/shoppingCart" activeStyle={{ color: 'black' }} onClick={this.resetProps}><FontAwesomeIcon icon={faCartArrowDown} size="2x" /></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div className="items"><strong><span className="itemsNum">{this.props.itemsSum}</span></strong></div>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" activeStyle={{ color: 'black' }} onClick={this.resetProps}>צרו קשר</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dir="rtl">
                                    נושאים
                                    <span style={{ marginRight: 5 }}></span></a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item text-right" to="/inequation" onClick={this.resetProps}>אי שוויון עם ערך מוחלט</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/wordProblems" onClick={this.resetProps}>בעיות מילוליות</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/induction" onClick={this.resetProps}>אינדוקציה מתמטית</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/calculus" onClick={this.resetProps}>חשבון דיפרנציאלי ואינטגרלי</NavLink>
                                    <NavLink className="dropdown-item text-right" to="/trig" onClick={this.resetProps}>טריגונומטריה</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" activeStyle={{ color: 'black' }} onClick={this.resetProps}>אודות</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mainPage" activeStyle={{ color: 'black' }} onClick={this.resetProps}>דף הבית </NavLink>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>

                    <Route exact path="/" render={(props) => (<MainPage {...props} setSlide={this.props.setSlide} />)} />
                    <Route path="/mainPage" render={(props) => (<MainPage {...props} setSlide={this.props.setSlide} />)} />
                    <Route path="/about" component={About} />
                    <Route path="/inequation" render={(props) =>
                        (<Inequation
                            {...props}

                            slide1={this.props.slide1}
                            slide2={this.props.slide2}
                            answer1={this.props.answer1}
                            answer2={this.props.answer2}
                            spin={this.props.spin}
                            move={this.props.move}
                            imgBtnClicked={this.props.imgBtnClicked}

                            setSlide1={this.props.setSlide1}
                            setSlide2={this.props.setSlide2}
                            setAnswer1={this.props.setAnswer1}
                            setAnswer2={this.props.setAnswer2}
                            setSpin={this.props.setSpin}
                            setMove={this.props.setMove}
                            setImgBtnClicked={this.props.setImgBtnClicked}
                            itemAdd={this.props.itemAdd} />)} />
                    <Route path="/wordProblems" render={(props) =>
                        (<WordProblems
                            {...props}

                            slide1={this.props.slide1}
                            slide2={this.props.slide2}
                            slide3={this.props.slide3}
                            answer1={this.props.answer1}
                            spin={this.props.spin}
                            move={this.props.move}
                            imgBtnClicked={this.props.imgBtnClicked}

                            setSlide1={this.props.setSlide1}
                            setSlide2={this.props.setSlide2}
                            setSlide3={this.props.setSlide3}
                            setAnswer1={this.props.setAnswer1}
                            setSpin={this.props.setSpin}
                            setMove={this.props.setMove}
                            setImgBtnClicked={this.props.setImgBtnClicked}
                            itemAdd={this.props.itemAdd} />)} />
                    <Route path="/induction" render={(props) =>
                        (<Induction
                            {...props}

                            slide1={this.props.slide1}
                            slide2={this.props.slide2}
                            slide3={this.props.slide3}
                            answer1={this.props.answer1}
                            spin={this.props.spin}
                            move={this.props.move}
                            imgBtnClicked={this.props.imgBtnClicked}

                            setSlide1={this.props.setSlide1}
                            setSlide2={this.props.setSlide2}
                            setSlide3={this.props.setSlide3}
                            setAnswer1={this.props.setAnswer1}
                            setSpin={this.props.setSpin}
                            setMove={this.props.setMove}
                            setImgBtnClicked={this.props.setImgBtnClicked}
                            itemAdd={this.props.itemAdd} />)} />
                    <Route path="/calculus" render={(props) =>
                        (<Calculus
                            {...props}

                            slide1={this.props.slide1}
                            slide2={this.props.slide2}
                            slide3={this.props.slide3}
                            answer1={this.props.answer1}
                            answer2={this.props.answer2}
                            answer3={this.props.answer3}
                            answer4={this.props.answer4}
                            spin={this.props.spin}
                            move={this.props.move}
                            imgBtnClicked={this.props.imgBtnClicked}

                            setSlide1={this.props.setSlide1}
                            setSlide2={this.props.setSlide2}
                            setSlide3={this.props.setSlide3}
                            setAnswer1={this.props.setAnswer1}
                            setAnswer2={this.props.setAnswer2}
                            setAnswer3={this.props.setAnswer3}
                            setAnswer4={this.props.setAnswer4}
                            setSpin={this.props.setSpin}
                            setMove={this.props.setMove}
                            setImgBtnClicked={this.props.setImgBtnClicked}
                            itemAdd={this.props.itemAdd} />)} />
                    <Route path="/trig" render={(props) =>
                        (<Trig
                            {...props}

                            slide1={this.props.slide1}
                            slide2={this.props.slide2}
                            slide3={this.props.slide3}
                            answer1={this.props.answer1}
                            spin={this.props.spin}
                            move={this.props.move}
                            imgBtnClicked={this.props.imgBtnClicked}

                            setSlide1={this.props.setSlide1}
                            setSlide2={this.props.setSlide2}
                            setSlide3={this.props.setSlide3}
                            setAnswer1={this.props.setAnswer1}
                            setSpin={this.props.setSpin}
                            setMove={this.props.setMove}
                            setImgBtnClicked={this.props.setImgBtnClicked}
                            itemAdd={this.props.itemAdd} />)} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/shoppingCart" render={(props) =>
                        (<ShoppingCart
                            {...props}

                            subjects={this.props.subjects}
                            priceSum={this.props.priceSum}

                            setItemStatus={this.props.setItemStatus}
                            setItemNum={this.props.setItemNum}
                            setPriceSum={this.props.setPriceSum}

                            badgeNum={this.badgeNum} />)} />
                    <Route path="/Payment" component={Payment} />
                </div>

            </BrowserRouter >

        );
    }

}

export default NavBar;