import React, { Component } from "react";
// import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../assets/css/Login.css";
import CogIcon from "react-icons/lib/fa/cogs";
// import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import "../../assets/css/tasks.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loging_status: null,
      name: null,
      show_error_login: false,
      loading: false
    };
    this.processLog = this.processLog.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  processLog() {
    this.setState({ loading: true });
    var self = this;
    axios
      .post("/login", {
        username: this.state.username,
        pwd: this.state.password
      })
      .then(function(res) {
        if (res.data.token != null) {
          self.setState({ loading: false });
          sessionStorage.setItem("loging_status", res.data.loging_status);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user", res.data.user);
          sessionStorage.setItem("username", res.data.username);
          self.setState({ show_error_login: false });
          window.location.reload();
          let token = res.data.token;
          self.setState({ token: token });
        } else {
          self.setState({ loading: false });
          self.setState({ show_error_login: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  handleChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }
  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div id="fullscreen_bg" className="fullscreen_bg">
        {/* <div className="big-wrapper"> */}
        <div className="rowlg">
          <h1 className="topic">
            ITMS <CogIcon />{" "}
          </h1>
          <div className="spinner">
            {this.state.loading && (
              <PropagateLoader
                margin="10px"
                size={14}
                color={"#4A90E2"}
                loading={this.state.loading}
              />
            )}
          </div>
          <div className="form-signin">
            <h1 className="form-signin-heading">Sign In</h1>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </FormGroup>
              <div id="logingButton">
                <FormGroup>
                  <Button
                    bsStyle="warning"
                    bsSize="large"
                    block
                    onClick={this.processLog}
                    type="submit"
                  >
                    Login
                  </Button>

                  {this.state.show_error_login && (
                    <h3 className="login-error">Invalid Credentials</h3>
                  )}
                </FormGroup>
              </div>
            </Form>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
