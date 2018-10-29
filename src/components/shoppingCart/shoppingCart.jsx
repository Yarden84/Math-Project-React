import React, { Component } from 'react';
import './shoppingCart.css';

import InequationItem from './items/inequationItem';
import WordProblemsItem from './items/wordProblemsItem';
import InductionItem from './items/inductionItem';
import CalculusItem from './items/calculusItem';
import TrigItem from './items/trigItem';



class ShoppingCart extends Component {
    state = {
        subjects: [
            { name: 'inequation', status: localStorage.getItem('inequation'), price: 10, num: 0 },
            { name: 'wordProblems', status: localStorage.getItem('wordProblems'), price: 10, num: 0 },
            { name: 'induction', status: localStorage.getItem('induction'), price: 10, num: 0 },
            { name: 'calculus', status: localStorage.getItem('calculus'), price: 15, num: 0 },
            { name: 'trig', status: localStorage.getItem('trig'), price: 15, num: 0 }
        ],
        priceSum: 0
    }

    constructor(props) {
        super(props);
        this.itemCount = this.itemCount.bind(this);
        this.itemRemove = this.itemRemove.bind(this);
    }

    componentDidMount() {
        this.setState({ priceSum: 0 });
        let priceSum = this.state.priceSum;

        for (let i = 0; i < this.state.subjects.length; i++) {
            if (this.state.subjects[i].status === 'true') {
                priceSum += this.state.subjects[i].price;
            }
        }

        this.setState({ priceSum });
        this.itemCount();
    }

    itemCount() {
        let subject = this.state.subjects.slice();
        let itemNum = 1;

        for (let i = 0; i < this.state.subjects.length; i++) {
            if (this.state.subjects[i].status === 'true') {
                subject[i].num = itemNum;
                itemNum++;
            }
        }

        this.setState({ subjects: subject });
    }



    itemRemove(item) {

        localStorage.setItem(item, false);
        let stop = false;
        let subject = this.state.subjects.slice();

        for (let i = 0; i <= this.state.subjects.length && !stop; i++) {
            if (this.state.subjects[i].name === item) {
                subject[i].status = localStorage.getItem(item);
                this.setState({ subjects: subject });
                this.setState({ priceSum: this.state.priceSum - subject[i].price });
                this.itemCount();
                this.props.badgeNum();
                stop = true;
            }
        }

    }



    render() {
        return (
            <div class="container SCContent">
                <table class="table" dir="rtl">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">#</th>
                            <th class="text-center" scope="col">פריט</th>
                            <th class="text-center" scope="col">מחיר</th>
                        </tr>
                    </thead>
                    <tbody class="itemRows">

                        {this.state.subjects[0].status === 'true' ? <InequationItem price={this.state.subjects[0].price} num={this.state.subjects[0].num} itemRemove={this.itemRemove} /> : null}
                        {this.state.subjects[1].status === 'true' ? <WordProblemsItem price={this.state.subjects[1].price} num={this.state.subjects[1].num} itemRemove={this.itemRemove} /> : null}
                        {this.state.subjects[2].status === 'true' ? <InductionItem price={this.state.subjects[2].price} num={this.state.subjects[2].num} itemRemove={this.itemRemove} /> : null}
                        {this.state.subjects[3].status === 'true' ? <CalculusItem price={this.state.subjects[3].price} num={this.state.subjects[3].num} itemRemove={this.itemRemove} /> : null}
                        {this.state.subjects[4].status === 'true' ? <TrigItem price={this.state.subjects[4].price} num={this.state.subjects[4].num} itemRemove={this.itemRemove} /> : null}

                        <tr>
                            <th class="text-center" scope="row"></th>
                            <td class="text-center"></td>
                            <td class="text-center"><strong>סה"כ:  &ensp;&ensp;<span class="itemTotal">{this.state.priceSum}&ensp;</span>ש"ח</strong></td>
                        </tr>


                    </tbody>
                </table>

                <button class="btn btn-warning float-left" id="paymentBtn">לתשלום</button>

            </div>
        );
    }
}

export default ShoppingCart;