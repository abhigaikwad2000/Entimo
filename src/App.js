import React from 'react';
import './App.css';
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useRouteMatch
} from "react-router-dom";

import Landing from './Components/LandingPage/Landing';
import Login from './Components/LogInPage/Login';
import SignUp from './Components/SignUp/SignUp';
class App extends React.Component { 
  render(){
    return (
      <Router>
       <div>
         <Route exact path="/" component={Landing}>
           </Route>
   
               
             <Route exact path="/Login" component={Login}>
           
           </Route>
               
             <Route exact path="/Signup" component={SignUp}>
              </Route>
              </div>
             </Router>
     
     );

  }
  
}
const mapStateToProps = store => ({
  location: store.router.location
});
export default withRouter(App);
 






