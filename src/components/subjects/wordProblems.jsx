import React, { Component } from 'react';
import './wordProblems.css';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Animate } from "react-show";

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);

class WordProblems extends Component {

    constructor(props) {
        super(props);
        this.openContent = this.openContent.bind(this);
        this.startRotate = this.startRotate.bind(this);
        this.stopRotate = this.stopRotate.bind(this);

        this.props.setSlide1(true);
        this.props.setSlide2(true);
        this.props.setSlide3(true);
        this.props.setAnswer1(false);
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


    showAnswer() {
        this.props.setAnswer1(!this.props.answer1);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="bg">

                    <div className="container text-right content" dir="rtl">

                        <h1 className="text-center" id="arr0">בעיות מילוליות</h1>

                        <br /><br />

                        <button className="btn btn-link content1Btn" id="arr1" onClick={() => this.openContent('slide1')}>רקע</button>

                        <SlideDown closed={this.props.slide1} className="my-dropdown-slidedown1">
                            <div className="content1">

                                <p>מספר קשיים עיקריים עומדים בפנינו כשאנו מתחילים לעסוק בפתרון בעיות מילוליות.
                                    קושי ראשון הוא השפה. בבעיות מתמטיות אנו משתמשים בשפה העברית, אך חלק מהמושגים מקבלים שינוי קל, ועלינו ללמוד את כוונת השאלה ולזכור שהוראת מילה מסוימת היא קצת שונה מזו שאנו רגילים אליה בשימוש יומיומי.
                                </p>
                                <p>דוגמאות:</p>
                                <p><strong>זמן נסיעה:</strong> בחיי היומיום אנו מתייחסים אל זמן הנסיעה כפרק הזמן שעבר מרגע היציאה מהבית ועד הגיענו למחוז חפצנו. זמן זה כולל את ההמתנות להסעה, את העצירות להתרעננות וכד'.
                                    לעומת זאת בבעיות מתמטיות אנו מייחסים את <u>זמן הנסיעה</u> רק <u>לזמן שבו הגוף מצוי בתנועה</u>, כלומר זמן הנסיעה ללא כל אותן המתנות וחניות ביניים.
                                </p>
                                <p><strong>מנה ושארית: </strong>בדרך כלל אנו משתמשים במושג מנה לציון כמות. מנת גלידה, מנה שווארמה... שארית גם כן נתפסת ככמות; שאריות בדים או שאריות אוכל, כלומר כמות שנותרה אחר שימוש.
                                    בבעיות מספרים <u>מנה</u> היא תוצאת החילוק של מונה במכנה, ו<u>שארית</u> היא <u>יחס בין הנותר מהמונה למכנה</u>. השארית איננה גודל עצמאי, אלא היא מתייחסת למכנה.
                                </p>

                                <p>בתרגיל :  7/3  אנו מקבלים מנה  2  ושארית  1,  אך כתיבה מתמטית של התוצאה היא: <span style={{ paddingRight: 5, paddingLeft: 5 }}>2<sup>1</sup>&frasl;<sub>3</sub>=<sup>7</sup>&frasl;<sub>3</sub></span>    כלומר  השארית של  1  מתייחסת למכנה  3.</p>

                                <br />

                                <p>קושי שני הוא המעבר מהכרת האלגברה המופשטת לטיפול במודלים מתמטיים של העולם האמיתי.  בבעיות מילוליות אנו מנסים לבנות מודל שיתאר מצבים "מציאותיים" בעזרת פונקציות מתמטיות. למצבים כאלה יש כבר משמעות למספר ולנעלם, והוא מפסיק להיות מספר טהור. נסביר את הדברים בעזרת דוגמה. כאשר אנו  יושבים מול מסך ולפנינו מקלדת. לצִדֵּנו נמצא המארז של המחשב וכן העכבר. כל זה משתלב בשולחן, ולידו הכיסא שעליו אנו יושבים. האם אנו יכולים לומר שסביבנו יש  6 ?  התשובה היא, כמובן:  6  מה ?  כלומר בעולם האמיתי אנו צריכים להוסיף מֵמַד למספר. במקרה שלנו יש לומר: סביבנו נמצאים שישה פריטים. כפי שאנו רואים, אנו כבר לא מתייחסים אל המספר כמייצג מופשט, אלא מייחסים לו לשון זכר ומוסיפים מֵמַד שיתאר אותו.</p>

                                <p>כך יש לעשות גם בבעיות מילוליות. כאשר אנו בוחרים נעלם, לא מספיק להגדירו  כ-  x  או  y .  אותיות אלה יכולות לייצג נעלם. אולם הגדרת הנעלם חייבת להיות בעלת מֵמַד מתאים לבעיה. לדוגמה: מרחק שעברה מכונית (ק"מ), כמות החומץ בתערובת (ליטר) וכד'.
                                    אם נגדיר נכון את הנעלמים, נוכל גם לבדוק את המשוואות שבנינו, ולהתאים להם את המְמַדים כפי שיפורט בהמשך.
                                </p>

                                <br />

                                <p>קושי שלישי הוא ליקוט הנתונים מתוך השאלה. לעִתים הנתונים מופיעים באופן מפורש וברור, ולעִתים רק ברמז. כמו כן יש בעיות הבנויות מ"סיפור" אחד המתאר מצב, ויש, שלהן שניים או שלושה סיפורים שונים. עלינו לזהות ממה מורכב כל סיפור, ולבדוק איך לייצגו באופן אלגברי. אם יש יותר מסיפור אחד, נצטרך לייצג כל אחד מהסיפורים באופן עצמאי. כל סיפור כזה מציב משוואה אחת לפחות. כך אנו יכולים לבנות מערכת משוואות היוצרת מודל מתמטי של הבעיה. על "שליפת" נתונים נתעכב בהמשך.</p>

                                <br />

                                <p>יש לתת תשומת לב מיוחדת למספר אלמנטים הקשורים לפתרון בעיות מילוליות.
                                    כאשר אנו קוראים את הבעיה, יש לבחון היכן נמצא משפט השאלה. ברוב השאלות שאנו עוסקים בהן, היא כתובה דווקא בסוף הבעיה; בדרך כלל אפילו במשפט האחרון. לכן בכל בעיה רצוי <u>להדגיש את משפט השאלה</u> לבירור המטלה המבוקשת כבר בקריאה ראשונה, ובקריאה שנייה להתעמק וללקט נתונים. לעִתים נידָרֵש גם לקריאה שלישית. דבר זה קורה כאשר אנו מוצאים שיש לנו יותר נעלמים ממשוואות. במצב כזה צריך להיות לנו ברור שלא השתמשנו בכל נתוני השאלה, ולכן עלינו לקרוא אותה שוב ולחפש אחר נתונים ש"פספסנו".
                                </p>

                                <br />

                                <p>אם התייחסנו לנעלמים, הרי שעלינו גם למצוא אותם. ראשית הנעלמים הטבעיים ביותר יבואו מתוך השאלה (שכפי שכבר נאמר - נמצאים במשפט האחרון). נעלמים נוספים יכולים להיווצר תוך כדי פתרון. לא תמיד נדע מראש כמה נעלמים נדרשים לנו. גם בעולם האמיתי איננו רואים תמיד את הפתרון למצב אלא מתמודדים תוך כדי מהלך הדברים. בכל מקום שלא נמצא נתון באופן מִיָּדִי, נציב במקומו נעלם. כדאי ורצוי "לסמוך" על "רוחב" לִבּו של מחבר השאלה שלא ישאיר אותנו ללא מספיק משוואות לפתרון. (טיפ לחיי היומיום: בכלל כדאי להרפות קצת שליטה ולסמוך על העולם שלפעמים דברים יפעלו למעננו גם אם לא נלְחַץ או נילָחֵץ.)</p>

                            </div>
                        </SlideDown>

                        <br /><br />
                        <button className="btn btn-link content2Btn" id="arr2" onClick={() => this.openContent('slide2')}>תרגול נעלמים ושליפת נתונים</button>

                        <SlideDown closed={this.props.slide2} className="my-dropdown-slidedown2">
                            <div className="content2">

                                <p>מכיוון שהמְמַדים חשובים לפתרון בעיות מילוליות, נרחיב קצת בנושא.
                                    נתחיל <u>בבעיות תנועה</u>.
                                </p>

                                <p>באופן כללי ומחיי היומיום אנו מכירים את המושגים: מהירות, דרך וזמן. מעטים מאִתנו נותנים את הדעת על כך שהמהירות איננה מֵמַד בפני עצמו, אלא היא פשוט חלוקה של מֵמַד הדרך במֵמַד הזמן. כאשר אנו משתמשים במושג - קמ"ש - אנו מתארים את המהירות באופן של
                                    <img src={require("../../img/km-h.jpg")} alt="no image" />, כלומר <u>מהירות</u> היא תמיד <u>חלוקה של המרחק שעוברים ביחידת זמן אחת</u>. אמנם בדרך כלל בבעיות דרך אנו מוצאים מְמַדים של ק"מ ושעות, אך בעולם האמיתי ניתן להשתמש גם במְמַדים אחרים. למשל, ישנן ארצות בהם משתמשים במֵמַד של מייל לתיאור מרחקים, ואז המהירות היא מס' המיילים לשעה. </p>

                                <p>ישנן מהירויות שטווח המדידה שלהן הוא קצר, ואז נוח יותר לתארן במְמַדים של מטרים ושניות. למשל, כאשר מודדים מהירות בעיטה של שחקן כדורגל, המדידה תהיה במטרים לשנייה, או כאשר מחשבים מהירויות לוויינים בעלי מהירויות גבוהות, עוברים ממדידה של מטרים לשנייה למדידה של ק"מ לשנייה. נוח יותר לחשוב על  16
                                    <img src={require("../../img/km-s.jpg")} alt="no image" />  מאשר על <img src={require("../../img/m-s.jpg")} alt="no image" /> 16000.</p>

                                <p>אנו רואים שהמטרה היא להתאים את מְמַדי המדידה למהירויות הנמדדות. אם הזכרנו מהירויות גבוהות, נצביע גם על מהירויות נמוכות מאוד. למשל, כאשר רוצים למדוד תנועה של מים בתוך קרקע (לצרכים חקלאיים או לתכנון בארות), התנועה נמדדת במטרים ליום, ותנועת היבשות נמדדת בס"מ לשנה.</p>

                                <p>ישנה מדידה אחת שהיא שונה לחלוטין מהאחרות, והיא מדידת מרחק בין גלקסיות. אנו שומעים מעת לעת על מרחקים של  "שנות אור". איך הפך מֵמַד של זמן (שנה) למֵמַד של אורך ?
                                    התשובה היא שאכן שנה היא מֵמַד של זמן, אולם לאור יש מהירות קבועה ותמידית של  300000 ק"מ בכל שנייה בקירוב. אם נכפיל את המהירות הזו במספר השניות שיש בשנה, נקבל את המרחק שתעבור קרן אור. זהו המרחק המתואר ע"י  "שנת אור" -  המרחק שיעבור האור בשנה אחת.
                                </p>
                                <p>(מומלץ לנסות ולבדוק כמה ק"מ יש בשנה כזו).</p>

                                <br />

                                <p>נעבור לדוגמה: </p>

                                <p>א. מכונית יצאה מאילת צפונה במהירות קבועה. כעבור שעה יצא רוכב אופנוע, גם הוא מאילת צפונה, במהירות קבועה. מהירות האופנוע גדולה ב –  30 קמ"ש ממהירות המכונית. רוכב האופנוע השיג את המכונית במרחק  250 ק"מ. מה הייתה מהירות המכונית ?</p>

                                <p>פתרון:
                                    <br />מקריאה ראשונית נמצא שהנעלם הטבעי הוא מהירות המכונית. כלומר:
                                    x –  מהירות המכונית
                                </p>

                                <p>נוסיף שִׂרטוט של הבעיה: <br /> <img src={require("../../img/wordProblems1.jpg")} alt="no image" /></p>

                                <p>אנו מוצאים כאן תיאור של שני סיפורים (תנועות שונות): אחת של המכונית ואחת של האופנוע. לכן נבנה את טבלת המאורעות על פי שני הסיפורים:</p>
                                <table class="wpTable">
                                    <tr>
                                        <td></td>
                                        <td className="text-center">
                                            סיפור א
                                            <br />
                                            תנועת המכונית
                                        </td>
                                        <td className="text-center">
                                            סיפור ב
                                            <br />
                                            תנועת האופנוע
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>מהירות</td>
                                    </tr>
                                    <tr>
                                        <td>זמן</td>
                                    </tr>
                                    <tr>
                                        <td>דרך</td>
                                    </tr>
                                </table>

                                <p>כדי להשלים את הטבלה עלינו לקרוא שוב את השאלה. תחילה נתמקד בסיפור המכונית. כבר ראינו שמהירותה היא  x . עתה עלינו למצוא את הזמן. מכיוון שהוא לא נתון לנו, נוסיף נעלם ונגדיר:</p>

                                <p>t –  זמן תנועת המכונית</p>

                                <p>הדרך שעברה המכונית עד המפגש היא אותה דרך שעשה רוכב האופנוע, כי הם נפגשו לאחר  250 ק"מ. כלומר הדרך היא 250 ק"מ.</p>

                                <p>מכאן אנו מקבלים את הטבלה:</p>

                                <table class="wpTable">
                                    <tr>
                                        <td></td>
                                        <td className="text-center">
                                            סיפור א
                                            <br />
                                            תנועת המכונית
                                        </td>
                                        <td className="text-center">
                                            סיפור ב
                                            <br />
                                            תנועת האופנוע
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>מהירות</td>
                                        <td className="text-center">x</td>
                                    </tr>
                                    <tr>
                                        <td>זמן</td>
                                        <td className="text-center">t</td>
                                    </tr>
                                    <tr>
                                        <td>דרך</td>
                                        <td className="text-center">250</td>
                                        <td className="text-center">250</td>
                                    </tr>
                                </table>

                                <p>עכשיו נפנה לתנועת האופנוע. על זמן תנועת האופנוע יש לנו מידע בסיסי והוא: "כעבור שעה יצא רוכב אופנוע...". אם רוכב האופנוע יצא שעה לאחר המכונית, הרי שעד הפגישה הוא נסע שעה פחות (צריך לזכור שאנו מחשבים זמן נסיעה נטו). כלומר הוא נסע  (1 - t)  שעות. גם על המהירות יש לנו מידע: "מהירות האופנוע גדולה ב –  30 קמ"ש ממהירות המכונית."  לכן מהירותו  (x + 30). עכשיו הטבלה השלמה תֵּיראה:</p>

                                <table class="wpTable">
                                    <tr>
                                        <td></td>
                                        <td className="text-center">
                                            סיפור א
                                            <br />
                                            תנועת המכונית
                                        </td>
                                        <td className="text-center">
                                            סיפור ב
                                            <br />
                                            תנועת האופנוע
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>מהירות</td>
                                        <td className="text-center">x</td>
                                        <td className="text-center">x+30</td>
                                    </tr>
                                    <tr>
                                        <td>זמן</td>
                                        <td className="text-center">t</td>
                                        <td className="text-center">t-1</td>
                                    </tr>
                                    <tr>
                                        <td>דרך</td>
                                        <td className="text-center">250</td>
                                        <td className="text-center">250</td>
                                    </tr>
                                </table>

                                <p>אותו רעיון ניתן ליישום גם <u>בבעיות קנייה ומכירה</u>:</p>
                                <p>ב. תלמיד קנה מספר מחברות ושילם תמורתן  100 ₪. אם היה מחיר מחברת נמוך בשקל אחד, היה יכול לקנות באותו מחיר עוד  5  מחברות. מה מחירה של מחברת אחת, וכמה מחברות קנה התלמיד ?</p>
                                <p>פתרון:</p>
                                <p>גם כאן אנו מוצאים את הנעלמים הטבעיים:</p>
                                <p>x –  מחיר מחברת אחת</p>
                                <p>y –  מספר מחברות שקנה התלמיד</p>

                                <br />

                                <p>גם כאן אנו מוצאים שני סיפורים: הקנייה בפועל והקנייה במקרה של מחיר נמוך בשקל.
                                    הטבלה נראית כמו הטבלאות הקודמות:
                                </p>

                                <table class="wpTable">
                                    <tr>
                                        <td></td>
                                        <td className="text-center">
                                            סיפור א
                                            <br />
                                            הקנייה בפועל
                                        </td>
                                        <td className="text-center">
                                            סיפור ב
                                            <br />
                                            הקנייה במקרה של מחיר מופחת
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>מחיר יחידה</td>
                                        <td className="text-center">x</td>
                                        <td className="text-center">x-1</td>
                                    </tr>
                                    <tr>
                                        <td>כמות</td>
                                        <td className="text-center">y</td>
                                        <td className="text-center">y+5</td>
                                    </tr>
                                    <tr>
                                        <td>סה"כ תשלום</td>
                                        <td className="text-center">100</td>
                                        <td className="text-center">100</td>
                                    </tr>
                                </table>

                                <br />

                                <button className="btn btn-link understandBtn" onClick={() => this.openContent('slide3')} onMouseEnter={this.startRotate} onMouseLeave={this.stopRotate}><strong>בדיקת הבנה</strong></button>

                                <img src={require("../../img/understand5.jpg")} alt="no image" className={"understandImg " + this.props.spin + this.props.move} />

                                <SlideDown closed={this.props.slide3} className="questions my-dropdown-slidedown3">

                                    <p>חקלאי קנה מספר חבילות זרעים ושילם תמורתם  ₪. לו היה מחיר חבילה נמוך ב-  שקלים, היה יכול לקנות עוד   חבילות. מה מחיר חבילת זרעים, וכמה חבילות קנה ?</p>
                                    <p>בנו טבלה מתאימה.   <u><strong>(שימו לב, בשלב זה עליכם לבנות טבלה ולא למצוא פתרון!)</strong></u></p>
                                    <button className="btn btn-link answer1Btn" onClick={() => this.showAnswer('answer')}>תשובה:</button>
                                    <Animate show={this.props.answer1} start={{ opacity: 0 }} style={{
                                        display: "block"
                                    }}>
                                        <table className="wpTable answer1">
                                            <tr>
                                                <td></td>
                                                <td className="text-center">הקנייה בפועל</td>
                                                <td className="text-center">הקנייה במקרה של מחיר מופחת</td>
                                            </tr>
                                            <tr>
                                                <td>מחיר יחידה</td>
                                                <td className="text-center">x</td>
                                                <td className="text-center">x-5</td>
                                            </tr>
                                            <tr>
                                                <td>כמות</td>
                                                <td className="text-center">y</td>
                                                <td className="text-center">y+12</td>
                                            </tr>
                                            <tr>
                                                <td>סה"כ תשלום</td>
                                                <td className="text-center">10000</td>
                                                <td className="text-center">10000</td>
                                            </tr>
                                        </table>
                                    </Animate>
                                </SlideDown>



                            </div>
                        </SlideDown>

                        <br /><br />
                        <button className="btn btn-link content3Btn" id="arr3" disabled>הצבת משוואות ופתרון בעיות מילוליות</button>


                        <br /><br /><br /><br />
                        <button className="btn btn-link wordProblemsAllChaptersBtn" disabled>כל הפרקים המלאים</button>
                        <Link to="/shoppingCart" target="_parent" className="shoppingCartLink" id="wordProblems">
                            <button onClick={() => this.props.itemAdd('wordProblems')} className="btn btn-warning shoppingBtn wordProblems">הוסף לעגלת קניות<FontAwesomeIcon icon={faCartArrowDown} size="1x" style={{ marginRight: "5px" }} /></button>
                        </Link>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default WordProblems;