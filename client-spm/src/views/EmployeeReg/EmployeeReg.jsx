import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, ButtonGroup } from "reactstrap";

import { PanelHeader, FormInputs } from "components";
import axios from "axios";
class EmployeeReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: null,
      empname: null,
      empadress: null,
      supervisername: null,
      supervisertitle: null,
      superviseremail: null,
      superviserphone: null,
      startdate: null,
      enddate: null,
      hours: null,
      tasks: null,
      llearning: null,
      externalsuperviser: null,
      dateof: null,
      message: null,

      studentID: null,
      stdname: null,
      address: null,
      homephone: null,
      mobilephone: null,
      email: null,
      semester: null,
      gpa: null,
      cgpa: null


    };
    this.searchstudent = this.searchstudent.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.RegisterEmployee = this.RegisterEmployee.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.clearFieldsOnSubmit = this.clearFieldsOnSubmit.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  handleChange({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  searchstudent() {
    console.log(this.state.studentID);
    console.log("search student");
    axios
      .post("/studentsearch", {

        studentID: this.state.studentID,
        stat: true
      }).then((res) => {
        // console.log(res.data.user.stdname);
        res.data.user.map((data) => {
          console.log(data.stdname);
          this.setState({
            
            stdname: data.stdname,
            address: data.address,
            homephone: data.homephone,
            mobilephone: data.mobilephone,
            email: data.email,
            semester: data.semester,
            gpa: data.gpa,
            cgpa: data.cgpa

          });
        });

      }).catch((err) => {
        console.log(err);
      });

  }

  RegisterEmployee() {
    console.log("inside Regstd");
    axios
      .post("/addsuperviserandstudent", {
        empid: this.state.empid,
        empname: this.state.empname,
        empadress: this.state.empadress,
        supervisername: this.state.supervisername,
        supervisertitle: this.state.supervisertitle,
        superviseremail: this.state.superviseremail,
        superviserphone: this.state.superviserphone,
        startdate: this.state.startdate,
        enddate: this.state.enddate,
        hours: this.state.hours,
        tasks: this.state.tasks,
        learningthings: this.state.learningthings,
        externalsupervisername: this.state.externalsupervisername,
        dateof: this.state.dateof,
        stat: true
      }).then((res) => {
        this.setState({
          empid: "",
          empname: "",
          empadress: "",
          supervisername: "",
          supervisertitle: "",
          superviseremail: "",
          superviserphone: "",
          startdate: "",
          enddate: "",
          hours: "",
          tasks: "",
          learningthings: "",
          externalsupervisername: "",
          dateof: "",
          message:res.data.message
        });

      }).catch((err) => {
        console.log(err);
      });

  }

  clearFields() {
    this.setState({
      empid: "",
      empname: "",
      empadress: "",
      supervisername: "",
      supervisertitle: "",
      superviseremail: "",
      superviserphone: "",
      startdate: "",
      enddate: "",
      hours: "",
      tasks: "",
      learningthings: "",
      externalsupervisername: "",
      dateof: "",
      message: "",

      studentID: "",
      stdname: "",
      address: "",
      homephone: "",
      mobilephone: "",
      email: "",
      semester: "",
      gpa: "",
      cgpa: ""

    });
  };

  setMessage(res) {
    console.log(res.data.message)
    this.setState({
      message: res.data.message
    });
  }

  clearFieldsOnSubmit() {
    console.log("clear");
    this.setState({
      empid: "",
      empname: "",
      empadress: "",
      supervisername: "",
      supervisertitle: "",
      superviseremail: "",
      superviserphone: "",
      startdate: "",
      enddate: "",
      hours: "",
      tasks: "",
      learningthings: "",
      externalsupervisername: "",
      dateof: "",
      message: ""
    });
  };

  render() {
    return (
      <div>

        <PanelHeader size="sm" />
        <div className="content"> 
          {/*cont*/}
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Student Details</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Student Id",
                          inputProps: {
                            name: "studentID",
                            type: "text",
                            //disabled: true,
                            //defaultValue: "Creative Code Inc."
                            value: this.state.studentID,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Student Name",
                          inputProps: {
                            name:"stdname",
                            type: "text",
                            defaultValue: "",
                             value: this.state.stdname,
                          }
                        },
                        {
                          label: "Home phone",
                          inputProps: {
                            name:"homephone",
                            type: "text",
                            placeholder: "",
                             value: this.state.homephone,
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "Mobile phone",
                          inputProps: {
                            name:"mobilephone",
                            type: "text",
                            placeholder: "",
                            defaultValue: "",
                             value: this.state.mobilephone,
                          }
                        },
                        {
                          label: "email",
                          inputProps: {
                            name:"email",
                            type: "text",
                            placeholder: "",
                            defaultValue: "",
                             value: this.state.email,
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "semester",
                          inputProps: {
                            name:"semester",
                            type: "text",
                            placeholder: "",
                            defaultValue:
                            "",
                             value: this.state.semester,
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                         
                          label: "gpa",
                          inputProps: {
                             name:"gpa",
                            type: "text",
                            defaultValue: "",
                            placeholder: "",
                             value: this.state.gpa,
                          }
                        },
                        {
                          label: "cgpa",
                          inputProps: {
                            name:"cgpa",
                            type: "text",
                            defaultValue: "",
                            placeholder: "",
                             value: this.state.cgpa
                          }
                        },
                        {
                          //label: "",
                          inputProps: {

                          }
                        }
                      ]}
                    />
                    <h3>{this.state.message}</h3>
                    <ButtonGroup className="pull-right">
                      <Button onClick={this.searchstudent}>Search</Button>
                      <Button onClick={this.clearFields}>Clear</Button>
                    </ButtonGroup>
                  </form>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>



        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Employee Register</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Employee ID",
                          inputProps: {
                            name: "empid",
                            type: "text",
                            // disabled: true,
                            //defaultValue: "Enter name"
                            placeholder: "Enter ID",
                            value: this.state.empid,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Employee Name",
                          inputProps: {
                            name: "empname",
                            type: "text",
                            // disabled: true,
                            //defaultValue: "Enter name"
                            placeholder: "Enter name",
                            value: this.state.empname,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Employee Address",
                          inputProps: {
                            name: "empadress",
                            type: "text",
                            //defaultValue: "Enter Address"
                            placeholder: "Enter Address",
                            value: this.state.empadress,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Superviser name",
                          inputProps: {
                            name: "supervisername",
                            type: "text",
                            // defaultValue: "Enter name"
                            placeholder: "Enter name",
                            value: this.state.supervisername,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          name: "supervisertitle",
                          label: "Superviser title",
                          inputProps: {
                            type: "text",
                            placeholder: "Enter title",
                            // defaultValue: "Enter title"
                            value: this.state.supervisertitle,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: " superviser email",
                          inputProps: {
                            name: "superviseremail",
                            type: "text",
                            placeholder: " Enter email",
                            // defaultValue: "Enter email"
                            value: this.state.superviseremail,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: " Superviser phone",
                          inputProps: {
                            name: "superviserphone",
                            type: "text",
                            placeholder: " Enter phone number",
                            //defaultValue:
                            // "Enter phone number.",
                            value: this.state.superviserphone,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: " Start Date",

                          inputProps: {
                            name: "startdate",
                            type: "text",
                            defaultValue: "",
                            placeholder: " startdate",
                            value: this.state.startdate,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "End Date",
                          inputProps: {
                            name: "enddate",
                            type: "text",
                            defaultValue: "",
                            placeholder: "enddate",
                            value: this.state.enddate,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: " Hours",
                          inputProps: {
                            name: "hours",
                            type: "number",
                            placeholder: " hours",
                            value: this.state.hours,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />

                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "  Tasks",
                          inputProps: {
                            name: "tasks",
                            type: "text",
                            // defaultValue: "Enter Tasks",
                            placeholder: "  Enter Tasks",
                            value: this.state.tasks,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: " Learning Things",
                          inputProps: {
                            name: "learningthings",
                            type: "text",
                            // defaultValue: "Enter learning things.",
                            placeholder: "Enter learning things",
                            value: this.state.learningthings,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "External Supervisername",
                          inputProps: {
                            name: "externalsupervisername",
                            type: "text",
                            placeholder: " Enter name",
                            value: this.state.externalsupervisername,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />

                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Date",
                          inputProps: {
                            name: "dateof",
                            type: "text",
                            rows: "4",
                            cols: "80",
                            defaultValue:
                            "",
                            placeholder: "Enter date",
                            value: this.state.dateof,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />
                    <h3>{this.state.message}</h3>
                    <ButtonGroup className="pull-right">
                      <Button onClick={this.RegisterEmployee}>Save</Button>
                      <Button onClick={this.clearFields}>Clear</Button>
                    </ButtonGroup>
                  </form>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </div>
      </div>
    );
  }
}

export default EmployeeReg;
