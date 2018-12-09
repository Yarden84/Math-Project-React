import React, { Component } from 'react';
import './shoppingCart.css';

import { BrowserRouter, Link } from 'react-router-dom';

import InequationItem from './items/inequationItem';
import WordProblemsItem from './items/wordProblemsItem';
import InductionItem from './items/inductionItem';
import CalculusItem from './items/calculusItem';
import TrigItem from './items/trigItem';



class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.itemCount = this.itemCount.bind(this);
        this.itemRemove = this.itemRemove.bind(this);

        this.props.setItemStatus('inequation', localStorage.getItem('inequation'));
        this.props.setItemStatus('wordProblems', localStorage.getItem('wordProblems'));
        this.props.setItemStatus('induction', localStorage.getItem('induction'));
        this.props.setItemStatus('calculus', localStorage.getItem('calculus'));
        this.props.setItemStatus('trig', localStorage.getItem('trig'));

    }


    componentDidMount() {
        let subjectStatus = [localStorage.getItem('inequation'), localStorage.getItem('wordProblems'), localStorage.getItem('induction'), localStorage.getItem('calculus'), localStorage.getItem('trig')];

        let priceSum = this.props.priceSum;

        for (let i = 0; i < subjectStatus.length; i++) {
            if (subjectStatus[i] === 'true') {
                priceSum += this.props.subjects[i].price;
                console.log("componentDidMount priceSum = ", priceSum);
            }
        }

        this.props.setPriceSum(priceSum);
        this.itemCount(subjectStatus);
    }


    itemCount(subjectStatus) {
        let itemNum = 1;

        for (let i = 0; i < subjectStatus.length; i++) {
            if (subjectStatus[i] === 'true') {
                this.props.setItemNum(this.props.subjects[i].name, itemNum);
                itemNum++;
            }
        }
    }



    itemRemove(item) {

        localStorage.setItem(item, false);
        let stop = false;

        for (let i = 0; i <= this.props.subjects.length && !stop; i++) {
            if (this.props.subjects[i].name === item) {
                this.props.setItemStatus(this.props.subjects[i].name, localStorage.getItem(item));
                this.props.setPriceSum(this.props.priceSum - this.props.subjects[i].price);
                let subjectStatus = [localStorage.getItem('inequation'), localStorage.getItem('wordProblems'), localStorage.getItem('induction'), localStorage.getItem('calculus'), localStorage.getItem('trig')];
                this.itemCount(subjectStatus);
                this.props.badgeNum();
                stop = true;
            }
        }

    }



    render() {
        return (
            <BrowserRouter>
                <div class="container SCContent">
                    {console.log("this.props.subjects = ", this.props.subjects)}
                    {console.log("this.props.subjects[2].status = ", this.props.subjects[2].status)}
                    {console.log("this.props.priceSum = ", this.props.priceSum)}
                    <table class="table" dir="rtl">
                        <thead>
                            <tr>
                                <th class="text-center" scope="col">#</th>
                                <th class="text-center" scope="col">פריט</th>
                                <th class="text-center" scope="col">מחיר</th>
                            </tr>
                        </thead>
                        <tbody class="itemRows">

                            {this.props.subjects[0].status === 'true' ? <InequationItem price={this.props.subjects[0].price} num={this.props.subjects[0].num} itemRemove={this.itemRemove} /> : null}
                            {this.props.subjects[1].status === 'true' ? <WordProblemsItem price={this.props.subjects[1].price} num={this.props.subjects[1].num} itemRemove={this.itemRemove} /> : null}
                            {this.props.subjects[2].status === 'true' ? <InductionItem price={this.props.subjects[2].price} num={this.props.subjects[2].num} itemRemove={this.itemRemove} /> : null}
                            {this.props.subjects[3].status === 'true' ? <CalculusItem price={this.props.subjects[3].price} num={this.props.subjects[3].num} itemRemove={this.itemRemove} /> : null}
                            {this.props.subjects[4].status === 'true' ? <TrigItem price={this.props.subjects[4].price} num={this.props.subjects[4].num} itemRemove={this.itemRemove} /> : null}

                            <tr>
                                <th class="text-center" scope="row"></th>
                                <td class="text-center"></td>
                                <td class="text-center"><strong>סה"כ:  &ensp;&ensp;<span class="itemTotal">{this.props.priceSum}&ensp;</span>ש"ח</strong></td>
                            </tr>


                        </tbody>
                    </table>

                    <Link to="/payment" target="_parent" class="btn btn-warning float-left" id="paymentBtn">לתשלום</Link>

                </div>
            </BrowserRouter>
        );
    }
}

export default ShoppingCart;