import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, ButtonGroup } from "reactstrap";

import { PanelHeader, FormInputs } from "components";
import axios from "axios";
class RegStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stdid: null,
      name: null,
      nic: null,
      address: null,
      tel: null,
      company: null,
      intern_position: null,
      intern_duration: null,
      message: null,
      sstdid: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.checkInputs = this.checkInputs.bind(this);
    this.RegisterStudent = this.RegisterStudent.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.clearFieldsOnSubmit = this.clearFieldsOnSubmit.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.Search = this.Search.bind(this);
  }

  // Sets state when a change in a text box occour.
  handleChange({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  // checkInputs(){
  //   console.log(this.state.stdid);
  //   console.log(this.state.nic);
  //   console.log(this.state.address);
  //   console.log(this.state.tel);
  //   console.log(this.state.company);
  //   console.log(this.state.intern_duration);
  //   console.log(this.state.intern_position);
  //   console.log(this.state.message);
  // }

  //Register a student in to the database. 
  RegisterStudent() {
    console.log("inside Regstd");
    axios
      .post("/stddetreg", {
        stdid: this.state.stdid,
        name: this.state.name,
        nic: this.state.nic,
        addr: this.state.address,
        tel: this.state.tel,
        cmpny: this.state.company,
        intrnpos: this.state.intern_position,
        intrndur: this.state.intern_duration,
        stat: true
      }).then((res) => {
        console.log(res.data.message);
        alert(res.data.message);
        this.clearFieldsOnSubmit();
        this.setMessage(res);

      }).catch((err) => {
        console.log(err);
      });

  }

  // Clears the text boxes on the clear button click.
  clearFields() {
    this.setState({
      stdid: "",
      name: "",
      nic: "",
      address: "",
      tel: "",
      company: "",
      intern_position: "",
      intern_duration: "",
      message: "",
      sstdid: null
    });
  };

  // Set the message comming from data bse to the message state 
  setMessage(res) {
    console.log(res.data.message)
    this.setState({
      message: res.data.message
    });
  }

  // search a given student when student id is given.
  Search() {
    alert(this.state.sstdid)
    axios
      .get("/getallstddetreg/" + this.state.sstdid).then((res) => {
        console.log(res.data.record[0]);
        this.setState({
          stdid: res.data.record[0].stdid,
          name: res.data.record[0].name,
          nic: res.data.record[0].nic,
          address: res.data.record[0].address,
          tel: res.data.record[0].tel,
          company: res.data.record[0].company,
          intern_position: res.data.record[0].intern_position,
          intern_duration: res.data.record[0].intern_duration
        })

      }).catch((err) => {
        console.log(err);
      });
  }

  // clears the text boxes after a student registered.
  clearFieldsOnSubmit() {
    console.log("clear");
    this.setState({
      stdid: "",
      name: "",
      nic: "",
      address: "",
      tel: "",
      company: "",
      intern_position: "",
      intern_duration: "",
      message: ""
    });
  };
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Student Details</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <hr></hr>
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1"
                      ]}
                      proprieties={[
                        {
                          label: "Search",
                          inputProps: {
                            name: "sstdid",
                            type: "text",
                            disabled: false,
                            placeholder: "Enter Student ID(ITxxxxxxxx)",
                            value: this.state.sstdid,
                            onChange: this.handleChange
                            //defaultValue: ""
                          }
                        },
                      ]}
                    />
                    <div><ButtonGroup className="pull-left">
                      <Button onClick={this.Search}>Search</Button>
                    </ButtonGroup></div>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "StudentID",
                          inputProps: {
                            name: "stdid",
                            type: "text",
                            disabled: false,
                            placeholder: "SLIIT Student ID(ITxxxxxxxx)",
                            value: this.state.stdid,
                            onChange: this.handleChange
                            //defaultValue: ""
                          }
                        },
                        {
                          label: "Name",
                          inputProps: {
                            name: "name",
                            type: "text",
                            placeholder: "Student Name",
                            value: this.state.name,
                            onChange: this.handleChange
                            //defaultValue: "michael23"
                          }
                        },
                        {
                          label: "NIC",
                          inputProps: {
                            name: "nic",
                            type: "text",
                            placeholder: "Student NIC",
                            value: this.state.nic,
                            onChange: this.handleChange
                            //placeholder: "Email"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Address",
                          inputProps: {
                            name: "address",
                            type: "text",
                            placeholder: "Student Home Address",
                            value: this.state.address,
                            onChange: this.handleChange
                            // defaultValue:
                            //   "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1"]}
                      proprieties={[
                        {
                          label: "Phone Number",
                          inputProps: {
                            name: "tel",
                            type: "text",
                            placeholder: "Student Phone Number",
                            value: this.state.tel,
                            onChange: this.handleChange
                            // defaultValue: "Mike"
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
                          label: "Company",
                          inputProps: {
                            name: "company",
                            type: "text",
                            // defaultValue: "Bucharest",
                            placeholder: "Working Company",
                            value: this.state.company,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Intern Position",
                          inputProps: {
                            name: "intern_position",
                            type: "text",
                            // defaultValue: "Romania",
                            placeholder: "Position",
                            value: this.state.intern_position,
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Intern Duration(Months)",
                          inputProps: {
                            name: "intern_duration",
                            type: "text",
                            placeholder: "Duration in Months",
                            value: this.state.intern_duration,
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />
                    {/* <h3>{this.state.message}</h3> */}
                    <ButtonGroup className="pull-right">
                      <Button onClick={this.RegisterStudent}>Save</Button>
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

export default RegStudent;
