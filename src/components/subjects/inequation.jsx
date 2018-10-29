import React, { Component } from 'react';
import './inequation.css';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Animate } from "react-show";

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);

class Inequation extends Component {
    state = {
        greaterThan: ">",
        lessThan: "<",
        slide1: true,
        slide2: true,
        answer1: false,
        answer2: false,
        spin: "",
        move: "",
        imgBtnClicked: false
    }

    constructor() {
        super();
        this.openContent = this.openContent.bind(this);
        this.startRotate = this.startRotate.bind(this);
        this.stopRotate = this.stopRotate.bind(this);
    }

    openContent(x) {
        if (x === 'slide1') {
            this.setState({ slide1: !this.state.slide1 });
        }
        else {
            this.setState({ slide2: !this.state.slide2 });
            this.setState({ imgBtnClicked: !this.state.imgBtnClicked });
            if (this.state.slide2) {
                this.stopRotate();
            }
            if (!this.state.imgBtnClicked) {
                this.setState({ move: "moveImg1" });
            }
            else {
                this.setState({ move: "moveImg2" });
            }
        }
    }


    startRotate() {
        if (!this.state.imgBtnClicked) {
            this.setState({ spin: "spinImg " });
        }
    }

    stopRotate() {
        if (!this.state.imgBtnClicked) {
            this.setState({ spin: "" });
            this.setState({ move: "" });
        }
    }


    showAnswer(x) {
        if (x === 'answer1') {
            this.setState({ answer1: !this.state.answer1 });
        }
        else {
            this.setState({ answer2: !this.state.answer2 });
        }
    }



    render() {
        return (
            <BrowserRouter>
                <div className="bg">
                    <div className="container text-right content" dir="rtl">

                        <h1 className="text-center" id="arr0">אי שוויון עם ערך מוחלט</h1>

                        <br /><br />

                        <button className="btn btn-link content1Btn" id="arr1" onClick={() => this.openContent('slide1')}>חזרה ותזכורת</button>
                        <SlideDown closed={this.state.slide1} className="my-dropdown-slidedown1">
                            <div className="content1">
                                <p>בטרם נעסוק באי שוויון עם ערך מוחלט, נערוך תזכורת קצרה לטכניקות של אי שוויונות בכלל. (מי שאמון על טכניקות אלה יכול לעבור מיד לנושא עצמו).</p>
                                <p>פתרון אי שוויון לינארי:</p>
                                <p><pre>נפתור את אי השוויון:          1-4x{this.state.lessThan}5</pre></p>
                                <p><pre>תחילה נעביר אגפים:           4x{this.state.lessThan}4-</pre></p>
                                <p><pre>נחלק במקדם:                      x>-1           (הכפלה או חילוק במספר שלילי הופכים את הסימן!)</pre></p>
                                <br />
                                <p><pre>פתרון מערכת "או":   4x-3 > 7x+12          או        7x {this.state.lessThan} 2x-10</pre></p>
                                <p><pre>                                       5x{this.state.lessThan}-10                             -3x{this.state.greaterThan}15</pre></p>
                                <p><pre>                                        x{this.state.greaterThan}-2                                  x{this.state.lessThan}-5</pre></p>

                                <p>הצגת הפתרונות:</p>
                                <img src={require("../../img/inequation1.jpg")} alt="no image 1" id="img1" />
                                <p>והתשובה הסופית:  x{this.state.lessThan}-2</p>

                                <br /><br />

                                <p><pre>פתרון מערכת "וגם":                        5x+7{this.state.lessThan}6x+3{this.state.lessThan}15</pre></p>
                                <p><pre>פירוק אי השוויונות:        6x+3{this.state.lessThan}15         וגם          5x+7{this.state.lessThan}6x+3</pre></p>
                                <p><pre>                                     x{this.state.lessThan}-4                                 6x{this.state.lessThan}12-</pre></p>
                                <p><pre>                                       x{this.state.greaterThan}4                                    x{this.state.lessThan}2</pre></p>
                                <img src={require("../../img/inequation2.jpg")} alt="no image 2" id="img2" />
                                <p>והפתרון:  x=&Oslash;</p>


                                <button className="btn btn-link understandBtn" onClick={() => this.openContent('slide2')} onMouseEnter={this.startRotate} onMouseLeave={this.stopRotate}><strong>בדיקת הבנה</strong></button>
                                <img src={require("../../img/understand5.jpg")} alt="no image" className={"understandImg " + this.state.spin + this.state.move} />
                                <SlideDown closed={this.state.slide2} className="questions my-dropdown-slidedown2">
                                    <h6>פתרו את אי השוויונות הבאים:</h6>
                                    <ol>
                                        <li>
                                            <p dir="ltr">2x-5{this.state.lessThan}4(3x-1) <span style={{ paddingRight: 7, paddingLeft: 7 }}> או </span>  2(x+8)+7(x-1){this.state.greaterThan}5   </p>
                                            <button className="btn btn-link answer1Btn" onClick={() => this.showAnswer('answer1')}>תשובה:</button>
                                            <Animate show={this.state.answer1} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                <p className="answer1">x>-<sup>4</sup>&frasl;<sub>9</sub></p>
                                            </Animate>
                                        </li>
                                        <li>
                                            <p>x-2{this.state.lessThan}3(2x+5)-9{this.state.lessThan}19  </p>
                                            <button className="btn btn-link answer2Btn" onClick={() => this.showAnswer('answer2')}>תשובה:</button>
                                            <Animate show={this.state.answer2} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                <p className="answer2" dir="ltr">-<sup>8</sup>&frasl;<sub>5</sub> {this.state.lessThan} x {this.state.lessThan} <sup>13</sup>&frasl;<sub>6</sub></p>
                                            </Animate>
                                        </li>
                                    </ol>

                                </SlideDown>
                            </div>
                        </SlideDown>

                        <br /><br />
                        <button className="btn btn-link content2Btn" id="arr2" disabled>אי שוויון עם ערך מוחלט</button>

                        <br /><br />
                        <button className="btn btn-link content3Btn" id="arr3" disabled>אי שיוויון עם רב איבר בערך מוחלט</button>

                        <br /><br /><br /><br />
                        <button className="btn btn-link inequationAllChaptersBtn" disabled>כל הפרקים המלאים</button>
                        <Link to="/shoppingCart" target="_parent" className="shoppingCartLink" id="inequation">
                            <button onClick={() => this.props.itemAdd('inequation')} className="btn btn-warning shoppingBtn inequation">הוסף לעגלת קניות<FontAwesomeIcon icon={faCartArrowDown} size="1x" style={{ marginRight: "5px" }} /></button>
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Inequation;