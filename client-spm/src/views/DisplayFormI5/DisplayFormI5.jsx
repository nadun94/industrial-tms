import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Radio,Table } from "reactstrap";
import { PanelHeader, FormInputs } from "components";

import { stud_perfomance, wrk_hbts } from "../../variables/var_i5";
class DisplayFormI5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            student_list: [],
            student: null,
            empName: "",
            supervisorName: "",
            descrip_work_diff: "",
            descrip_positive_pc: "",
            descrip_pc_hep_pd: "",
            descrip_effective_for_org_intern: "",
            descrip_sugst_ip: "",
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
                        <Col md={20} xs={12}>
                            <Row>
                                <Card>
                                <div className="card-content">
                                    <CardHeader>
                                        <h5 className="title">Final Evaluation of Internship Student</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="selectStudent">Select Student</Label>
                                                <Input
                                                    type="select"
                                                    name="student"
                                                    id="selectStudent"
                                                    onChange={this.onSelectChange.bind(this)}
                                                    value={this.state.student}
                                                >
                                                    <option value="">Select Student ID</option>
                                                    <option value="1">IT16485630</option>
                                                    <option value="Mia">Mia</option>
                                                </Input>
                                                <br />
                                                <Button color="info" size="lg">
                                                    View Evaluation form
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </div>
                            </Card>
                            </Row>

                            <Row>
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                          <h5 className="title">Basic Student Record</h5>
                                        </CardHeader>
                                        <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Table responsive>
                                                    <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Student ID</th>
                                                        <th>Student Name</th>
                                                        <th>Supervisor ID</th>
                                                        <th>Supervisor Name</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </FormGroup>
                                        </Form>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Row>

                                <br />
                            <Row>
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">Contract Differences</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Form>
                                                <FormGroup>
                                                    <Input
                                                        type="textarea"
                                                        name="contractDiff"
                                                        id="contractDiff"
                                                        placeholder=" "
                                                    />
                                                </FormGroup>
                                                <br/>
                                            </Form>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">Performance of Student</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Form>
                                                <FormGroup>
                                                <Table responsive>
                                                    <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Evaluation Category</th>
                                                        <th>Evaluation</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr><th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr><th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr><th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr><th scope="row">1</th>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Row>

                            <br/>
                            <Row>
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                        <h5 className="title">Work Habits of Studentt</h5>
                                        </CardHeader>
                                        <CardBody>
                                    <Form>
                                    <FormGroup>
                                        <Table responsive><thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Evaluation Category</th>
                                            <th> Evaluation</th>
                                        </tr>
                                        </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </FormGroup>
                                    </Form>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Row>
                         <br/>
                            <Row>
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">Descriptive Evaluations</h5>
                                        </CardHeader>
                                        <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label><h5 className="title">positive personal characteristics</h5>
                                            </Label>
                                            <Input
                                                type="textarea"
                                                name="contractDiff"
                                                id="contractDiff"
                                                placeholder=" "
                                            />
                                        </FormGroup>
                                        <br/>
                                        <FormGroup>
                                            <Label><h5 className="title">personal characteristics to enhance student professional development</h5>
                                            </Label>
                                            <Input
                                                type="textarea" name="contractDiff"
                                                id="contractDiff"
                                                placeholder=" "
                                            />
                                        </FormGroup>
                                        <br/>
                                        <FormGroup>
                                            <Label><h5 className="title">Suggestions to improve internship program</h5>
                                            </Label>
                                            <Input
                                                type="textarea"
                                                name="suggestionsToImprove"
                                                id="suggestionsToImprove"
                                                placeholder=" "
                                            />
                                        </FormGroup>
                                        <br/>
                                        <FormGroup>
                                            <Label><h5 className="title">appropriateness of the student's
                                                academic training as it related to a position in organization</h5>
                                            </Label>
                                            <Input
                                                type="textarea"
                                                name="appropriate"
                                                id="appropriate"
                                                placeholder=" "
                                            />
                                        </FormGroup>
                                        <br/>
                                        <FormGroup>
                                            <Label><h5 className="title">other comments about the student or on the Faculty Advisor</h5>
                                            </Label>
                                            <Input
                                                type="textarea"
                                                name="otherComments"
                                                id="otherComments"
                                                placeholder=" "
                                            ></Input>
                                        </FormGroup>
                                        <br/>
                                        <FormGroup>
                                            <Label><h5>Overall Student Performance</h5></Label>
                                            <Input type="text"
                                                   name="overallPerformance"
                                                   id="overallPerformance">
                                            </Input>
                                        </FormGroup>
                                    </Form>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </div>
                </div>

            );
    }
}

export default DisplayFormI5;
