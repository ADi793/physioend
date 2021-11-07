import React from "react";
import Joi from "joi-browser";
import { toast } from 'react-toastify';
import Form from "./common/Form";
import auth from "../services/authService";

class Signin extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const user = { uid: data.username, password: data.password };

      await auth.signIn(user);
      this.props.settingUser(auth.getCurrentUser());
      toast.success('Sign In successfully.');
      this.props.history.replace("/physiodashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 403) {
         const { errors } = this.state;
         errors.username = 'Invalid usernam or password.';
         this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 py-4">
            <h2 className="pt-4 text-muted">Sign in</h2>
            <h3 className="pt-3 pb-5 fs-5 text-muted">With your account:</h3>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Sign In")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
