import React, { Component } from 'react';
import './payment.css';

class Payment extends Component {

    componentDidMount() {
        document.title = "להבין מתמטיקה - תשלום"
    }

    render() {
        return (
            <div>
                <div className="container payment"></div>
                <h4 dir="rtl" className="text-center paymentText">מתנצלים, לא ניתן לשלם כרגע... חלק זה יושלם בקרוב!</h4>
            </div>

        );
    }
}

export default Payment;