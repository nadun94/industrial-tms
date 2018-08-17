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
                        <Col md={8} xs={12}>
                            <Card>
                                <div className="card-content">
                                    <CardHeader>
                                        <h5 className="title">Final Evaluation of Internship Student</h5>
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
                                        <Form inline>

                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Row>
                                                <Label sm={2} className="mr-sm-2">
                                                    Employer Name
                                                </Label>
                                            <Input
                                                type="text"
                                                name="empName"
                                                placeholder="Employer Name"
                                                disabled
                                                    />
                                                </Row>
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


                </div>
            </div>
        );
    }
}

export default Supervisor_i5;
