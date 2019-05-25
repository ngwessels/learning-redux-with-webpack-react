import React from 'react';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(props) {
    super(props);

  }
  carQuery() {
    fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears')
      .then(results => {
        return results.text();
      }).then(data => {
        console.log(data);
        let newData = data.replace('?', '')
        newData = newData.replace('(', '');
        newData = newData.replace(')', '');
        newData = newData.replace(';', '');
        return JSON.parse(newData);
        // console.log(newData.json());
      }).then(data => {
        console.log(data.Years)
      })


  }


  render(){
    this.carQuery();
    return (
      <div>
        <Switch>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterState: state.masterState
  };
};

export default withRouter(connect(mapStateToProps)(App));
