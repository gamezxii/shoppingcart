import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homeuser from "./pages/user";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user/account/profile">
            <Navbar />
            <Homeuser />
          </Route>
          <Route path="/user/purchase/">
            <Navbar />
            <Homeuser />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
