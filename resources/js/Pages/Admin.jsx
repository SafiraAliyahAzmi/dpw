import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../Admin/Sidebar';
import Car from '../Admin/Car';
import Booking from '../Admin/Booking';
import Navbar from '../Admin/Navbar';
import Payment from '../Admin/Payment';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
        <Navbar />
          <Switch>
            <Route path="/car" component={Car} />
            <Route path="/booking" component={Booking} />
            <Route path="/list-car" component={Payment} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
