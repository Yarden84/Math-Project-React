import React, { Component } from 'react';
import './App.css';

import Navbar from '../components/fixedElements/navbar';
import Footer from '../components/fixedElements/footer';

import { connect } from 'react-redux';
import { setChaptersArr, foundChars } from '../actions/searchActions';
import { setSlide1, setSlide2, setSlide3, setAnswer1, setAnswer2, setAnswer3, setAnswer4, setSpin, setMove, setImgBtnClicked } from '../actions/subjectActions';
import { setItemStatus, setItemNum, setItemsSum, setPriceSum } from '../actions/shoppingCartActions';

class App extends Component {

  constructor() {
    super();
    this.itemAdd = this.itemAdd.bind(this);
    this.setSlide = this.setSlide.bind(this);
  }

  itemAdd(item) {
    localStorage.setItem(item, true);
  }

  setSlide(num) {
    switch (num) {
      case 1:
        localStorage.setItem('slide1', false);
        break;
      case 2:
        localStorage.setItem('slide2', false);
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar
          chapters={this.props.searchReducer.chapters}
          foundMatch={this.props.searchReducer.foundMatch}
          chaptersFound={this.props.searchReducer.chaptersFound}
          setArr={this.props.setChaptersArr}
          foundChars={this.props.foundChars}

          slide1={this.props.subjectReducer.slide1}
          slide2={this.props.subjectReducer.slide2}
          slide3={this.props.subjectReducer.slide3}
          answer1={this.props.subjectReducer.answer1}
          answer2={this.props.subjectReducer.answer2}
          answer3={this.props.subjectReducer.answer3}
          answer4={this.props.subjectReducer.answer4}
          spin={this.props.subjectReducer.spin}
          move={this.props.subjectReducer.move}
          imgBtnClicked={this.props.subjectReducer.imgBtnClicked}

          setSlide1={this.props.setSlide1}
          setSlide2={this.props.setSlide2}
          setSlide3={this.props.setSlide3}
          setAnswer1={this.props.setAnswer1}
          setAnswer2={this.props.setAnswer2}
          setAnswer3={this.props.setAnswer3}
          setAnswer4={this.props.setAnswer4}
          setSpin={this.props.setSpin}
          setMove={this.props.setMove}
          setImgBtnClicked={this.props.setImgBtnClicked}

          subjects={this.props.shoppingCartReducer.subjects}
          itemsSum={this.props.shoppingCartReducer.itemsSum}
          priceSum={this.props.shoppingCartReducer.priceSum}

          setItemStatus={this.props.setItemStatus}
          setItemNum={this.props.setItemNum}
          setItemsSum={this.props.setItemsSum}
          setPriceSum={this.props.setPriceSum}

          itemAdd={this.itemAdd}
          setSlide={this.setSlide}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchReducer: state.searchReducer,
    subjectReducer: state.subjectReducer,
    shoppingCartReducer: state.shoppingCartReducer
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    setChaptersArr: (chaptersFound) => {
      dispatch(setChaptersArr(chaptersFound));
    },
    foundChars: (charsFound) => {
      dispatch(foundChars(charsFound));
    },

    setSlide1: (status) => {
      dispatch(setSlide1(status));
    },
    setSlide2: (status) => {
      dispatch(setSlide2(status));
    },
    setSlide3: (status) => {
      dispatch(setSlide3(status));
    },
    setAnswer1: (status) => {
      dispatch(setAnswer1(status));
    },
    setAnswer2: (status) => {
      dispatch(setAnswer2(status));
    },
    setAnswer3: (status) => {
      dispatch(setAnswer3(status));
    },
    setAnswer4: (status) => {
      dispatch(setAnswer4(status));
    },
    setSpin: (status) => {
      dispatch(setSpin(status));
    },
    setMove: (status) => {
      dispatch(setMove(status));
    },
    setImgBtnClicked: (status) => {
      dispatch(setImgBtnClicked(status));
    },

    setItemStatus: (item, status) => {
      dispatch(setItemStatus(item, status));
    },
    setItemNum: (item, num) => {
      dispatch(setItemNum(item, num));
    },
    setItemsSum: (status) => {
      dispatch(setItemsSum(status));
    },
    setPriceSum: (status) => {
      dispatch(setPriceSum(status));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(App);

