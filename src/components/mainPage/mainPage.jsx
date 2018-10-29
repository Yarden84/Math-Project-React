import React, { Component } from 'react';
import './mainPage.css';

import { BrowserRouter, Link } from 'react-router-dom';

class MainPage extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div id="coverImg">
                        <div className="container float-right" id="headline">
                            <h1><span id="understand">להבין</span> <span id="math">מתמטיקה</span></h1>
                        </div>
                        <div className="container float-right" id="content">
                            <h3 className="text-right font-italic" dir="rtl"><strong>מערך שיעורי מתמטיקה לבגרות מלווה בהסבר מעמיק של החומר הנלמד לצד תרגול. נועד לסייע למורים ולאלו המעדיפים ללמוד באופן עצמאי.</strong></h3>
                        </div>
                    </div>

                    <div className="container" id="chapters">
                        <div className="row">
                            <div className="card col-md-3" style={{ width: 18 }}>
                                <img className="card-img-top" src={require("../../img/calculus4.jpg")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">חשבון דיפרנציאלי ואינטגרלי</h5>
                                    <p className="card-text text-right" dir="rtl">במתמטיקה אנו מוצאים שני תחומי מחקר עיקריים: הראשון הוא תחום המתמטיקה השימושית, והשני הוא תחום המתמטיקה התיאורטית. המתמטיקאים התיאורטיים הם אלה...</p>
                                    <Link to="/calculus" className="btn btn-warning float-right" id="calculusBtn" target="_parent">המשך לקרוא</Link>
                                </div>
                            </div>

                            <div className="card col-md-3" style={{ width: 18 }}>
                                <img className="card-img-top" src={require("../../img/induction2.jpg")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">אינדוקציה מתמטית</h5>
                                    <p className="card-text text-right" dir="rtl">ראשית נברר לעצמנו מהי אינדוקציה בכלל, ומהי אינדוקציה מתמטית. המילה אינדוקציה, לפי מילון אבן שושן, היא "שיטת לימוד מן הפרט אל הכלל". כלומר הוכחה של חוק מסוים מתוך בחינת מקרים פרטיים...
                                </p>
                                    <Link to="/induction" className="btn btn-warning float-right" id="inductionBtn" target="_parent">המשך לקרוא</Link>
                                </div>
                            </div>

                            <div className="card col-md-3" style={{ width: 18 }}>
                                <img className="card-img-top" src={require("../../img/trig6.jpg")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">טריגונומטריה</h5>
                                    <p className="card-text text-right" dir="rtl">הטריגונומטריה נחקרה עוד בימי היוונים הקדמונים לשם הבנת הקשרים בין צלעות לזוויות במשולשים שונים; תחילה במשולשים ישרי זווית ואחר כך גם במשולשים כלליים. עם הזמן הורחבה הטריגונומטריה...
                                </p>
                                    <Link to="/trig" className="btn btn-warning float-right" id="trigBtn" target="_parent">המשך לקרוא</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainPage;