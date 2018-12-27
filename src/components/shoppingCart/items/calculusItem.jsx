import React, { Component } from 'react';

class CalculusItem extends Component {

    render() {
        return (
            <tr className="calculusRow">
                <th className="text-center" scope="row">{this.props.num}</th>
                <td>
                    <div className="itemPlacement">
                        <div className="item">
                            <p><strong><span style={{ fontSize: "17px" }}>חשבון דיפרנציאלי ואינטגרלי</span></strong></p>
                            <ul>
                                <ul>
                                    <strong>חשבון דיפרנציאלי</strong>
                                    <li>רקע</li>
                                    <li>פונקציות-חזרה</li>
                                    <li>על סימטריה ומתמטיקה</li>
                                    <li>שיפוע של עקום</li>
                                    <li>מקסימום ומינימום מקומים ומוחלט</li>
                                    <li>חקירת פונקציה ושרטוט</li>
                                    <li>רציפות של פונקציה</li>
                                    <li>נגזרת שנייה</li>
                                    <li>נקודות אי רציפות ואסימפטוטות</li>
                                    <li>ניתוח אסימפטוטות אופקיות</li>
                                    <li>חקירת פונקציה עם פרמטרים</li>
                                    <li>מציאת משיקים לפונקציה</li>
                                    <li>הנורמל</li>
                                    <li>משיק לפונקציה דרך נקודה מחוץ לפונקציה</li>
                                    <li>בעיות מקסימום ומינימום</li>
                                    <li>נגזרת של פונקציה סתומה</li>
                                </ul>
                                <br />
                                <ul>
                                    <strong>חשבון אינטגרלי</strong>
                                    <li>מציאת פונקציה קדימה</li>
                                    <li>שימוש באינטגרל למציאת שטחים</li>
                                    <li>נפח גוף סיבוב</li>
                                </ul>
                            </ul>
                            <button onClick={() => this.props.itemRemove('calculus')} className="btn btn-link removeBtn" id="calculus">הסר</button>
                        </div>
                    </div>
                </td>
                <td className="text-center subjectPrice">{this.props.price} ש"ח</td>
            </tr>
        );
    }
}

export default CalculusItem;