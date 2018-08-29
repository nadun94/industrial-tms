import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Radio } from "reactstrap";
import { PanelHeader, FormInputs } from "components";
import axios from "axios";
import { stud_perfomance, wrk_hbts } from "../../variables/var_i5";

class Supervisor_i5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_list: [],
      student_name: "",
      studentID: "IT1610856",
      empName: "Pearson",
      supervisorName: "Hatangala",
      descrip_work_diff: "",
      descrip_positive_pc: "",
      descrip_pc_hep_pd: "",
      descrip_effective_for_org_intern: "",
      descrip_sugst_ip: "",
      overall_perf: null,
      descrip_comnt_frm_org: "",
      descrip_comnt_frm_org_fac_advsr: "",
      status_perfomance: [],
      radio_perf_temp_1: [],
      comment_perf_temp_1: [],
      perfom_atrribure_1: [],
      radio_perf_temp_2: [],
      comment_perf_temp_2: [],
      perfom_atrribure_2: [],
      work_habbit_obj: [{}],
      perm_obj: [{}],
      obj_perfrormance: [],
      obj_work_habbit: [],
      data_insert_message: 'fsdfs',
      data_insert_status: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.handle_nested_tables = this.handle_nested_tables.bind(this);
    this.Fill_supervisor_form_i5 = this.Fill_supervisor_form_i5.bind(this);
    this.radio_overall_perfomance = this.radio_overall_perfomance.bind(this);

    this.toggle = this.toggle.bind(this);
  }


  componentDidMount() {
    this.setState({ perfom_atrribure_1: stud_perfomance });
    this.setState({ perfom_atrribure_2: wrk_hbts });
  }
  async handle_nested_tables() {
    await this.state.perm_obj.push(
      this.state.perfom_atrribure_1,
      this.state.radio_perf_temp_1,
      this.state.comment_perf_temp_1
    );
    await this.state.work_habbit_obj.push(
      this.state.perfom_atrribure_2,
      this.state.radio_perf_temp_2,
      this.state.comment_perf_temp_2
    );

    for (var i = 0; i < this.state.perfom_atrribure_1.length; i++) {
      this.state.obj_perfrormance.push({
        category: this.state.perm_obj[1][i],
        status: this.state.perm_obj[2][i],
        comment: this.state.perm_obj[3][i]
      });

      if (i > 7) {

      } else {
        this.state.obj_work_habbit.push({
          category: this.state.work_habbit_obj[1][i],
          status: this.state.work_habbit_obj[2][i],
          comment: this.state.work_habbit_obj[3][i]
        });
      }
    }
  }

  async Fill_supervisor_form_i5() {
    await this.handle_nested_tables();

    var self = this;
    axios
      .post("/fill-formI5_supervisor", {
        studentID: this.state.studentID,
        student_name: this.state.student_name,
        employer_name: this.state.empName,
        supervisor_name: this.state.supervisorName,
        descrip_work_diff: this.state.descrip_work_diff,
        student_performance: this.state.obj_perfrormance,
        student_work_habits: this.state.obj_work_habbit,
        descrip_positive_pc: this.state.descrip_positive_pc,
        descrip_pc_hep_pd: this.state.descrip_pc_hep_pd,
        descrip_effective_for_org_intern: this.state
          .descrip_effective_for_org_intern,
        descrip_sugst_ip: this.state.descrip_sugst_ip,
        descrip_comnt_frm_org: this.state.descrip_comnt_frm_org,
        descrip_comnt_frm_org_fac_advsr: this.state
          .descrip_comnt_frm_org_fac_advsr,
        overall_perf: this.state.overall_perf

      })
      .then( function (res) {

        alert( res.data.message)
        // self.setState({ data_insert_message: res.data.message });
        // self.setState({ data_insert_status: true });
        console.log(res.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //   //text box handling for student performance
  handleClick(index, event) {
    let a = this.state.comment_perf_temp_1.slice();
    a[index] = event.target.value;
    this.setState({ comment_perf_temp_1: a });
    //  console.log(this.state.comment_perf_temp_1)
  }
  //text box handling for student work habbits
  handleClick_2(index, event) {
    let a = this.state.comment_perf_temp_2.slice();
    a[index] = event.target.value;
    this.setState({ comment_perf_temp_2: a });
  }
  onSelectChange(event) {
    this.setState({ student_name: event.target.value });
  }
  //toggling message box
  toggle() {
    this.setState({
      modal: this.state.data_insert_status
    });
  }
  // for student performance radio button data extraction
  radio_std_perform(index, event) {
    let a = this.state.radio_perf_temp_1.slice();

    if (event.target.value === "Above Average") {
      a[index] = "Above Average";
    } else if (event.target.value === "Average") {
      a[index] = "Average";
    } else if (event.target.value === "Below Average") {
      a[index] = "Below Average";
    }
    this.setState({ radio_perf_temp_1: a });
  }

  // for student habbit radio button data extraction
  radio_std_work_habbit(index, event) {
    let a = this.state.radio_perf_temp_2.slice();

    if (event.target.value === "Above Average") {
      a[index] = "Above Average";
    } else if (event.target.value === "Average") {
      a[index] = "Average";
    } else if (event.target.value === "Below Average") {
      a[index] = "Below Average";
    }
    this.setState({ radio_perf_temp_2: a });
  }
  //for overall performance of student
  radio_overall_perfomance(event) {
    var temp;
    if (event.target.value === "Outstanding") {
      temp = "Outstanding";
      // this.setState({ overall_perf: "Outstanding" });
    } else if (event.target.value === "Very Good") {
      // this.setState({ overall_perf: "Very Good" });
      temp = "Very Good";
    } else if (event.target.value === "Good") {
      // this.setState({ overall_perf: "Good" });
      temp = "Good";
    } else if (event.target.value === "Marginal") {
      // this.setState({ overall_perf: "Marginal" });
      temp = "Marginal";
    } else if (event.target.value === "Unsatisfactory") {
      // this.setState({ overall_perf: "Unsatisfactory" });
      temp = "Unsatisfactory";
    }
    this.setState({ overall_perf: temp });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          {/* ********************** Row one *********************** */}
          <Modal isOpen={this.state.data_insert_status} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <h7>{this.state.data_insert_message}</h7>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={!this.state.data_insert_status}>Okay</Button>{' '}
            </ModalFooter>
          </Modal>
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">Select Student</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Label for="exampleSelect">Select Student</Label>
                        <Input
                          type="select"
                          name="student_name"
                          id="exampleSelect"
                          onChange={this.onSelectChange.bind(this)}
                          value={this.state.student_name}
                        >
                          <option value="">Select Student</option>
                          <option value="Nadun">Nadun Sirimevan</option>
                          <option value="Mia">Mia</option>
                        </Input>
                        <br />
                        <Button color="info" size="lg">
                          Search
                        </Button>
                      </FormGroup>
                    </Form>
                    <Form inline>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label sm={2} className="mr-sm-2">
                          Employer Name
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="text"
                            name="empName"
                            placeholder="Employer Name"
                            value={this.state.empName}
                            onChange={this.handleChange}
                            disabled
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label sm={2} className="mr-sm-2">
                          Supervisor Name
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="text"
                            name="supervisorName"
                            placeholder="Supervisor Name"
                            disabled
                            value={this.state.supervisorName}
                            onChange={this.handleChange}
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row two *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      Describe the differences, if any, between student's
                      initial contract and actual assignment which developed
                      {this.state.descrip_work_diff}
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_work_diff"
                              placeholder="Enter here"
                              value={this.state.descrip_work_diff}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row Three - rdio  *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">Performance of Student</h5>
                  </CardHeader>
                  <CardBody>
                    {/* {this.studentPerformanceRecord()} */}
                    {stud_perfomance.map((item, key) => {
                      return (
                        <Form inline>
                          <Col xs="3">
                            <h7>{item}</h7>
                          </Col>
                          <Col xs="auto">
                            <Form inline>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name={"radio1" + key}
                                    value="Above Average"
                                    onChange={this.radio_std_perform.bind(
                                      this,
                                      key
                                    )}
                                  />{" "}
                                  Above Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name={"radio1" + key}
                                    value="Average"
                                    onChange={this.radio_std_perform.bind(
                                      this,
                                      key
                                    )}
                                  />{" "}
                                  Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name={"radio1" + key}
                                    value="Below Average"
                                    onChange={this.radio_std_perform.bind(
                                      this,
                                      key
                                    )}
                                  />{" "}
                                  Below Average
                                </Label>
                              </FormGroup>
                            </Form>
                          </Col>
                          <Col sm="2" md={{ size: 4, offset: 1 }}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                              <Input
                                type="text"
                                name="comment_2"
                                placeholder=" Comments, Examples"
                                bsSize="large"
                                id={key}
                                onChange={this.handleClick.bind(this, key)}
                              />
                            </FormGroup>
                          </Col>
                          <br />
                        </Form>
                      );
                    })}

                    {/* --------------------------------------------------------------------------------------------------------------------- */}
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row four *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">Work Habbits of Student</h5>
                  </CardHeader>
                  <CardBody>
                    {wrk_hbts.map((item, key) => {
                      return (
                        <Form inline>
                          <Col xs="3">
                            <h7>{item}</h7>
                          </Col>
                          <Col xs="auto">
                            <Form inline>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name={"radio2" + key}
                                    value="Above Average"
                                    onChange={this.radio_std_work_habbit.bind(
                                      this,
                                      key
                                    )}
                                  />{" "}
                                  Above Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name={"radio2" + key}
                                    value="Average"
                                    onChange={this.radio_std_work_habbit.bind(
                                      this,
                                      key
                                    )}
                                  />{" "}
                                  Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name={"radio2" + key}
                                    value="Below Average"
                                    onChange={this.radio_std_work_habbit.bind(
                                      this,
                                      key
                                    )}
                                  />{" "}
                                  Below Average
                                </Label>
                              </FormGroup>
                            </Form>
                          </Col>
                          <Col sm="2" md={{ size: 4, offset: 1 }}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                              <Input
                                type="text"
                                name="comment"
                                placeholder=" Comments, Examples"
                                bsSize="large"
                                id={key}
                                onChange={this.handleClick_2.bind(this, key)}
                              />
                            </FormGroup>
                          </Col>
                          <br />
                        </Form>
                      );
                    })}
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row Five *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      List positive personal characteristics (Business Acumen,
                      Vigor, Adaptability, Teamwork, Leadership, Confidence,
                      etc.)
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_positive_pc"
                              placeholder="Enter here"
                              onChange={this.handleChange}
                              value={this.state.descrip_positive_pc}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row six *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      List personal characteristics that will help the student
                      in his/her professional development
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_pc_hep_pd"
                              placeholder="Enter here"
                              value={this.state.descrip_pc_hep_pd}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row x *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      How effective has the Internship Program been in meeting
                      the needs of your organization?
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_effective_for_org_intern"
                              placeholder="Enter here"
                              value={
                                this.state.descrip_effective_for_org_intern
                              }
                              onChange={this.handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row seven *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      Please suggest ways you feel we could make our program
                      more meaningful to the student and you, the employer.
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_sugst_ip"
                              placeholder="Enter here"
                              value={this.state.descrip_sugst_ip}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>

          {/* ********************** Row Eight *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      Please comment on the appropriateness of the student's
                      academic training as it related to a position in your
                      organization.
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_comnt_frm_org"
                              placeholder="Enter here"
                              value={this.state.descrip_comnt_frm_org}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row Eight *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">
                      Any other comments about the student or on the Faculty
                      Advisor..
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_comnt_frm_org_fac_advsr"
                              placeholder="Enter here"
                              value={this.state.descrip_comnt_frm_org_fac_advsr}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
          {/* ********************** Row nine *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">Overall student performance</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      {/* <Form row> */}

                      <Col xs="auto">
                        <Form inline>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio3"
                                value="Outstanding"
                                onChange={this.radio_overall_perfomance}
                              />{" "}
                              Outstanding
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio3"
                                value="Very Good"
                                onChange={this.radio_overall_perfomance}
                              />{" "}
                              Very Good
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio3"
                                value="Good"
                                onChange={this.radio_overall_perfomance}
                              />{" "}
                              Good
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio3"
                                value="Marginal"
                                onChange={this.radio_overall_perfomance}
                              />{" "}
                              Marginal
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio3"
                                value="Unsatisfactory"
                                onChange={this.radio_overall_perfomance}
                              />{" "}
                              Unsatisfactory
                            </Label>
                          </FormGroup>
                        </Form>
                        <Button
                          color="info"
                          size="lg"
                          onClick={this.Fill_supervisor_form_i5}
                        >
                          Save Form
                        </Button>
                      </Col>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Supervisor_i5;
