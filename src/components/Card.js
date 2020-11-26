import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import quoteIndexCreator from './../redux/actions/quoteIndexCreator';
import store from './../redux/store';
import quoteArr from './quoteArr';
import './Card.css';
import twitterIcon from './../imgs/twitter-icon.png';

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.newQuoteButtonOnClick = this.newQuoteButtonOnClick.bind(this);
    }

    newQuoteButtonOnClick() {
        this.props.generateNewQuoteIndex();
    }

    render() {

        return (
            <div id="quote-box" style={{ color: quoteArr[this.props.quoteIndex.quoteIndex].color }}>
                <h1 id="text">
                    {quoteArr[this.props.quoteIndex.quoteIndex].quote}
                </h1>
                <p id="author">
                    -{quoteArr[this.props.quoteIndex.quoteIndex].author}
                </p>
                <div id="buttons">
                    <div id="tweet-quote-div" className="button" style={{ backgroundColor: quoteArr[this.props.quoteIndex.quoteIndex].color }}>

                        <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_top">
                            <img src={twitterIcon} alt="Tweet this quote!" width={'30vw'}/>
                        </a>
                    </div>

                    <div onClick={this.newQuoteButtonOnClick} id="new-quote" className="button" style={{ backgroundColor: quoteArr[this.props.quoteIndex.quoteIndex].color }}>
                        new-quote
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    quoteIndex: state
});

const mapDispatchToProps = (state) => ({
    generateNewQuoteIndex: () => {
        store.dispatch(quoteIndexCreator())
    }
});

const Card = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default Card;