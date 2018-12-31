import React, { Component } from 'react';

class InductionItem extends Component {

    render() {
        return (
            <tr className="inductionRow">
                <th className="text-center" scope="row">{this.props.num}</th>
                <td>
                    <div className="itemPlacement">
                        <div className="item">
                            <p><strong><span className="itemTitle">אינדוקציה מתמטית</span></strong></p>
                            <ul>
                                <li>רקע</li>
                                <li>אינדוקציה של סדרות</li>
                                <li>אינדוקציה עם הוספת מספר איברים</li>
                                <li>אינדוקציה עם איבר ראשון משתנה</li>
                                <li>אינדוקציה של איברים זוגיים או אי זוגיים</li>
                                <li>אינדוקציה של התלכדות סדרות</li>
                                <li>אינדוקציה של אי שוויון</li>
                                <li>אינדוקציה של תכונות התחלקות</li>
                            </ul>
                            <button onClick={() => this.props.itemRemove('induction')} className="btn btn-link removeBtn" id="induction">הסר</button>
                        </div>
                    </div>
                </td>
                <td className="text-center subjectPrice">{this.props.price} ש"ח</td>
            </tr>
        );
    }
}

export default InductionItem