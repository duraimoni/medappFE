import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";



class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  submitHandler = event => {

    event.target.className += " was-validated";
    event.preventDefault();
  };

  render() {

    return (
      <div className="centercontainer">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="5">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardHeader className="form-header red-gradient rounded">
                    <h3 className="my-3">
                      <MDBIcon icon="lock" /> Login:
                    </h3>
                  </MDBCardHeader>
                  <form onSubmit={this.submitHandler}>
                    <label
                      htmlFor="defaultFormEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Your email
                   </label>
                    <input
                      type="email"
                      id="defaultFormEmailEx"
                      className="form-control"
                      name="username"
                      required
                    />

                    <label
                      htmlFor="defaultFormPasswordEx"
                      className="grey-text font-weight-light"
                    >
                      Your password
                   </label>
                    <input
                      type="password"
                      id="defaultFormPasswordEx"
                      className="form-control"
                      name="password"
                      required
                    />

                    <div className="text-center mt-4">
                      <MDBBtn color="deep-orange" className="mb-3" type="submit">
                        Login
                </MDBBtn>
                    </div>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <p>Not a member? <Link to="register">Sign Up</Link></p>
                      <p><Link to="forgotpassword">Forgot Password?</Link></p>
                    </div>
                  </MDBModalFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
    );
  }
}


export default LoginComponent;