import React from 'react';
import './App.css';
import NavContainer from '../../container/NavContainer';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from '../ScrollToTop/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="App">
        <NavContainer></NavContainer>
          <div className="">
          {/* <AdminPage></AdminPage> */}
            <ScrollToTop/>
            <RouterURL></RouterURL>
          </div>
        <Footer></Footer>
      </div>
    </Router>
  );
  // showContentMenus(routes) {
  //   var result = null;
  //   if(routes.length > 0) {
  //     result = routes.map((route,index) => {
  //       return (
  //           <Route key={index} path={route.path} exact={route.exact} component={route.main} />
  //       )
  //     })
  //   }
  //   return result;
  // }
}

export default App;
