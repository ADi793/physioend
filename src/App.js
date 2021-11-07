import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PhysioDashboard from "./components/PhysioDashboard";
import auth from "./services/authService";
import Signin from "./components/Signin";
import Signout from "./components/Signout";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = auth.getCurrentUser();

    setUser(user);
  }, []);

  const settingUser = (user) => {
    setUser(user);
  };

  return (
    <React.Fragment>
      <Navbar user={user} />
      <ToastContainer />
      <div className="main">
        <Switch>
          <Route
            path="/signin"
            render={(props) => <Signin {...props} settingUser={settingUser} />}
          />
          <Route
            path="/signout"
            render={(props) => <Signout {...props} settingUser={settingUser} />}
          />
          <Route path="/physiodashboard" component={PhysioDashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
