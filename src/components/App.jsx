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
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears");
    xhr.send(data);
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
