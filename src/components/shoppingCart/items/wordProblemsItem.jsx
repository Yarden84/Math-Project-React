import React, { Component } from 'react';

class WordProblemsItem extends Component {
    state = {}
    render() {
        return (
            <tr className="wordProblemsRow">
                <th className="text-center" scope="row">{this.props.num}</th>
                <td>
                    <div className="item">
                        <p><strong><span style={{ fontSize: "17px" }}>בעיות מילוליות</span></strong></p>
                        <ul>
                            <li>רקע</li>
                            <li>תרגול נעלמים ושליפת נתונים</li>
                            <li>הצבת משוואות ופתרון בעיות מילוליות</li>
                        </ul>
                        <button onClick={() => this.props.itemRemove('wordProblems')} className="btn btn-link removeBtn" id="wordProblems">הסר</button>
                    </div>
                </td>
                <td className="text-center wordProblemsPrice">{this.props.price} ש"ח</td>
            </tr>
        );
    }

}

export default WordProblemsItem;