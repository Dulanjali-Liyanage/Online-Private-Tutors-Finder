import React, { Component } from "react";
import { Link, HashRouter, Route, withRouter } from "react-router-dom";
import "../Student/StudentSection.css";
import TutorProfile from "./TutorProfile";
import TeachingSubjects from "./TeachingSubjects";
import StudentRequests from "./StudentRequests";
import TutorAppoinments from "./TutorAppoinments";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./actions/tutorAuthActions";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import Avatar from "react-avatar";
import api from "../api/tutorapi";

class TutorHome extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      tutorID: this.props.match.params.value,
      tutor: {},
    };
    //console.log(this.state.tutorID);
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("User logged out");
  };

  componentDidMount = async () => {
    await api.getTutorById(this.state.tutorID).then((tut) => {
      this.setState({
        tutor: tut.data.data,
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          <HashRouter basename="/">
            <div className="gap">
              <Row>
                <Col xs={1} sm={0}>
                  <center>
                    <Avatar
                      name={this.state.tutor.fullname}
                      size="50"
                      round={true}
                    />
                  </center>
                </Col>
                <Col xs={0} sm={0}>
                  <h5>Hello,{this.state.tutor.fullname}</h5>
                </Col>
              </Row>

              <br />
              <Button
                className="button"
                bsStyle="primary"
                onClick={this.onLogoutClick}
              >
                Log out
              </Button>
            </div>

            <div className="whole">
              <div className="linkside">
                <div className="gap">
                  <Link
                    to={`/tutorssubjects/${this.state.tutorID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">SUBJECTS</font>
                  </Link>
                </div>

                <div className="gap">
                  <Link
                    to={`/studentrequests/${this.state.tutorID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">REQUESTS</font>
                  </Link>
                </div>
                <div className="gap">
                  <Link
                    to={`/tutorappoinments/${this.state.tutorID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">APPOINMENTS </font>
                  </Link>
                </div>
                <div className="gap">
                  <Link
                    to={`/tutorprofile/${this.state.tutorID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">PROFILE</font>
                  </Link>
                </div>
              </div>
              <div className="barside">
                <Route
                  exact
                  path="/tutorssubjects/:value"
                  component={TeachingSubjects}
                />

                <Route
                  exact
                  path="/studentrequests/:value"
                  component={StudentRequests}
                />
                <Route
                  exact
                  path="/tutorprofile/:value"
                  component={TutorProfile}
                />

                <Route
                  exact
                  path="/tutorappoinments/:value"
                  component={TutorAppoinments}
                />
              </div>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

TutorHome.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(withRouter(TutorHome));
