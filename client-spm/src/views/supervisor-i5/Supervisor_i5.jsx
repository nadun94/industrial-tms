import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Radio } from "reactstrap";
import { PanelHeader, FormInputs } from "components";

import { stud_perfomance, wrk_hbts } from "../../variables/var_i5";
class Supervisor_i5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_list: [],
      student: null,
      empName: "",
      supervisorName: "333",
      descrip_work_diff: "232",
      descrip_positive_pc: "7657",
      descrip_pc_hep_pd: "7567",
      descrip_effective_for_org_intern: "7567",
      descrip_sugst_ip: "7567",
      descrip_comnt_frm_org: "",
      descrip_comnt_frm_org_fac_advsr: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event) {
    this.setState({ student: event.target.value });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          {/* ********************** Row one *********************** */}
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
                          name="student"
                          id="exampleSelect"
                          onChange={this.onSelectChange.bind(this)}
                          value={this.state.student}
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
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="card-content">
                      <Form row>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_work_diff"
                              placeholder="Enter here"
                              value={this.state.descrip_work_diff}
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
                                    name="radio1"
                                    value="Above Average"
                                  />{" "}
                                  Above Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="radio1"
                                    value="Average"
                                  />{" "}
                                  Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="radio1"
                                    value="Below Average"
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
                                    name="radio1"
                                    value="Above Average"
                                  />{" "}
                                  Above Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="radio1"
                                    value="Average"
                                  />{" "}
                                  Average
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="radio1"
                                    value="Below Average"
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
                      <Form row>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_positive_pc"
                              placeholder="Enter here"
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
                      <Form row>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_pc_hep_pd"
                              placeholder="Enter here"
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
                      <Form row>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_sugst_ip"
                              placeholder="Enter here"
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
                      <Form row>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_comnt_frm_org"
                              placeholder="Enter here"
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
                      <Form row>
                        <FormGroup className="card-content">
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="descrip_comnt_frm_org_fac_advsr"
                              placeholder="Enter here"
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
                                name="radio1"
                                value="Outstanding"
                              />{" "}
                              Outstanding
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                value="Very Good"
                              />{" "}
                              Very Good
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio1" value="Good" />{" "}
                              Good
                            </Label>
                          </FormGroup>
                        </Form>
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
