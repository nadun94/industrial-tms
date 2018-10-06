import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, ButtonGroup } from "reactstrap";

import { PanelHeader, FormInputs } from "components";
import axios from "axios";

//used for give null values to the ststes of text boxes.
class Diaryview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            studentid: null,
            empname: null,
            empadress: null,
            contactnumber: null,
            emailadress: null,
            internshiptitle: null,
            specialization: null,
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

//post student id and get data as ajson file and map them in to text boxses using setsates.
    searchstudent() {
        console.log(this.state.studentid);
        axios
            .post("/internaltrainingsearch", {

                studentid: this.state.studentid,
                stat: true

            }).then((res) => {
                // console.log(res.data.user.stdname);
                console.log(res)
                res.data.user.map((data) => {
                    console.log(data.empname);
                    this.setState({

                        empname: data.empname,
                        empadress: data.emailadress,
                        contactnumber: data.contactnumber,
                        emailadress: data.emailadress,
                        internshiptitle: data.internshiptitle,
                        specialization: data.specialization,
                        from: data.from,
                        to: data.to,
                        TrainingParty: data.TrainingParty,
                        description: data.description,
                        fromd: data.fromd,
                        tod: data.tod,


                    });
                });

            }).catch((err) => {
                console.log(err);
            });

    }



    clearFields() {
        this.setState({

            studentid: "",
            empname: "",
            empadress: "",
            contactnumber: "",
            emailadress: "",
            internshiptitle: "",
            specialization: "",
            from: "",
            to: "",
            TrainingParty: "",
            description: "",
            fromd: "",
            tod: "",

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

//return html process.
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
                                                        name: "studentid",
                                                        type: "text",
                                                        //disabled: true,
                                                        //defaultValue: "Creative Code Inc."
                                                        value: this.state.studentid,
                                                        onChange: this.handleChange
                                                    }
                                                },
                                                {
                                                    label: "Interns Name",
                                                    inputProps: {
                                                        name: "empname",
                                                        type: "text",
                                                        defaultValue: "",
                                                        value: this.state.empname,
                                                    }
                                                },
                                                {
                                                    label: "Interns Address",
                                                    inputProps: {
                                                        name: "empadress",
                                                        type: "text",
                                                        placeholder: "",
                                                        value: this.state.empadress,
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
                                                        name: "contactnumber",
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue: "",
                                                        value: this.state.contactnumber,
                                                    }
                                                },
                                                {
                                                    label: "email",
                                                    inputProps: {
                                                        name: "emailadress",
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue: "",
                                                        value: this.state.emailadress,
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            proprieties={[
                                                {
                                                    label: "internshiptitle",
                                                    inputProps: {
                                                        name: "internshiptitle",
                                                        type: "text",
                                                        placeholder: "",
                                                        defaultValue:
                                                        "",
                                                        value: this.state.internshiptitle,
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={[
                                                "col-md-4 pr-1",
                                                "col-md-4 px-1",
                                                "col-md-4 pl-1",
                                                 "col-md-4 pl-1",
                                                  "col-md-4 pl-1",
                                                   "col-md-4 pl-1"
                                            ]}
                                            proprieties={[
                                                {

                                                    label: "specialization",
                                                    inputProps: {
                                                        name: "specialization",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.specialization,
                                                    }
                                                },
                                                {
                                                    label: "from",
                                                    inputProps: {
                                                        name: "from",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.from
                                                    }
                                                },
                                                {
                                                    label: "TrainingParty",
                                                    inputProps: {
                                                        name: "TrainingParty",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.TrainingParty
                                                    }
                                                },
                                                {
                                                    label: "description",
                                                    inputProps: {
                                                        name: "description",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.description
                                                    }
                                                },
                                                {
                                                    label: "fromd",
                                                    inputProps: {
                                                        name: "fromd",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.fromd
                                                    }
                                                },
                                                {
                                                    label: "tod",
                                                    inputProps: {
                                                        name: "tod",
                                                        type: "text",
                                                        defaultValue: "",
                                                        placeholder: "",
                                                        value: this.state.tod
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
