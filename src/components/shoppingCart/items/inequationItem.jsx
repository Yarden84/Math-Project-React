import React, { Component } from 'react';

class InequationItem extends Component {
    state = {}

    render() {
        return (
            <tr className="inequationRow">
                <th className="text-center" scope="row">{this.props.num}</th>
                <td>
                    <div className="item">
                        <p><strong><span style={{ fontSize: "17px" }}>אי שוויון עם ערך מוחלט</span></strong></p>
                        <ul>
                            <li>חזרה ותזכורת</li>
                            <li>אי שוויון עם ערך מוחלט</li>
                            <li>אי שוויון עם רב איבר בערך מוחלט</li>
                        </ul>
                        <button onClick={() => this.props.itemRemove('inequation')} className="btn btn-link removeBtn" id="inequation">הסר</button>
                    </div>
                </td>
                <td className="text-center inequationPrice">{this.props.price} ש"ח</td>
            </tr>
        );
    }
}

export default InequationItem;