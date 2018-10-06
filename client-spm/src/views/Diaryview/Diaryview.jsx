import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, ButtonGroup } from "reactstrap";

import { PanelHeader, FormInputs } from "components";
import axios from "axios";
class Diaryview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentid: null,
            empname: null,
            empadress: null,
            contactnumber: null,
            emailadress: null,
            from: null,
            to: null,
            TrainingParty: null,
            description: null,
            fromd: null,
            tod: null,



        };
        this.searchstudent = this.searchstudent.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        console.log(this.state.studentid);
        console.log("search student");
        axios
            .post("/internaltrainingsearch", {

                studentid: this.state.studentid,
                stat: true
            }).then((res) => {
                // console.log(res.data.user.stdname);
                res.data.user.map((data) => {
                   
                    this.setState({

                        empname: data.empname,
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
                                                        name: "stdname",
                                                        type: "text",
                                                        defaultValue: "",
                                                        value: this.state.stdname,
                                                    }
                                                },
                                                {
                                                    label: "Home phone",
                                                    inputProps: {
                                                        name: "homephone",
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
                                                        name: "mobilephone",
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue: "",
                                                        value: this.state.mobilephone,
                                                    }
                                                },
                                                {
                                                    label: "email",
                                                    inputProps: {
                                                        name: "email",
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
                                                        name: "semester",
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
                                                        name: "gpa",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.gpa,
                                                    }
                                                },
                                                {
                                                    label: "cgpa",
                                                    inputProps: {
                                                        name: "cgpa",
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
            </div>
        );
    }
}

export default Diaryview;
