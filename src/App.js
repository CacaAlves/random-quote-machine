import React from 'react';
import { Provider, connect } from 'react-redux';
import './App.css';
import quoteArr from './components/quoteArr';
import store from './redux/store';
import Card from './components/Card';

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: quoteArr[this.props.quoteIndex.quoteIndex].color}}>
        <Card />
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  quoteIndex: state
});

const App = connect(mapStateToProps, null)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppWrapper;
