import React, { Component } from 'react';
import './trig.css';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Animate } from "react-show";

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);

class Trig extends Component {
    state = {
        slide1: true,
        slide2: true,
        slide3: true,
        answer: false,
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
        else
            if (x === 'slide2') {
                this.setState({ slide2: !this.state.slide2 });
            }
            else {
                this.setState({ slide3: !this.state.slide3 });
                this.setState({ imgBtnClicked: !this.state.imgBtnClicked });
                if (this.state.slide3) {
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


    showAnswer(answer) {
        this.setState({ answer: !this.state.answer });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="bg">
                    <div className="container text-right content" dir="rtl">

                        <h1 className="text-center" id="arr0">טריגונומטריה</h1>

                        <br />

                        <button className="btn btn-link content1Btn" id="arr1" onClick={() => this.openContent('slide1')}>רקע</button>

                        <SlideDown closed={this.state.slide1} className="my-dropdown-slidedown1">

                            <div className="content1">
                                <p>הטריגונומטריה נחקרה עוד בימי היוונים הקדמונים לשם הבנת הקשרים בין צלעות לזוויות במשולשים שונים; תחילה במשולשים ישרי זווית ואחר כך גם במשולשים כלליים. עם הזמן הורחבה הטריגונומטריה גם לשטחים נוספים. ככל שהתפתח המדע בעידן המודרני, כך הורגש הצורך למצוא פונקציה מחזורית שתיתן תשובה הולמת לחקר התופעות שאנו מוצאים ביקום. היקום שלנו מחזורי מאוד; החל מתנועות האלקטרונים עבוֹר בגלים ועד תנועות הכוכבים. המחזוריות שולטת בקצב הלב כמו בתנועת גלגלים וטורבינות. אם נתבונן קצת סביבנו, נבחין כי אין כמעט מערכת שאיננה מחזורית או תלויה במחזוריות. לכן כיום משתמשים בפונקציות טריגונומטרית לתיאור פונקציות מחזוריות ללא כל תלות בזוויות ובגיאומטריה. </p>
                                <p>בספר זה לא נלמד על פי התפתחות הטריגונומטריה, אלא דווקא נתחיל בהבנת הפונקציה הטריגונומטרית וכמקרה פרטי שלה נתמודד עם בעיות גיאומטריות.</p>

                                <br />

                                <p>הצורה המושלמת המוכרת לנו לתיאור מחזוריות, היא המעגל. כולנו חשים שהמעגל סובב וחוזר לנקודת ההתחלה. בהביטנו על השעון, אנו רואים כיצד בכל  12 שעות המחוגים חוזרים בדיוק למצבם הקודם. לו היה מחוג השעות שובת, היינו מתקשים לדעת את השעה, על אף שהיינו יודעים את הדקות. לכן נבחרה צורה זו לתאר פונקציות מחזוריות. </p>
                                <p>מעבר לכך: אם נְדַמֶּה לעצמנו משטח המסתובב סביב ציר מרכזי על שולחן (כדוגמת התקליטים של העבר) ונעמיד עליו נר, נוכל לראות את מסלול הנר. אולם אם נקפיד לשמור את גובה העיניים בדיוק בגובה השולחן, לא נראה את מסלול הנר האמיתי, אלא נראה כאילו הוא נע על קו ישר בתנועה מחזורית ימינה ושמאלה. את פונקציית התנועה שלו אנו מחפשים. ברור לנו שכל נקודה בתנועה הנראית, תלויה בזווית שבה המשטח מסתובב.</p>


                                <ol>
                                    כדי שנוכל להשתמש בדוגמה זו ליצירת פונקציה מחזורית, עלינו להקדים וללמוד שני נושאים:
                                <li style={{ marginRight: "40px" }}>מהי זווית וכיצד להגדיר אותה  </li>
                                    <li style={{ marginRight: "40px" }}>מערכת קואורדינטות קוטבית</li>
                                </ol>


                                <br />

                                <p><u>רקע הסטורי</u></p>
                                <p>עד היום למדתם שגודל של זווית הוא מספר המעלות שעוברת הקשת המתאימה לזווית. ומעלה מוגדרת כ - <sup>1</sup>&frasl;<sub>360</sub>  מאורך קשת המעגל. </p>
                                <p>מניסיוני, תלמידים מקבלים דברים כמות שהם (כי המורה אמרה..) לא שמעתי אף לא פעם אחת את השאלה: מדוע החלוקה המוזרה הזו ל- 360? מדוע לא חולק המעגל ל- 100  או אולי ל- 1000? הרי לוּ הייתה המעלה מחולקת לגודל עשרוני, היה קל יותר לבטא חלקי זוויות, ולא היינו זקוקים להגדרות כמו דקה (שהיא <sup>1</sup>&frasl;<sub>60</sub> של מעלה) או שנייה (שהיא <sup>1</sup>&frasl;<sub>60</sub> של דקה).</p>
                                <p>ובכן כדי לענות על שאלה מציקה זו עלינו לחזור לימים בהם נחקרו גרמי השמים והותוו מעגלים. ימים אלה ירחיקו אותנו עד לתקופה הבבלית. הבבלים היו הראשונים שיצרו את התיארוך על פי תנועת הארץ אל מול קבוצות הכוכבים שאנו מכירים אותן כמזלות. הם שמו לב למחזוריות ולתנועה המעגלית ובנו את המעגל על פי תפיסתם. מכיוון שהמספר  6  וכפולותיו היה מספר בעל משמעות מיסטית עבורם, חילקו את המעגל        ל –  360, ועל פי מספר זה קבעו את גודל המעלה.</p>
                                <p>ראוי לציין שהמספר  60  מתחלק בהרבה מאוד מספרים טבעיים ללא שארית:
                            <br />
                                    (1, 2 ,3, 4, 5, 6, 10, 12, 15, 20, 30, 60).
                        </p>
                                <p>הסבר זה בא כדי להציג שהמעלה היא גודל שרירותי שאין מאחוריו כל כוונה מתמטית. כאשר התפתחה השיטה העשרונית (מאות שנים אחר כך), כבר היו ענף הגיאומטריה וחקר המעגלים מפותחים מאוד יחסית, ולא היה הגיוני לשנות את גודל המעלה לשיטה עשרונית. כך מלווה אותנו המעלה עד היום. כך אנו מוצאים את קווי האורך וקווי הרוחב של הגלובוס מחושבים עדיין לפי שיטה זו, וכן את תזוזות מחוגי השעון על פי  חלוקה ל- 24  שעות ול- 60 דקות ול- 60 שניות. כאשר התפתחו המדע והמתמטיקה, היה צורך לבטא את הזווית כמספר טהור ולא כמספר עם מֵמד. חקירת פונקציה באופן מתמטי אינה סובלת מְמדים אלא מספרים טהורים בלבד. </p>
                                <p>לשם כך הוגדרה זווית באופן שונה. </p>
                            </div>

                        </SlideDown>

                        <br /><br />
                        <button className="btn btn-link content2Btn" id="arr2" onClick={() => this.openContent('slide2')}>הרדיאן</button>

                        <SlideDown closed={this.state.slide2} className="my-dropdown-slidedown2">

                            <div className="content2">

                                <ol><li><u>הגדרה מחודשת של זווית -  הגדרה על פי יחס אורכים</u></li></ol>
                                <p>מהגאומטריה למדנו שאורך קשת מעגל היא פרופורציונלית לאורך הרדיוס,
                                        כפי שאנו רואים בשִׂרטוט:
                                </p>

                                <div className="row">

                                    <div className="col-md-6">
                                        <img src={require("../../img/trig8.jpg")} alt="no image" id="img1" />
                                        <p>מכאן הדרך קצרה להגדרת זווית
                                                על פי יחס האורכים. כפי שאנו יודעים,
                                        יחס הוא תמיד מספר טהור. במקרה שלנו:</p>
                                        <div id="fraction1">
                                            <p id="top1">אורך</p>
                                            <p id="bottom1">אורך</p>
                                            <p id="sentence1">= מספר חסר ממדים. כך הגדרנו זווית ללא מְמדים.</p>
                                        </div>

                                        <div id="fraction2">
                                            <p id="sentence2">כך אנו מגדירים את הזווית:  </p>
                                            <p id="top2">אורך קשת</p>
                                            <p id="bottom2">רדיוס</p>
                                            <p id="equal">= &alpha;</p>
                                        </div>



                                        <div className="row block1">
                                            <div className="col-md-2">
                                                <p>בפועל:</p>
                                            </div>
                                            <div className="col-md-10">
                                                <p>&alpha;=1 &ensp; כאשר אורך הקשת שווה בדיוק לאורך הרדיוס.</p>
                                                <p>&alpha;=2 &ensp; כאשר אורך הקשת כפול מאורך הרדיוס.</p>
                                                <p>&alpha;=&pi; &ensp; כאשר אורך הקשת הוא בדיוק חצי מעגל. </p>
                                            </div>
                                        </div>

                                        <div className="row block1">
                                            <p>נקודה נוספת חשובה היא שאנו תמיד מתחילים
                                                    למדוד את הזווית מהכיוון החיובי של ציר ה- x , בתנועה
                                                <u>נגד כיוון השעון</u>.  כמו שרואים את כיוון הזוויות בציור.
                                        </p>
                                        </div>

                                        <div className="row block1">
                                            <p>זוויות שליליות נמדדות מהכיוון החיובי של ציר ה-x
                                                            כאשר החץ הוא בכיוון ההפוך,
                                                    כלומר <u>עם כיוון השעון</u>.
                                    </p>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <img src={require("../../img/trig9.jpg")} alt="no image" />
                                        <img src={require("../../img/trig10.jpg")} alt="no image" />
                                        <img src={require("../../img/trig11.jpg")} alt="no image" />
                                    </div>
                                </div>

                                <div className="block2">

                                    <p>כדי להבין אם אנו מציגים זווית במעלות או במספר טהור, נהוג לסמן את שיטת המדידה. שיטת המדידה  לפי יחס האורכים נקראת רדיאן, או בסימולה הבינלאומי  rad. אולם אסור לנו לטעות! אין הרדיאן מבטא מֵמד. להפך - הוא מבטא מספר טהור.</p>
                                    <p>כך נוכל להפריד בין &alpha;=2&deg;  המצביעה על זווית חדה בעלת מֵמד של מעלות, לבין &alpha;=2<span style={{ fontSize: "10px" }}>rad</span>  המבטאת זווית קהה. </p>
                                    <p>כבר גילינו שהמעבר ממעלות לרדיאנים וההפך הוא על פי הפקטור:  180&deg;=<span style={{ fontSize: "18px", position: "relative", bottom: "3px" }}><i>p</i></span><span style={{ fontSize: "10px" }}>rad</span>   <span dir="ltr">(כאשר אורך הקשת הוא בדיוק חצי מעגל &alpha;=180&deg;)</span>.</p>
                                    <p>לכן אם רוצים לעבור מגודל זווית במעלות לגודלה ברדיאנים, משתמשים בנוסחה:</p>
                                    <img src={require("../../img/trig12.jpg")} alt="no image" id="img2" />

                                    <div className="row">
                                        <div className="col-md-2">
                                            <p>כך אנו מוצאים ש:      </p>
                                            <br /><br /><br /><br /><br /><br /><br />
                                            <p>וכן  הלאה. כמובן:  </p>
                                        </div>
                                        <div className="col-md-4">
                                            <img src={require("../../img/trig13.jpg")} alt="no image" />
                                            <img src={require("../../img/trig14.jpg")} alt="no image" id="img3" />
                                        </div>
                                    </div>

                                    <p>ולהֶפֶך אם רוצים לעבור מרדיאנים למעלות:</p>

                                    <img src={require("../../img/trig15.jpg")} alt="no image" id="img4" />

                                    <div className="row">
                                        <div className="col-md-2">
                                            <p>כך מוצאים ש:</p>

                                        </div>
                                        <div className="col-md-4">
                                            <img src={require("../../img/trig16.jpg")} alt="no image" />

                                        </div>
                                    </div>

                                    <p>במקרים רבים אנו משתמשים בכפולות של &pi;  כדי לציין זווית ברדיאנים. מאחר ש- &pi;  איננו מספר רציונלי, מדויק יותר לתאר את הזווית בדרך זו מאשר באופן עשרוני. אולם הדבר אינו הכרחי, באותו אופן ניתן לתאר את הקשר: 90&deg; = 1.57<span style={{ fontSize: "10px" }}>rad</span>  </p>

                                </div>

                                <div className="block3">
                                    <button className="btn btn-link understandBtn" onClick={() => this.openContent('slide3')} onMouseEnter={this.startRotate} onMouseLeave={this.stopRotate}><strong>בדיקת הבנה</strong></button>
                                    <img src={require("../../img/understand5.jpg")} alt="no image" className={"understandImg " + this.state.spin + this.state.move} />

                                    <SlideDown closed={this.state.slide3} className="questions my-dropdown-slidedown3">

                                        <p>כדי לחוש את גודל הזוויות ברדיאנים השלימו את הטבלה שלפניכם:</p>

                                        <table id="trigTable">
                                            <tr>
                                                <td className="text-center"></td>
                                                <td className="text-center">הזווית במעלות</td>
                                                <td className="text-center">הזווית ברדיאן ככפולה של p</td>
                                                <td className="text-center">הזווית ברדיאן בכתיבה עשרונית</td>
                                                <td className="text-center">
                                                    המיקום לפי רביעים
                                                    <img src={require("../../img/trig17.jpg")} alt="no image" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">1.</td>
                                                <td className="text-center">90</td>
                                                <td className="text-center"><sup>1</sup>&frasl;<sub>2</sub> </td>
                                                <td className="text-center">1.57</td>
                                                <td className="text-center">על הציר האנכי</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2.</td>
                                                <td className="text-center">45-</td>
                                                <td className="text-center"><sup>1</sup>&frasl;<sub>4</sub></td>
                                                <td className="text-center">0.785-</td>
                                                <td className="text-center">רביעי</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3.</td>
                                                <td className="text-center">120</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}><sup>2</sup>&frasl;<sub>3</sub></Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>2.09</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4.</td>
                                                <td className="text-center">150</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}><sup>5</sup>&frasl;<sub>6</sub></Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>2.62</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">5.</td>
                                                <td className="text-center">225-</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>1.25-</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>3.93-</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">6.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>135</Animate>
                                                </td>
                                                <td className="text-center"><sup>3</sup>&frasl;<sub>4</sub></td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>2.36</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">7.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>270</Animate>
                                                </td>
                                                <td className="text-center"><sup>3</sup>&frasl;<sub>2</sub></td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>4.71</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>ציר אנכי</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">8.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>396</Animate>
                                                </td>
                                                <td className="text-center"><sup>11</sup>&frasl;<sub>5</sub></td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>6.91</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>ראשון</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">9.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>210-</Animate>
                                                </td>
                                                <td className="text-center"><sup>7</sup>&frasl;<sub>6</sub>-</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>3.67-</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">10.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>57.29</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>0.32</Animate>
                                                </td>
                                                <td className="text-center">1</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>ראשון</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">11.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>128.91</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>0.72</Animate>
                                                </td>
                                                <td className="text-center">2.25</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">12.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>246.37-</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>1.37-</Animate>
                                                </td>
                                                <td className="text-center">4.3-</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">13.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>458.37</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>2.55</Animate>
                                                </td>
                                                <td className="text-center">8</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>שני</Animate>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">14.</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>30.37-</Animate>
                                                </td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>0.17-</Animate>
                                                </td>
                                                <td className="text-center">0.53-</td>
                                                <td className="text-center">
                                                    <Animate show={this.state.answer} start={{ opacity: 0 }} style={{ color: "blue" }}>רביעי</Animate>
                                                </td>
                                            </tr>
                                        </table>

                                        <br />

                                        <button className="btn btn-link answer1Btn" onClick={() => this.showAnswer('answer')}>תשובות</button>


                                    </SlideDown>

                                </div>
                            </div>

                        </SlideDown>

                        <br /><br /><br /><br />

                        <h5 id="arr3">פונקציות טריגונומטריות</h5>

                        <br />

                        <button className="btn btn-link disabledBtn" id="arr4" disabled>הגדרות, זהויות ומשוואות</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr5" disabled>חקירת הפונקציה הטריגונומטרית</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr6" disabled>משיק ונורמל</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr7" disabled>מקסימום ומינימום מקומי ומוחלט</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr8" disabled>נגזרת של פונקציה סתומה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr9" disabled>אינטגרל של פונקציה טריגונומטרית</button>

                        <br /><br /><br /><br />

                        <h5 id="arr10">טריגונומטריה של מצולעים ושל גופים מרחביים</h5>

                        <br />

                        <button className="btn btn-link disabledBtn" id="arr11" disabled>משפט הסינוסים</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr12" disabled>משפט הקוסינוסים</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr13" disabled>טריגונומטריה במרחב</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr14" disabled>בעיות ערך קיצון בטריגונומטריה</button>

                        <br /><br /><br /><br /><br />
                        <button className="btn btn-link trigAllChaptersBtn" disabled>כל הפרקים המלאים</button>
                        <Link to="/shoppingCart" target="_parent" className="shoppingCartLink" id="trig">
                            <button onClick={() => this.props.itemAdd('trig')} className="btn btn-warning shoppingBtn trig">הוסף לעגלת קניות<FontAwesomeIcon icon={faCartArrowDown} size="1x" style={{ marginRight: "5px" }} /></button>
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Trig;
