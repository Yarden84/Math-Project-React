import React, { Component } from 'react';

class WordProblemsItem extends Component {

    render() {
        return (
            <tr className="wordProblemsRow">
                <th className="text-center" scope="row">{this.props.num}</th>
                <td>
                    <div className="itemPlacement">
                        <div className="item">
                            <p><strong><span className="itemTitle">בעיות מילוליות</span></strong></p>
                            <ul>
                                <li>רקע</li>
                                <li>תרגול נעלמים ושליפת נתונים</li>
                                <li>הצבת משוואות ופתרון בעיות מילוליות</li>
                            </ul>
                            <button onClick={() => this.props.itemRemove('wordProblems')} className="btn btn-link removeBtn" id="wordProblems">הסר</button>
                        </div>
                    </div>
                </td>
                <td className="text-center subjectPrice">{this.props.price} ש"ח</td>
            </tr>
        );
    }

}

export default WordProblemsItem;