import React, { Component } from 'react';
import './induction.css';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);

class Induction extends Component {

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
                    <div className="container text-right subjectContent" dir="rtl">

                        <h1 className="text-center" id="arr0">אינדוקציה מתמטית</h1>

                        <br /><br />

                        <div class="accordion" id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            רקע
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" class={this.props.slide1 == false ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        <div className="subjectContent1">
                                            <p>ראשית נברר לעצמנו מהי אינדוקציה בכלל, ומהי אינדוקציה מתמטית. </p>
                                            <p>המילה <u>אינדוקציה</u>, לפי מילון אבן שושן, היא "שיטת לימוד מן הפרט אל הכלל". כלומר הוכחה של חוק מסוים מתוך בחינת מקרים פרטיים.</p>
                                            <p>שיטת הלימוד ההפוכה – מתוך כלל ללמוד על הפרטים – נקראת <u>דדוקציה</u>.</p>
                                            <p>באופן לוגי יש קושי לקבל הוכחות אינדוקטיביות. לדוגמה: אם אזרוק קובייה מאוזנת שלוש פעמים, ובכל פעם אראה 5, האם זה אומר שגם בפעם הרביעית היא תַּראה 5 ?  מובן שלא. דוגמה נוספת: אם מצאתי מספר גברים ונשים בעלי עודף משקל הממתיקים את הקפה בסוכרזית, האם זה אומר שסוכרזית משמין ?...
                                                לכן בדרך כלל אנו מוכיחים מקרים פרטיים על ידי חוק כללי. כך בנויה כל הוכחה בגיאומטריה. אנו מכירים משפטים כלליים ומיישמים אותם על מקרה פרטי המונח לפנינו. כך אנו גם מנסים ליישם חוקים פיזיקאליים. לדוגמה: אנו יודעים שתאוצת המשיכה אינה תלויה במסה, ולכן כל הגופים ייפלו מאותו גובה באותה מהירות. אם נבדוק מקרה פרטי של נפילת כדור עופרת וכדור עץ, אכן נוכל לראות את החוק הזה פועל.
                                            </p>
                                            <p>(למתעניינים במדעים ובפילוסופיה: כיוון שכל חוקי המדע הכלליים החלו מתצפיות על מקרים פרטיים, לכאורה הם נתונים לכֶשֶל לוגי. כדי להתמודד עם קושי זה התפתח ענף מחקרי בפילוסופיה של המדע המנסה להתמודד עם כשלים אלו. שניים מהמובילים בתחום זה הם: קרל פופר ותומאס קון. כל אחד מהם מצא פתרון אחר לבעייתיות זו. מאמרו של קרל פופר - "מדע השערות והפרכות" - תורגם ונמצא במקורות של האונ. הפתוחה. ספרו של תומאס קון - "המבנה של מהפכות מדעיות" - תורגם אף הוא. מומלץ לקריאה!)</p>

                                            <br />

                                            <p>האינדוקציה המתמטית באה לפתור כֶּשֶל לוגי זה, והיא מצאה את הדרך לשלב מקרה פרטי בהוכחה כללית כך שיהיה ניתן להוכיח חוק כללי על אף שהוא נבדק רק על מקרה פרטי.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                אינדוקציה של סדרות
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class={this.props.slide2 == false ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            <div className="subjectContent2">
                                                <p>האינדוקציה המתמטית מקובלת כשיטת הוכחה יעילה עבור קבוצות של מספרים.
                                                    עיקרי האינדוקציה המתמטית הם שניים:
                                                </p>
                                                <ol>
                                                    <li>
                                                        <p>כאשר נתון חוק כללי, בוחנים אותו על מקרה פרטי ספציפי. חשוב לבחון אותו על האיבר הנמוך ביותר שמקיים את החוק.</p>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><p>א. אנו מניחים כי החוק הכללי נכון עבור  k  כלשהו.</p></li>
                                                            <li><p>ב. אנו מוכיחים על בסיס ההנחה (בסעיף 2 א.) שאם החוק אכן מתקיים לאותו איבר, הוא
                                                                חייב להתקיים גם עבור האיבר הבא אחריו בקבוצה, כלומר עבור (k+1).
                                                </p></li>
                                                        </ul>
                                                    </li>
                                                </ol>

                                                <br />

                                                <p>כדי להבהיר את השיטה אביא דוגמה מעשית. נניח שאנו מעוניינים להוציא פלייר. אנו מתיישבים מול המחשב ומקלידים אותו ומאיירים ומגיהים... בסוף התהליך אנו "שולחים" את המסמך להדפסה. אנו יודעים שהמדפסת תוציא את המסמך בדיוק כפי שהוא נכתב. אולם עדיין אנו נותנים הוראת הדפסה לעותק אחד, בוחנים אותו (שהוא יצא בדיוק כפי שתכננו), ומכאן והלאה נותנים לו פעולת ביצוע "עד להודעה חדשה". המדפסת מתחילה להדפיס עותק אחרי עותק, בדיוק כפי שהדפיסה את הראשון. האם הפלייר המאה יתאים לפלייר הראשון ? האם הפלייר האלף עדיין יתאים לציור הראשון ?  ברור לנו שכן (בהנחה שהמדפסת מוזנת כל הזמן בדיו ובדפים ואינה מתקלקלת).</p>

                                                <p> מה גורם לנו להיות משוכנעים ?</p>
                                                <ol>
                                                    <li><p>בדקנו את שביעות רצוננו מהדפסת הפלייר הראשון.</p></li>
                                                    <li><p>אנו מניחים שיש פלייר כלשהו שיֵצא לשביעות רצוננו. </p></li>
                                                    <li><p>על בסיס ההנחה שהמדפסת אינה יכולה להתקלקל, והיא מוזנת בדיו ובדפים באופן אוטומטי, <u>אנו מוכיחים שגם הפלייר הבא יֵצא בדיוק כמו הקודם ויהיה כפי שתכננו</u>. </p></li>
                                                </ol>
                                                <p>זה למעשה רעיון האינדוקציה המתמטית. כך אנו משיגים הוכחה הנכונה לאין סוף האיברים בסדרה.</p>

                                                <br />

                                                <p>נתחיל בדוגמה פשוטה:</p>
                                                <p>א. הוכיחו באינדוקציה כי הטענה: <span dir="ltr">1+2+3+...+n = <sup>1</sup>&frasl;<sub>2</sub>(n<sup>2</sup>+n)</span> מתקיימת לכל n טבעי.</p>

                                                <br />

                                                <p>פתרון:</p>

                                                <ol>
                                                    <li>
                                                        <p>נבדוק עבור מקרה פרטי.</p>
                                                        <p>נבדוק את הטענה עבור המקרה:  n = 1  (האיבר הקטן ביותר)
                                                            הצבה בטענה במקרה זה מראה כי הטור באגף שמאל מתחיל ומסתיים ב- 1.
                                                </p>
                                                        <p>והבדיקה: </p>
                                                        <p dir="ltr">1 = <sup>1</sup>&frasl;<sub>2</sub>(1<sup>2</sup>+1)</p>
                                                        <p>1 = 1</p>
                                                        <p>כלומר הבדיקה מראה שאכן החוקיות מתקיימת. </p>

                                                        <br />

                                                        <p>הפעם נרחיב את הבדיקה גם עבור מספרים אחרים כדי להוכיח שגם מקרים פרטיים אחרים מקיימים את הטענה. </p>
                                                        <p>נציב:  n = 5</p>
                                                        <p>במקרה זה הטור המתקבל באגף שמאל הוא:&nbsp;&nbsp;&nbsp; 1+2+3+4+5</p>
                                                        <p style={{ display: "inline-block", verticalAlign: "top" }} dir="ltr">:והבדיקה</p>
                                                        <div className="text-center" id="ind1">
                                                            <p dir="ltr">1+2+3+4+5 = <sup>1</sup>&frasl;<sub>2</sub>(5<sup>2</sup>+5) <span id="indFix"></span></p>
                                                            <p dir="ltr">15 = <sup>1</sup>&frasl;<sub>2</sub>&middot;30</p>
                                                            <p>15 = 15</p>
                                                        </div>

                                                    </li>

                                                    <li>
                                                        <p>הנחה: הטענה נכונה עבור איבר כלשהו  k.</p>
                                                        <p style={{ display: "inline-block" }}>כלומר: על ידי הצבת  n = k מקבלים: </p>
                                                        <div id="ind2" dir="ltr">1+2+3...+k = <sup>1</sup>&frasl;<sub>2</sub>(k<sup>2</sup>+k)</div>
                                                    </li>
                                                    <li>
                                                        <p>צריך להוכיח שהטענה מתקיימת גם עבור האיבר הבא אחריו, כלומר עבור:  k+1 </p>
                                                        <p style={{ display: "inline-block" }}>על ידי הצבת  n = k+1  מקבלים:</p>
                                                        <div id="ind2" dir="ltr">1+2+3...+k+(k+1) = <sup>1</sup>&frasl;<sub>2</sub>[(k+1)<sup>2</sup>+(k+1)]</div>
                                                    </li>


                                                    <br />

                                                    <p><u>שימו לב! מכיוון שהוספנו עוד איבר בטור משמאל  (k+1), חובה עלינו להתאים את אגף ימין. כדי לשמור על השקילות יש להציב את האיבר האחרון שהוא עכשיו (k+1) בביטוי הסכום</u>.</p>

                                                    <p>הוכחה: </p>
                                                    <p style={{ display: "inline-block" }}>נעתיק שוב את השוויון: </p>
                                                    <div id="ind2" dir="ltr">1+2+3...+k+(k+1) = <sup>1</sup>&frasl;<sub>2</sub>[(k+1)<sup>2</sup>+(k+1)]</div>

                                                    <p>כדי להוכיח זהות בין האגפים מותר לנו לבצע כל פעולה אלגברית חוקית,
                                                        כמו: הצבה, העברת אגפים, הכפלה/חילוק במספר וכדומה, עד לקבלת זהות נראית בין האגפים.
                                                תחילה נבצע הצבה של ההנחה האומרת: <span dir="ltr">1+2+3...+k = <sup>1</sup>&frasl;<sub>2</sub>(k<sup>2</sup>+k)</span>
                                                    </p>

                                                    <table id="indTable" dir="rtl">
                                                        <tr>
                                                            <td>הביטוי המתקבל הוא:</td>
                                                            <td className="text-center"><sup>1</sup>&frasl;<sub>2</sub>(k<sup>2</sup>+k)+(k+1) = <sup>1</sup>&frasl;<sub>2</sub>[(k+1)<sup>2</sup>+(k+1)]</td>
                                                        </tr>
                                                        <tr>
                                                            <td>נכפיל  ב- 2  ונפתח סוגריים:</td>
                                                            <td className="text-center">k<sup>2</sup>+k+2k+2 = k<sup>2</sup>+2k+1+k+1</td>
                                                        </tr>
                                                        <tr>
                                                            <td>כינוס:</td>
                                                            <td className="text-center">k<sup>2</sup>+3k+2 = k<sup>2</sup>+3k+2</td>
                                                        </tr>
                                                    </table>

                                                    <p>עתה אנו רואים את הזהות בין האגפים, כלומר הוכחנו את השוויון.</p>
                                                </ol>
                                                <p>מתוך שני העקרונות:  א. הבדיקה למקרה פרטי,  ב. ההנחה וההוכחה שאם החוק מתקיים עבור  k כלשהו, הוא יתקיים גם עבור k+1 - הוכחנו את נכוֹנוּת הטענה עבור כל  n טבעי.</p>

                                                <div id="box">
                                                    <h6><u>בכל הוכחה באינדוקציה</u>:</h6>
                                                    <p>א. נבדוק נכוֹנוּת הטענה עבור מקרה פרטי – בדרך כלל n=1</p>
                                                    <p>ב. נניח כי הטענה נכונה עבור: n=k</p>
                                                    <p>ג. נוכיח נכוֹנוּת הטענה עבור: n=k+1</p>
                                                    <p>וסיום ההוכחה: על פי שני העקרונות: א. הבדיקה למקרה פרטי, ב. ההנחה וההוכחה שאם     החוק מתקיים עבור k כלשהו, הוא יתקיים גם עבור k+1 -  הוכחנו את נכוֹנוּת הטענה עבור כל  n טבעי.</p>
                                                </div>
                                                <br />
                                                <button className="btn btn-link understandBtn" onClick={() => this.openContent('slide3')} onMouseEnter={this.startRotate} onMouseLeave={this.stopRotate}><strong>בדיקת הבנה</strong></button>
                                                <img src={require("../../img/understand5.jpg")} alt="no image" className={"understandImg " + this.props.spin + this.props.move} />
                                                <div style={{ height: 20 }}></div>
                                                <SlideDown closed={this.props.slide3} className="questions my-dropdown-slidedown3">

                                                    <p style={{ display: "inline-block" }}>הוכיחו על ידי אינדוקציה מתמטית כי לכל n טבעי מתקיים:  </p>
                                                    <div id="ind3" dir="ltr">4+9+14+...+(5n-1) = <sup>1</sup>&frasl;<sub>2</sub>(5n<sup>2</sup>+3n)</div>

                                                    <br />

                                                    <button className="btn btn-link answer1Btn" onClick={() => this.showAnswer('answer')}>תשובה:</button>
                                                    <SlideDown closed={!this.props.answer1} className="my-dropdown-slidedown3">
                                                        <div className="answer1">
                                                            <ol>
                                                                <li>
                                                                    <p>בדיקה למקרה פרטי: n = 1 </p>
                                                                    <p>4 = <sup>1</sup>&frasl;<sub>2</sub>(5&middot;1<sup>2</sup>+3&middot;1)</p>
                                                                    <p>4 = <sup>1</sup>&frasl;<sub>2</sub>(5+3)</p>
                                                                    <p>4 = 4</p>
                                                                </li>
                                                                <li>
                                                                    <p style={{ display: "inline-block" }}>הנחה – עבור  n = k טבעי כלשהו מתקיים:</p>
                                                                    <div id="ind2" dir="ltr">4+9+14+...+(5k-1) = <sup>1</sup>&frasl;<sub>2</sub>(5k<sup>2</sup>+3k)</div>
                                                                </li>
                                                                <li>
                                                                    <p>צ"ל:  הזהות תתקיים גם עבור:  n = (k+1)</p>
                                                                    <p>כלומר צריך להוכיח את הזהות:</p>
                                                                    <p id="indLong1">4+9+14+...+(5k-1)+[5(k+1)-1]=<sup>1</sup>&frasl;<sub>2</sub>[5(k+1)<sup>2</sup>+3(k+1)]</p>
                                                                    <div id="indLong2">
                                                                        <p dir="ltr">
                                                                            [(5k-1)+[5(k+1)-1] =
                                                                        </p>
                                                                        <p dir="ltr">
                                                                            <sup>1</sup>&frasl;<sub>2</sub>[5(k+1)<sup>2</sup>+3(k+1)+...+4+9+14
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                            <p>הוכחה:</p>
                                                            <p>לפי ההנחה: <span style={{ marginRight: 155 }} dir="ltr">4+9+14+...+(5k-1) = <sup>1</sup>&frasl;<sub>2</sub>(5k<sup>2</sup>+3k)</span></p>
                                                            <p>על ידי הצבה: <span id="ind4" dir="ltr"><sup>1</sup>&frasl;<sub>2</sub>(5k<sup>2</sup>+3k)+[5(k+1)-1] = <sup>1</sup>&frasl;<sub>2</sub>[5(k+1)<sup>2</sup>+3(k+1)]</span></p>
                                                            <p>נכפיל ב- 2: <span style={{ marginRight: 118 }} dir="ltr">(5k<sup>2</sup>+3k)+2[5(k+1)-1] = [5(k+1)<sup>2</sup>+3(k+1)]</span></p>
                                                            <p>פתיחת סוגריים: <span style={{ marginRight: 79 }} dir="ltr">5k<sup>2</sup>+3k+10k+8 = 5k<sup>2</sup>+10k+5+3k+3</span></p>
                                                            <p>כינוס: <span id="ind5" dir="ltr">5k<sup>2</sup>+13k+8 = 5k<sup>2</sup>+13k+8</span></p>

                                                            <br />

                                                            <p>על פי שני העקרונות:  א. הבדיקה למקרה פרטי,  ב. ההנחה וההוכחה שאם הטענה מתקיימת עבור  k טבעי כלשהו, היא תתקיים גם עבור  k+1 - הוכחנו שהזהות מתקיימת עבור כל  n טבעי.</p>
                                                        </div>
                                                    </SlideDown>
                                                </SlideDown>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                אינדוקציה עם הוספת מספר איברים
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                אינדוקציה עם איבר ראשון משתנה
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div class="card-body">

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                אינדוקציה של איברים זוגיים או אי זוגיים
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div class="card-body">

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingSix">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                אינדוקציה של התלכדות סדרות
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                        <div class="card-body">

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingSeven">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                אינדוקציה של אי שוויון
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                        <div class="card-body">

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingEight">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed disabled" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                אינדוקציה של תכונות התחלקות
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                                        <div class="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="buyItem">
                                <p>לרכישת הפרק המלא:</p>
                                <Link to="/shoppingCart" target="_parent" className="shoppingCartLink">
                                    <button onClick={() => this.props.itemAdd('induction')} className="btn btn-warning shoppingBtn">הוסף לעגלת קניות<FontAwesomeIcon icon={faCartArrowDown} size="1x" style={{ marginRight: "5px" }} /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Induction;
