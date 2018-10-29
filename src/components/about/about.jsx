import React, { Component } from 'react';
import './about.css';

class About extends Component {
    state = {}
    render() {
        return (
            <div className="bgAbout">
                <div className="container text-right content" dir="rtl">

                    <p><u>לכל המלמדים</u>, (וגם ללומדים)</p>

                    <br></br>

                    <p><strong><u>מה תרוויחו מהוראה בעזרת האתר</u>?</strong></p>

                    <br></br>

                    <p>א. <strong><u>ראיית התלמיד כלומד אחראי </u></strong></p>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>שחרור התלמיד מהתלות המוחלטת במורה </strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>מעתה התלמיד יכול לחזור על החומר הנלמד ולא רק להישען על מה שהצליח לקלוט בכיתה.</p>
                        </div>
                    </div>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>עבודת בית משמעותית </strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>מעתה ניתן לבקש מתלמידים לא רק לפתור תרגילים שכבר נלמדו, אלא אף להכין את הקרקע לנושא שעדיין לא נלמד בכיתה.</p>
                        </div>
                    </div>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>בניית הביטחון העצמי של התלמיד </strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>ההצלחה להפוך ללומד עצמאי ואחראי מעצימה את הביטחון העצמי של התלמיד.</p>
                        </div>
                    </div>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>יכולת השלמת חומר באופן עצמאי </strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>מעתה התלמיד יכול להישען על האתר כמקור מידע, כך שאם נעדר משיעור או מרצף שיעורים, יוכל להשלים את החסר באופן עצמאי.</p>
                        </div>
                    </div>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>אפשרויות גיוון למידה </strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>מעתה ניתן גם במתמטיקה לגוון את שיטות ההוראה ע"י תלמידים המלמדים תלמידים.  </p>
                        </div>
                    </div>

                    <br></br>


                    <p>ב. <strong><u>חיסכון בזמן </u></strong></p>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>הֶספק רב יותר  </strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>חלק מהטכניקות הנלמדות בכיתה, יכולות להילמד באופן עצמאי כשיעורי בית.</p>
                        </div>
                    </div>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>עמידה בתכנית הלימודים</strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>עבודה עצמית גדולה יותר מאפשרת לימוד החומר כולו.</p>
                        </div>
                    </div>

                    <div className="row details">
                        <div className="col-md-4">
                            <p><strong>הדגשת נושאים מורכבים והעמקת ידע</strong></p>
                        </div>
                        <div className="col-md-8">
                            <p>מעתה ניתן לפנות זמן רב יותר לעיסוק בנושאים אינטגרטיביים ופחות בטכניקות בסיסיות.</p>
                        </div>
                    </div>

                    <br></br>

                    <p>ג. <strong><u>מעגלי למידה </u></strong></p>

                    <div className="details">
                        <p>באתר תמצאו מעגלי למידה בכל נושא. </p>
                        <p>"בדיקת הבנה" לרמת הבנה בסיסית,</p>
                        <p>"תרגול עצמי" ליישום ההבנה בתת נושא,</p>
                        <p>"תרגול כללי" לשאלות אינטגרטיביות על נושא מורחב. שאלות אלה נלקחו רובן ככולן מבחינות בגרות.</p>

                        <br></br>

                        <p>אני מאמין שיש מקום להפריד בין לימוד הנושא לבין ההכנה למבחן הסופי. לדעתי, <strong>רצוי מאוד לסיים את לימוד כל הנושאים כחודשיים לפני מועד הבגרות</strong>. את הזמן הנותר יש להקדיש לחזרה אינטנסיבית על פי מיקוד החומר המתפרסם בכל שנה. </p>
                    </div>

                    <br></br>

                    <p>ד. <strong><u>ניהול זמן </u></strong></p>

                    <div className="details">

                        <p>כדי להספיק את כל החומר בשנה אחת אני ממליץ על לוח הזמנים הבא:</p>

                        <table>
                            <tr className="text-center">
                                <td className="text-center">נושא</td>
                                <td className="text-center">מס' שעות</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-center">טכניקה אלגברית</td>
                                <td className="text-center">5</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-center">בעיות מילוליות</td>
                                <td className="text-center">10</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-center">אינדוקציה</td>
                                <td className="text-center">15</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-center">חדו"א</td>
                                <td className="text-center">40</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-center">טריגונומטריה</td>
                                <td className="text-center">40</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-center">סה"כ</td>
                                <td className="text-center">110</td>
                            </tr>
                        </table>

                        <p>את יתרת השעות כדאי להשקיע בהכנה למבחן.</p>

                        <p>עשרים שנות הוראה למדוני כי <strong><u>חשוב מאוד לשמור על מסגרת שעות זו</u></strong>  גם אם אין מספיקים ללמד את כל סגנונות התרגילים, וגם אם אין כל התלמידים מסוגלים להתמודד עם שאלות ברמת בגרות במהלך הלמידה הראשונית. ישנו אחוז גבוה של לומדים שזמן הפנמתם את החומר ארוך יותר. בזמן ההכנה למבחן הם עצמם יחושו שהדברים "קלים" הרבה יותר מאשר כשהנושא נלמד. </p>
                    </div>

                    <br></br>

                    <p>ה. <strong><u>הדרכה </u></strong></p>

                    <div className="details">

                        <p>בחלק מהנושאים תמצאו גישות שונות להוראתם. גישות אלה פותחו על ידי מ"כורח המציאות"; מן הצורך בשיטות לימוד פשוטות ו"חסכניות" בנושאים מורכבים. הן נוסו בהצלחה בכיתות שונות, ולכן מומלץ לכם ביותר לנסותן. <strong><u>הדרכה בנושאים אלה תינתן לכל דורש</u></strong>. הנכם מוזמנים לפנות אליי.</p>

                        <p>אני מאמין שתמצאו באתר זה כלי עזר יעיל לכם ולתלמידיכם, ומקווה בעזרתו להגדיל את מעגל הלומדים שֶיִּרְאוּ בלימוד המתמטיקה אתגר מהנה ולא מאיים.</p>

                        <br></br>

                        <p>בברכת לימוד עצמאי מאתגר,</p>

                        <p>ישראל  הייזלר </p>

                    </div>

                </div>
            </div>
        );
    }
}

export default About;
