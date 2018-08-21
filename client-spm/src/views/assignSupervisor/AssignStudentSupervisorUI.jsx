import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Radio,Table } from "reactstrap";
import { PanelHeader, FormInputs } from "components";

import { stud_perfomance, wrk_hbts } from "../../variables/var_i5";
class AssignStudentSupervisorUI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            student_list: [],
            supervisor_list:[],
            studentId:null,
            supervisorId:null,
            studentName: null,
            supervisorName: null,


            /*
            empName: "",
            supervisorName: "",
            descrip_work_diff: "",
            descrip_positive_pc: "",
            descrip_pc_hep_pd: "",
            descrip_effective_for_org_intern: "",
            descrip_sugst_ip: "",
            descrip_comnt_frm_org: "",
            descrip_comnt_frm_org_fac_advsr: ""*/
        };

        // this.handleChange = this.handleChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(event) {
        this.setState({ studentId: event.target.value });
    }
    onSupervisorSelectChange(event) {
        this.setState({ supervisorId: event.target.value });
    }






    render() {
        return (
            <div>
                <PanelHeader size="sm" />
                <div className="content">
                    {/* ********************** Row one *********************** */}
                    <Row>
                    <Col md={6} xs={12}>
                            <Card>
                                <div className="card-content">
                                    <CardHeader>
                                    <h5 className="title">Student Details</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleSelect">Select Student ID</Label>
                                                <Input
                                                    type="select"
                                                    name="student"
                                                    id="selectStudent"
                                                    onChange={this.onSelectChange.bind(this)}
                                                    value={this.state.studentId}
                                                >
                                                    <option value="">Select Student</option>
                                                    <option value="Nadun">Nadun Sirimevan</option>
                                                    <option value="Mia">Mia</option>
                                                </Input>
                                                <br />
                                                <Button color="info" size="lg">
                                                    View Student Details
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                        <Form inline>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Student Name
                                                </Label>
                                                <Col sm={10}>
                                                    <Input
                                                        type="text"
                                                        name="empName"
                                                        placeholder=" "

                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Student Email
                                                </Label>
                                                <Col sm={10}>
                                                    <Input
                                                        type="text"
                                                        name="empName"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} xs={5} className="mr-sm-2">
                                                    Mobile phone
                                                </Label>
                                                <Col sm={10}>
                                                    <Input
                                                        type="text"
                                                        name="supervisorName"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Semester
                                                </Label>
                                                <Col sm={10}>
                                                    <Input
                                                        type="text"
                                                        name="empName"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Student GPA
                                                </Label>
                                                <Col sm={10}>
                                                    <Input
                                                        type="text"
                                                        name="empName"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6} xs={12}>
                            <Card>
                                <div className="card-content">
                                    <CardHeader>
                                        <h5 className="title">Supervisor Details</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleSelect">Select Supervisor ID</Label>
                                                <Input
                                                    type="select"
                                                    name="supervisor"
                                                    id="selectSupervisor"
                                                    onChange={this.onSupervisorSelectChange.bind(this)}
                                                    value={this.state.supervisorId}
                                                >
                                                    <option value="">Select Supervisor</option>
                                                    <option value="Nadun">Nadun Sirimevan</option>
                                                    <option value="Mia">Mia</option>
                                                </Input>
                                                <br />
                                                <Button color="info" size="lg">
                                                    View  Supervisor Details
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                        <Form inline>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Supervisor Name
                                                </Label>
                                                <Col sm={12}>
                                                    <Input
                                                        type="text"
                                                        name="supName"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Supervisor Title
                                                </Label>
                                                <Col sm={12}>
                                                    <Input
                                                        type="text"
                                                        name="supervisorName"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Label sm={2} className="mr-sm-2">
                                                    Assigned Project
                                                </Label>
                                                <Col sm={12}>
                                                    <Input
                                                        type="text"
                                                        name="supProject"
                                                        placeholder=""

                                                    />
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <div className="card-content">
                                    <CardHeader>
                                        <h5 className="title">Assign Supervisor</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Table responsive>
                                                    <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>StudentID</th>
                                                        <th>SupervisorID</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><Input
                                                            type="select"
                                                            name="student"
                                                            id="selectStudent"
                                                            onChange={this.onSelectChange.bind(this)}
                                                            value={this.state.studentId}
                                                        >
                                                            <option value="">Select Student ID</option>
                                                            <option value="Nadun">Nadun Sirimevan</option>
                                                            <option value="Mia">Mia</option>
                                                        </Input></td>

                                                        <td><Input
                                                            type="select"
                                                            name="student"
                                                            id="selectStudent"
                                                            onChange={this.onSelectChange.bind(this)}
                                                            value={this.state.studentId}
                                                        >
                                                            <option value="">Select Supervisor ID</option>
                                                            <option value="Nadun">Nadun Sirimevan</option>
                                                            <option value="Mia">Mia</option>
                                                        </Input></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>

                                                <br />
                                                <Button color="info" size="lg">
                                                    Assign Student Supervisor
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                        <Form inline>





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

export default AssignStudentSupervisorUI;
