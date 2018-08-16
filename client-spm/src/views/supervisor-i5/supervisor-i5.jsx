import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Radio } from "reactstrap";
import { PanelHeader, FormInputs } from "components";
class Supervisor_i5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_list: [],
      student: null,
      empName: "",
      supervisorName: "",
      descrip_work_diff: ""
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
            <Col md={9} xs={12}>
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
          {/* ********************** Row Three *********************** */}
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">Performance of Student</h5>
                  </CardHeader>
                  <CardBody>
                    <Form inline>

                      <FormGroup tag="fieldset" inline>
                      <legend>Radio Butto </legend>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />{" "} Above Average
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" /> {" "}Average
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />{" "} Below Average

                            </Label>
                        </FormGroup>
                      </FormGroup>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label sm={2} className="mr-sm-2">
                          Comments, Examples, Observations
                          </Label>
                        <Col sm={10}>
                          <Input
                            type="text"
                            name="comment"
                            placeholder="comment"
                          />
                        </Col>
                      </FormGroup>

                    </Form>
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
