import React, { Component } from 'react';
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
import { Link } from 'react-router-dom';



class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      question: "",
      answer: ""

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    alert(name);
    this.setState({ [name]: event.target.value });
  }

  submitHandler = event => {
    alert(this.state.username);
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
                       Forgot Password
                    </h3>
                  </MDBCardHeader>              <form onSubmit={this.submitHandler} className="needs-validation" noValidate >
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
                      Secret Question
              </label>
                    <select name="question" className="form-control" required>
                      <option>Select Question</option>
                      <option value="1">What is your Pet name</option>
                    </select>
                    <label
                      htmlFor="defaultFormEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Secret answer
              </label>
                    <input
                      type="password"
                      id="defaultFormEmailEx"
                      className="form-control"
                      name="answer"
                      required
                    />

                    <div className="text-center mt-4">
                      <MDBBtn color="deep-orange" className="mb-3" type="submit">
                        Reset password
                </MDBBtn>
                    </div>

                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <p>Not a member? <Link to="register">Sign Up</Link></p>
                      <p><Link to="login">Login</Link></p>
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


export default ForgotPasswordComponent;