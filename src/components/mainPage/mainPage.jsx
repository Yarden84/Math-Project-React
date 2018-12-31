import React, { Component } from 'react';
import './mainPage.css';

import { BrowserRouter, Link } from 'react-router-dom';

class MainPage extends Component {

    componentDidMount() {
        document.title = "להבין מתמטיקה - עמוד ראשי"
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div id="coverImg">
                        <div id="headline">
                            <h1><span id="understand">להבין</span> <span id="math">מתמטיקה</span></h1>
                        </div>
                        <div id="line"></div>
                        <div id="content">
                            <h3 className="text-right font-italic" dir="rtl"><strong>מערך שיעורי מתמטיקה לבגרות מלווה בהסבר מעמיק של החומר הנלמד לצד תרגול. נועד לסייע למורים ולאלו המעדיפים ללמוד באופן עצמאי.</strong></h3>
                        </div>
                    </div>

                    <div id="chapters1" className="container-fluid">

                        <div className="card">
                            <img className="card-img-top" src={require("../../img/calculus4.jpg")} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center">חשבון דיפרנציאלי ואינטגרלי</h5>
                                <p className="card-text text-right" dir="rtl">במתמטיקה אנו מוצאים שני תחומי מחקר עיקריים: הראשון הוא תחום המתמטיקה השימושית, והשני הוא תחום המתמטיקה התיאורטית. המתמטיקאים התיאורטיים הם אלה...</p>
                                <Link to="/calculus" className="btn btn-warning float-right cardBtn" id="calculusBtn" target="_parent" onClick={() => this.props.setSlide(1)}>המשך לקרוא</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src={require("../../img/induction2.jpg")} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center">אינדוקציה מתמטית</h5>
                                <p className="card-text text-right" dir="rtl">ראשית נברר לעצמנו מהי אינדוקציה בכלל, ומהי אינדוקציה מתמטית. המילה אינדוקציה, לפי מילון אבן שושן, היא "שיטת לימוד מן הפרט אל הכלל". כלומר הוכחה של חוק מסוים מתוך בחינת מקרים פרטיים...
                                </p>
                                <Link to="/induction" className="btn btn-warning float-right cardBtn" id="inductionBtn" target="_parent" onClick={() => this.props.setSlide(1)}>המשך לקרוא</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src={require("../../img/trig6.jpg")} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center">טריגונומטריה</h5>
                                <p className="card-text text-right" dir="rtl">הטריגונומטריה נחקרה עוד בימי היוונים הקדמונים לשם הבנת הקשרים בין צלעות לזוויות במשולשים שונים; תחילה במשולשים ישרי זווית ואחר כך גם במשולשים כלליים. עם הזמן הורחבה הטריגונומטריה...
                                </p>
                                <Link to="/trig" className="btn btn-warning float-right cardBtn" id="trigBtn" target="_parent" onClick={() => this.props.setSlide(1)}>המשך לקרוא</Link>
                            </div>
                        </div>

                    </div>

                    <div id="chapters2" className="container-fluid">

                        <div class="card">
                            <div className="row">
                                <div className="col-md-8">
                                    <div class="card-body">
                                        <h5 className="card-title text-center">חשבון דיפרנציאלי ואינטגרלי</h5>
                                        <p class="card-text text-right" dir="rtl">במתמטיקה אנו מוצאים שני תחומי מחקר עיקריים: הראשון הוא תחום המתמטיקה השימושית, והשני הוא תחום המתמטיקה התיאורטית. המתמטיקאים התיאורטיים הם אלה...</p>
                                        <Link to="/calculus" className="btn btn-warning cardBtn" id="calculusBtn" target="_parent" onClick={() => this.props.setSlide(1)}>המשך לקרוא</Link>
                                    </div>
                                </div>
                                <div className="col-md-3 chapters2Img1"></div>
                            </div>
                        </div>

                        <div class="card">
                            <div className="row">
                                <div className="col-md-8">
                                    <div class="card-body">
                                        <h5 className="card-title text-center">אינדוקציה מתמטית</h5>
                                        <p class="card-text text-right" dir="rtl">ראשית נברר לעצמנו מהי אינדוקציה בכלל, ומהי אינדוקציה מתמטית. המילה אינדוקציה, לפי מילון אבן שושן, היא "שיטת לימוד מן הפרט אל הכלל". כלומר הוכחה של חוק מסוים מתוך בחינת מקרים פרטיים...</p>
                                        <Link to="/induction" className="btn btn-warning cardBtn" id="inductionBtn" target="_parent" onClick={() => this.props.setSlide(1)}>המשך לקרוא</Link>
                                    </div>
                                </div>
                                <div className="col-md-3 chapters2Img2"></div>
                            </div>
                        </div>

                        <div class="card">
                            <div className="row">
                                <div className="col-md-8">
                                    <div class="card-body">
                                        <h5 className="card-title text-center">טריגונומטריה</h5>
                                        <p class="card-text text-right" dir="rtl">הטריגונומטריה נחקרה עוד בימי היוונים הקדמונים לשם הבנת הקשרים בין צלעות לזוויות במשולשים שונים; תחילה במשולשים ישרי זווית ואחר כך גם במשולשים כלליים. עם הזמן הורחבה הטריגונומטריה...</p>
                                        <Link to="/trig" className="btn btn-warning cardBtn" id="trigBtn" target="_parent" onClick={() => this.props.setSlide(1)}>המשך לקרוא</Link>
                                    </div>
                                </div>
                                <div className="col-md-3 chapters2Img3"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default MainPage;