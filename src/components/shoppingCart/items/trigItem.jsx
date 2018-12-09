import React, { Component } from 'react';

class TrigItem extends Component {

    render() {
        return (
            <tr className="trigRow">
                <th className="text-center" scope="row">{this.props.num}</th>
                <td>
                    <div className="item">
                        <p><strong><span style={{ fontSize: "17px" }}>טריגונומטריה</span></strong></p>
                        <ul>
                            <ul>
                                <li>רקע</li>
                                <li>הרדיאן</li>
                            </ul>
                            <br />
                            <ul>
                                <strong> פונקציות טריגונומטריות</strong>
                                <li>הגדרות, זהויות ומשוואות</li>
                                <li>חקירת הפונקציה הטריגונומטרית</li>
                                <li>משיק ונורמל</li>
                                <li>מקסימום ומינימום מקומי ומוחלט</li>
                                <li>נגזרת של פונקציה סתומה</li>
                                <li>אינטגרל של פונקציה טריגונומטרית</li>
                            </ul>
                            <br />
                            <ul>
                                <li>טריגונומטריה של מצולעים ושל גופים מרחביים</li>
                                <li>משפט הסינוסים</li>
                                <li>משפט הקוסינוסים</li>
                                <li>טריגונומטריה במרחב</li>
                                <li>בעיות ערך קיצון בטריגונומטריה</li>
                            </ul>

                        </ul>
                        <button onClick={() => this.props.itemRemove('trig')} className="btn btn-link removeBtn" id="trig">הסר</button>
                    </div>
                </td>
                <td className="text-center trigPrice">{this.props.price} ש"ח</td>
            </tr>
        );
    }
}

export default TrigItem;