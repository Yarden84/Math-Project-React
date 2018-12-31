import React, { Component } from 'react';
import './inequation.css';
import './subjects.css';

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
        lessThan: "<"
    }

    constructor(props) {
        super(props);
        this.openContent = this.openContent.bind(this);
        this.startRotate = this.startRotate.bind(this);
        this.stopRotate = this.stopRotate.bind(this);

        this.props.setSlide1(true);
        this.props.setSlide2(true);
        this.props.setAnswer1(false);
        this.props.setAnswer2(false);
        this.props.setSpin("");
        this.props.setMove("");
        this.props.setImgBtnClicked(false);

        if (localStorage.getItem('slide1') == 'false') {
            this.props.setSlide1(false);
            localStorage.setItem('slide1', 'true');
        }
        if (localStorage.getItem('slide2') == 'false') {
            this.props.setSlide2(false);
            localStorage.setItem('slide2', 'true');
        }
    }

    componentDidMount() {
        document.title = "להבין מתמטיקה - אי שוויון עם ערך מוחלט"
    }

    openContent(x) {
        if (x === 'slide1') {
            this.props.setSlide1(!this.props.slide1);
        }
        else {
            this.props.setSlide2(!this.props.slide2);
            this.props.setImgBtnClicked(!this.props.imgBtnClicked);
            if (this.props.slide2) {
                this.stopRotate();
            }
            if (!this.props.imgBtnClicked) {
                this.props.setMove("moveImg1");
            }
            else {
                this.props.setMove("moveImg2");
            }
        }
    }


    startRotate() {
        if (!this.props.imgBtnClicked) {
            this.props.setSpin("spinImg ");
        }
    }

    stopRotate() {
        if (!this.props.imgBtnClicked) {
            this.props.setSpin("");
            this.props.setMove("");
        }
    }


    showAnswer(x) {
        if (x === 'answer1') {
            this.props.setAnswer1(!this.props.answer1);
        }
        else {
            this.props.setAnswer2(!this.props.answer2);
        }
    }



    render() {
        return (
            <BrowserRouter>
                <div className="bg">
                    <div className="container text-right subjectContent" dir="rtl">

                        <h1 className="text-center" id="arr0">אי שוויון עם ערך מוחלט</h1>

                        <br /><br />


                        <div class="accordion" id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            חזרה ותזכורת
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" class={this.props.slide1 == false ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        <div className="subjectContent1">
                                            <p>בטרם נעסוק באי שוויון עם ערך מוחלט, נערוך תזכורת קצרה לטכניקות של אי שוויונות בכלל. (מי שאמון על טכניקות אלה יכול לעבור מיד לנושא עצמו).</p>
                                            <p>פתרון אי שוויון לינארי:</p>
                                            <p><pre>נפתור את אי השוויון:          1-4x{this.state.lessThan}5</pre></p>
                                            <p><pre>תחילה נעביר אגפים:           4x{this.state.lessThan}4-</pre></p>
                                            <p><pre>נחלק במקדם:                      x>-1           (הכפלה או חילוק במספר שלילי הופכים את הסימן!)</pre></p>
                                            <br />

                                            <div style={{ display: "block" }}>
                                                <p style={{ display: "inline-block" }}>פתרון מערכת "או":</p>
                                                <table id="inequationTable">
                                                    <tr className="text-center">
                                                        <td className="text-center">4x-3 {this.state.greaterThan} 7x+12 </td>
                                                        <td className="text-center">או</td>
                                                        <td className="text-center">7x {this.state.lessThan} 2x-10</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td className="text-center">3x {this.state.greaterThan}  15-</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">5x {this.state.lessThan} -10</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td className="text-center">x {this.state.lessThan} -5</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">x {this.state.greaterThan} -2</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <p>הצגת הפתרונות:</p>
                                            <img src={require("../../img/inequation1.png")} alt="no image 1" id="inequationImg1" />

                                            <p>והתשובה הסופית:  x{this.state.lessThan}-2</p>

                                            <br /><br />

                                            <p><pre>פתרון מערכת "וגם":                        5x+7{this.state.lessThan}6x+3{this.state.lessThan}15</pre></p>

                                            <div id="inBlock">
                                                <div id="inBlockR">
                                                    פירוק אי השוויונות:
                                                </div>
                                                <div id="inBlockL">
                                                    <table>
                                                        <tr>
                                                            <td>5x+7 {this.state.lessThan} 6x+3</td>
                                                            <td>וגם</td>
                                                            <td>6x+3 {this.state.lessThan} 15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>-x {this.state.lessThan} -4</td>
                                                            <td></td>
                                                            <td>6x {this.state.lessThan} 12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>x {this.state.greaterThan} 4</td>
                                                            <td></td>
                                                            <td>x {this.state.lessThan} 2</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <img src={require("../../img/inequation2.png")} alt="no image 2" id="inequationImg2" />
                                            <p>והפתרון:  x=&Oslash;</p>


                                            <button className="btn btn-link understandBtn" onClick={() => this.openContent('slide2')} onMouseEnter={this.startRotate} onMouseLeave={this.stopRotate}><strong>בדיקת הבנה</strong></button>
                                            <img src={require("../../img/understand5.jpg")} alt="no image" className={"understandImg " + this.props.spin + this.props.move} />
                                            <SlideDown closed={this.props.slide2} className="questions my-dropdown-slidedown2">
                                                <h6>פתרו את אי השוויונות הבאים:</h6>
                                                <ol>
                                                    <li>
                                                        <p className="ineQ" dir="ltr">2x-5{this.state.lessThan}4(3x-1) <span style={{ paddingRight: 7, paddingLeft: 7 }}> או </span>  2(x+8)+7(x-1){this.state.greaterThan}5   </p>
                                                        <button className="btn btn-link answer1Btn" onClick={() => this.showAnswer('answer1')}>תשובה:</button>
                                                        <Animate show={this.props.answer1} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                            <p className="answer1">x>-<sup>4</sup>&frasl;<sub>9</sub></p>
                                                        </Animate>
                                                    </li>
                                                    <li>
                                                        <p className="ineQ">x-2{this.state.lessThan}3(2x+5)-9{this.state.lessThan}19  </p>
                                                        <button className="btn btn-link answer2Btn" onClick={() => this.showAnswer('answer2')}>תשובה:</button>
                                                        <Animate show={this.props.answer2} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                            <p className="answer2" dir="ltr">-<sup>8</sup>&frasl;<sub>5</sub> {this.state.lessThan} x {this.state.lessThan} <sup>13</sup>&frasl;<sub>6</sub></p>
                                                        </Animate>
                                                    </li>
                                                </ol>

                                            </SlideDown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            אי שוויון עם ערך מוחלט
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body">

                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            אי שיוויון עם רב איבר בערך מוחלט
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body">

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="buyItem">
                            <p>לרכישת הפרק המלא:</p>
                            <Link to="/shoppingCart" target="_parent" className="shoppingCartLink">
                                <button onClick={() => this.props.itemAdd('inequation')} className="btn btn-warning shoppingBtn">הוסף לעגלת קניות<FontAwesomeIcon icon={faCartArrowDown} size="1x" style={{ marginRight: "5px" }} /></button>
                            </Link>
                        </div>




                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Inequation;