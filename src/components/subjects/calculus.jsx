import React, { Component } from 'react';
import './calculus.css';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Animate } from "react-show";

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);

class Calculus extends Component {

    constructor(props) {
        super(props);

        this.openContent = this.openContent.bind(this);
        this.startRotate = this.startRotate.bind(this);
        this.stopRotate = this.stopRotate.bind(this);

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


        if (localStorage.getItem('slide1') == 'false') {
            this.props.setSlide1(false);
            localStorage.setItem('slide1', 'true');
        }
        if (localStorage.getItem('slide2') == 'false') {
            this.props.setSlide2(false);
            localStorage.setItem('slide2', 'true');
        }

    }


    openContent(x) {
        if (x === 'slide1') {
            this.props.setSlide1(!this.props.slide1);
        }
        else
            if (x === 'slide2') {
                this.props.setSlide2(!this.props.slide2);
            }
            else {
                this.props.setSlide3(!this.props.slide3);
                this.props.setImgBtnClicked(!this.props.imgBtnClicked);
                if (this.props.slide3) {
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


    showAnswer(answer) {
        switch (answer) {
            case 'answer1':
                this.props.setAnswer1(!this.props.answer1);
                break;
            case 'answer2':
                this.props.setAnswer2(!this.props.answer2);
                break;
            case 'answer3':
                this.props.setAnswer3(!this.props.answer3);
                break;
            case 'answer4':
                this.props.setAnswer4(!this.props.answer4);
                break;
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="bg">
                    <div className="container text-right content" dir="rtl">

                        <h1 className="text-center" id="arr0">חשבון דיפרנציאלי ואינטגרלי</h1>

                        <br /><br />

                        <h5 id="arr1">חשבון דיפרנציאלי</h5>

                        <br />

                        <button className="btn btn-link content1Btn" id="arr2" onClick={() => this.openContent('slide1')}>רקע</button>

                        <SlideDown closed={this.props.slide1} className="my-dropdown-slidedown1">

                            <div className="content1">

                                <p>במתמטיקה אנו מוצאים שני תחומי מחקר עיקריים: הראשון הוא תחום המתמטיקה השימושית, והשני הוא תחום המתמטיקה התיאורטית. המתמטיקאים התיאורטיים הם אלה המקדימים את זמנם תמיד. הם יוצרים חשיבה ותפיסה מתמטית שאינה מוגבלת לעולם המוכר לנו, ומפתחים רעיונות ודרכי התמודדות עם תחומים שאולי רק בעוד מאות שנים (אם בכלל) יהיה להם שימוש. דוגמה נפלאה לפיתוח כזה היא שיטות הפתרון שהגה לגרנז'  (1736 - 1813), למשוואות סבוכות במתמטיקה, שלא היה להם שימוש מעשי עד לעידן המחשב בשל מספר הפעולות הנדרש כדי להגיע לפתרון.
                                    רק מאז הפיתוח של המחשבים (כ- 250 שנה לאחר מכן) היה ניתן להשתמש ברעיונות אלו.</p>
                                <p>תחום המתמטיקה השימושית עוסק יותר בפיתוחים לבעיות עכשוויות. כך הגיע ניוטון לפתח את החשבון הדיפרנציאלי והאינטגרלי. ניוטון היה זקוק לכלי מתמטי שיתאר תנועות שאינן במהירות קבועה. באופן מעשי אין מכונית הנוסעת במהירות קבועה. היא חייבת להאיץ ולהאט. כדי להתמודד עם משוואות אלה היה עליו לפתח שיטות חקירה מתמטיות נאותות לעקומות מסוגים שונים. </p>
                                <p>על אותם רעיונות עבד באותה תקופה מתמטיקאי ופילוסוף אחר – לייבניץ.</p>
                                <p>לאחר מריבה קשה שפרצה בין השניים על זכות הראשונים, אנו מייחסים כיום לשניהם זכות זו בפיתוח חקירת הפונקציה על אף שרוב הסימונים המתמטיים המקובלים לשימוש היום, הם אלה שטבע לייבניץ.
                                        באותם ימים התעורר ויכוח מר ונוקב על ידי כמה פילוסופים שטענו כי הפיתוחים "החדשניים" האלה סותרים כל רעיון לוגי, מאחר שהם עוסקים במה שהם כינו "רוחות הרפאים של שברי מספרים". אולם בהמשך היו פילוסופים ומתמטיקאים אחרים שהצליחו לתת תוקף לוגי לתורה זו. ביחד עם העובדה שרעיונות אלה אכן "עבדו" והצליחו להשיג את מבוקשם, אומצו השיטות הנ"ל של חקירות הפונקציה וקיבלו מעמד רשמי במתמטיקה.
                                        </p>
                                <p>בספר לימוד זה לא אֶכָּנֵס להוכחות הפורמליות של תורת הגבולות הנדרשות כדי להבטיח את התוקף הלוגי של החקירה. במקום זאת אציג את הדברים באופן שיהיה משכנע מספיק, גם אם לא פורמלי. </p>
                                <p>מה דרוש לנו כדי לחקור פונקציה, או מה אנו מעוניינים לדעת כאשר אנו מקבלים פונקציה ?</p>
                                <p>נניח (רק לשם המחשה) שאנו חוקרים פונקציית טיסה של מטוס לפי "הקופסה השחורה" הממוקמת בו, (כמובן, תחום זה כולל מקרים רבים ושונים אחרים) ונניח שרוּם הטיסה המתוכנן היה 3 ק"מ מעל פני הקרקע. </p>
                                <p>נרצה לדעת מספר דברים על מהלך הטיסה. ראשית כמה פעמים חצה המטוס את הרום הזה. אם נראה תנודות רבות מדי, נוכל להסיק שהטיסה לא הייתה יציבה; אולי בשל כשלים במטוס או בשל תנאי הבריאות של הטייס. אולי אפילו נלמד על יציבות הטייס (ייתכן שהיה טירון). יעניין אותנו מאוד מה היו הגבהים המקסימליים והמינימליים של הטיסה. נוכל ללמוד מכך על צריכת הדלק של המטוס ועל תנאי צפיפות האוויר שבהם הוא טס. כמו כן נשים לב לקצב הנסיקות והצלילות. יש שהן מסוכנות מאוד בשל תלילותן. זה יכול ללמד אותנו אם היו תקלות פתע שבהן נאלץ הטיס לנסוק בחדוּת, או שהן היו מתוכננות. </p>
                                <p>באופן כללי אנו רואים שאם יהיה בידינו כלי משמעותי לחקירת פונקציה זו, נוכל ללמוד הרבה על תנאי הטיסה ולהבין את מהלכי המטוס והטייס. לימוד זה יעזור לנו גם במקרים של תאונות מטוסים שבהם איננו יכולים כבר לשוחח עם הטייס, גם במקרים שבהם אנו מכשירים טייס ומתדרכים אותו, וגם כאשר אנו מכניסים לשימוש מטוס חדש. </p>
                                <p>כבר למדנו כיצד למצוא נקודות 0 על פונקציה. כדי למצוא את השינויים האחרים שהעלינו, עלינו ללמוד נושא חדש נוסף והוא מציאת השיפועים של הפונקציה. שיפוע הוא בדיוק אותו קצב שינוי שאנו מחפשים. מה מידת השיפוע של המטוס כאשר נסק או צלל. </p>
                                <p>זה הנושא הראשון שנלמד לאחר תזכורת בפונקציית קו ישר.</p>
                            </div>

                        </SlideDown>
                        <br /><br />
                        <button className="btn btn-link content2Btn" id="arr3" onClick={() => this.openContent('slide2')}>פונקציות-חזרה</button>

                        <SlideDown closed={this.props.slide2} className="my-dropdown-slidedown2">

                            <div className="content2">

                                <p>נקודות על מערכת צירים:</p>
                                <p>לכל נקודה יש שני שיעורים <img src={require("../../img/calculus12.jpg")} alt="no image" />.</p>
                                <img src={require("../../img/calculus5.jpg")} alt="no image" id="img1" />
                                <p><strong>שימו לב:</strong> אנו מפרידים בין <img src={require("../../img/calculus14.jpg")} alt="no image" style={{ marginBottom: 5 }} />  ללא אינדקס המתארים משתנים, לבין  <img src={require("../../img/calculus13.jpg")} alt="no image" />  עם ציון אינדקס המייצגים <u>נקודות</u>.</p>
                                <p>למדנו על פונקציות בכלל שלכל <strong>x</strong>  יש ערך <strong> y</strong>  אחד ואחד בלבד.</p>
                                <p>כמו כן למדנו את הסימונים:</p>

                                <img src={require("../../img/calculus15.jpg")} alt="no image" id="img2" />
                                <img src={require("../../img/calculus6.jpg")} alt="no image" id="img3" />

                                <p>גם ניתחנו בעבר את פונקציית הקו הישר <strong>y=mx+n</strong> כאשר  <strong>m</strong> הוא פרמטר המייצג את השיפוע,
                                    ו- <strong>n</strong> היא נקודת חיתוך הישר עם ציר  ה-  (כאשר  <strong>x=0</strong>).
                                </p>
                                <p>את השיפוע  הגדרנו על ידי:  <img src={require("../../img/calculus7.jpg")} alt="no image" id="img4" /></p>
                                <p>לדוגמה בציור ששרטטנו: <img src={require("../../img/calculus8.jpg")} alt="no image" id="img5" /></p>
                                <p>גם למדנו איך למצוא את משוואת הישר על ידי <strong>שיפוע</strong> ו<strong>נקודה</strong> לפי הנוסחה: <img src={require("../../img/calculus9.jpg")} alt="" /></p>
                                <p>ובמקרה שלנו נבחר את השיפוע  <strong><sup>8</sup>&frasl;<sub>3</sub></strong> ואת הנקודה <strong>(2,3)</strong>  : </p>
                                <img src={require("../../img/calculus10.jpg")} alt="no image" id="img6" />

                                <p></p>

                                <button className="btn btn-link understandBtn" onClick={() => this.openContent('slide3')} onMouseEnter={this.startRotate} onMouseLeave={this.stopRotate}><strong>בדיקת הבנה</strong></button>
                                <img src={require("../../img/understand5.jpg")} alt="no image" className={"understandImg " + this.props.spin + this.props.move} />
                                <div style={{ height: "10px" }}></div>
                                <SlideDown closed={this.props.slide3} className="questions my-dropdown-slidedown3">

                                    <ol>
                                        <li>
                                            <img src={require("../../img/calculus11.jpg")} alt="no image" className="float-left" id="img7" />
                                            <p>א. חשבו את שיפוע הישר המשורטט.   </p>
                                            <button className="btn btn-link answer1Btn" onClick={() => this.showAnswer('answer1')}>תשובה:</button>

                                            <Animate show={this.props.answer1} start={{ opacity: 0 }} style={{
                                                display: "inline"
                                            }}>
                                                <p className="answer1">m=-4.5</p>
                                            </Animate>

                                            <p>ב. רשמו את משוואת הישר הנתון.</p>
                                            <button className="btn btn-link answer2Btn" onClick={() => this.showAnswer('answer2')}>תשובה:</button>

                                            <Animate show={this.props.answer2} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                <p className="answer2">y=-4.5x+8.5</p>
                                            </Animate>

                                            <p style={{ width: 450 }}>ג. קבעו היכן נמצאת הנקודה (2,1) – על הישר, מעל
                                                הישר או מתחת לישר.
                                            </p>

                                            <button className="btn btn-link answer3Btn" onClick={() => this.showAnswer('answer3')}>תשובה:</button>
                                            <Animate show={this.props.answer3} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                <p className="answer3">מתחת לישר</p>
                                            </Animate>

                                        </li>
                                        <li>
                                            <p>רשמו את משוואת הישר העובר בנקודות: <strong>f(2)=1 f(0)=-5</strong></p>
                                            <button className="btn btn-link answer4Btn" onClick={() => this.showAnswer('answer4')}>תשובה:</button>

                                            <Animate show={this.props.answer4} start={{ opacity: 0 }} style={{ display: "inline" }}>
                                                <p className="answer4">y=3x-5</p>
                                            </Animate>

                                        </li>
                                    </ol>

                                </SlideDown>
                            </div>

                        </SlideDown>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr4" disabled>על סימטריה ומתמטיקה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr5" disabled>שיפוע של עקום</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr6" disabled>מקסימום ומינימום מקומי ומוחלט</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr7" disabled>חקירת פונקציה ושרטוט</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr8" disabled>רציפות של פונקציה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr9" disabled>נגזרת שנייה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr10" disabled>נקודות אי רציפות ואסימפטוטות</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr11" disabled>ניתוח אסימפטוטות אופקיות</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr12" disabled>חקירת פונקציה עם פרמטרים</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr13" disabled>מציאת משיקים לפונקציה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr14" disabled>הנורמל</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr15" disabled>משיק לפונקציה דרך נקודה מחוץ לפונקציה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr16" disabled>בעיות מקסימום ומינימום</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr17" disabled>נגזרת של פונקציה סתומה</button>

                        <br /><br /><br /><br />

                        <h5 id="arr18">חשבון אינטגרלי</h5>

                        <br />
                        <button className="btn btn-link disabledBtn" id="arr19" disabled>מציאת פונקציה קדימה</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr20" disabled>שימוש באינטגרל למציאת שטחים</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr21" disabled>נפח גוף סיבוב</button>

                        <br /><br />
                        <button className="btn btn-link disabledBtn" id="arr22" disabled>תרגול כללי</button>

                        <div style={{ height: 70 }}></div>

                        <br /><br />
                        <button className="btn btn-link calculusAllChaptersBtn" disabled>כל הפרקים המלאים</button>
                        <Link to="/shoppingCart" target="_parent" className="shoppingCartLink" id="calculus">
                            <button onClick={() => this.props.itemAdd('calculus')} className="btn btn-warning shoppingBtn calculus">הוסף לעגלת קניות<FontAwesomeIcon icon={faCartArrowDown} size="1x" style={{ marginRight: "5px" }} /></button>
                        </Link>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Calculus;