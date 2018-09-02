import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader, FormInputs } from "components";
class Diaryview extends React.Component {
    render() {
        return (
            <div>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col md={8} xs={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Intern's Daily Diary</h5>
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

                                                    label: "Student ID",
                                                    inputProps: {
                                                        type: "text",
                                                        //disabled: true,
                                                        defaultValue: ""
                                                    }
                                                },
                                                {
                                                    label: "Intern's name",
                                                    inputProps: {
                                                        type: "text",
                                                        defaultValue: ""
                                                    }
                                                },
                                                {
                                                    label: "Intern's private address",
                                                    inputProps: {
                                                        type: "text",
                                                        placeholder: ""
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                                            proprieties={[
                                                {
                                                    label: "Contact number",
                                                    inputProps: {
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue: ""
                                                    }
                                                },
                                                {
                                                    label: "Email addresses",
                                                    inputProps: {
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue: ""
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            proprieties={[
                                                {
                                                    label: "Internship title",
                                                    inputProps: {
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue:
                                                        ""
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
                                                    label: "Specialization",
                                                    inputProps: {
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: ""
                                                    }
                                                },
                                                {
                                                    label: "Overall Internship period from",
                                                    inputProps: {
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: ""
                                                    }
                                                },
                                                {
                                                    label: "Period to",
                                                    inputProps: {
                                                        type: "text",
                                                        placeholder: ""
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            proprieties={[
                                                {
                                                    // label: "About Me",
                                                    inputProps: {
                                                        type: "textarea",
                                                        rows: "4",
                                                        cols: "80",
                                                        defaultValue:
                                                        "",
                                                        placeholder: ""
                                                    }
                                                }
                                            ]}
                                        />
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={12} xs={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Internal Training Information</h5>
                                </CardHeader>
                                <CardBody>
                                    <table>
                                        <thread>
                                            <tr>
                                                <th>Training Party</th>
                                                <th>Training Desription</th>
                                                <th>From</th>
                                                <th>To</th>

                                            </tr>
                                        </thread>
                                    </table>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                </div>
            </div>
        );
    }
}

export default Diaryview;
