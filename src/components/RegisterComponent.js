import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import { Link } from 'react-router-dom';


import axios from 'axios';
import { API_ENDPOINT } from '../environment/envConfig';




export class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formErrors: {},
      formValues: {
        name: '',
        username: '',
        email: '',
        question: '',
        answer: '',
        password: '',
        confirmpassword: ''

      },

    };
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event) {
    //  const name = event.target.name;
    let formValues = this.state.formValues;
    let name = event.target.name; // Field name
    let value = event.target.value; // Field value

    formValues[name] = value;
    this.setState({ formValues })
    //this.setState({[this.formValues.name]: event.target.value});
  }
  requiredCheck = (value) => {
    if (!!value) {
      return false;
    } else {
      return 'This field is required';
    }
  }

  callthis() {
    alert("s");
    this.props.history.push("/login");
  }
  callBackEnd() {
   // alert('y');
    axios.post(API_ENDPOINT + 'users', this.state.formValues)
      .then(function (response) {
        alert(response.statusText);
        if (response.statusText === "OK") {
          alert('y');
          return true;
          // this.callthis();
        }
      })
      .catch(function (error) {
        return false;
        //Perform action based on error
      }

      );

  }
  submitHandler = event => {
       event.target.className += " was-validated";
    event.preventDefault();
    axios.post(API_ENDPOINT + 'users', this.state.formValues)
    .then(function (response) {
      alert(response.statusText);
      if (response.statusText === "OK") {
        
        return true;
       }
    })
    .catch(function (error) {
      return false;
    }

    );
    this.props.history.push("/");
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header red-gradient rounded">
                  <h3 className="my-3">
                    Registration
                </h3>
                </MDBCardHeader>
                <form onSubmit={this.submitHandler} className="needs-validation" noValidate >
                  <label
                    htmlFor="defaultFormnameEx"
                    className="grey-text font-weight-light"
                  >
                    Name
          </label>
                  <input
                    type="text"
                    id="defaultFormnameEx"
                    className="form-control"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.formValues.name}
                    required
                  />

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
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.formValues.email}
                    required
                  />
                  <label
                    htmlFor="defaultFormEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Password
          </label>
                  <input
                    type="password"
                    id="defaultFormEmailEx"
                    className="form-control"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.formValues.password}
                    required
                  />
                  <label
                    htmlFor="defaultFormEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Confirm Password
          </label>
                  <input
                    type="password"
                    id="defaultFormEmailEx"
                    className="form-control"
                    name="confirmpassword"
                    required
                    onChange={this.handleChange}
                    value={this.state.formValues.confirmpassword}
                  />
                  <label
                    htmlFor="defaultFormPasswordEx"
                    className="grey-text font-weight-light"
                  >
                    Secret Question
          </label>
                  <select name="question" className="form-control"
                    onChange={this.handleChange}
                    value={this.state.formValues.question}
                    required>
                    <option>Select Question</option>
                    <option value="What is your Pet name">What is your Pet name</option>
                  </select>
                  <label
                    htmlFor="defaultFormAnswerEx"
                    className="grey-text font-weight-light"
                  >
                    Secret answer
          </label>
                  <input
                    type="password"
                    id="defaultFormAnswerEx"
                    className="form-control"
                    name="answer"
                    onChange={this.handleChange}
                    value={this.state.formValues.answer}
                    required
                  />

                  <div className="text-center mt-4">
                    <MDBBtn color="deep-orange" className="mb-3" type="submit">
                      Register
            </MDBBtn>
                  </div>

                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p><Link to="login">Login</Link></p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}
export default RegisterComponent;