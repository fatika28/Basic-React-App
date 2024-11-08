//import "./App.css";

import {Home} from'./components/Home'
import {Tour} from'./components/Tour'
import {TourDetail} from'./components/TourDetail'
import {Navbar} from'./components/Navbar'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App()
 {
  return (
    <BrowserRouter>
  <div className="container">

      <h3 className="m-3 d-flex justify-content-center">
      Tour Management Portal</h3>

      <Navbar/>

   <Switch>
     <Route path="/" component={Home} exact />
     <Route path="/Tour" component={Tour} />
     <Route path="/TourDetail" component={TourDetail} />
   </Switch>
  </div>
  </BrowserRouter>
  );  
}
export default App;
