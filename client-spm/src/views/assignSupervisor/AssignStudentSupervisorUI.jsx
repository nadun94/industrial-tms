import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Radio,Table } from "reactstrap";
import { PanelHeader, FormInputs } from "components";
import axios from 'axios';
import { stud_perfomance, wrk_hbts } from "../../variables/var_i5";
class AssignStudentSupervisorUI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            student_list: [],
            supervisor_list:[],
            studentId:null,
            supervisorId:22,
            studentName: null,
            supervisorName: null,
            assignId:null,
            StudentEmail:"",
            semester:"",
            Mobilephone:"",
            gpa:"",
            SupervisorTitle:"",
            AssignedProject:"",
            opt1:'',
            stID:"",
            supID:"",
            assID:""



        };

        // this.handleChange = this.handleChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSupervisorSelectChange=this.onSupervisorSelectChange.bind(this);
        this.addDetails=this.addDetails.bind(this);
    }

    addDetails() {



        var self = this;
        console.log("axios");

        axios.post("/assignsupervisor", {

            studentId: this.state.studentId,
            supervisorId: this.state.supervisorId,
            assignId:this.state.assignId


        })
            .then(res => {
                this.setState({ message: res.data.message })

                console.log(res);
                console.log(res.data);
                console.log("saved!")

            })
    }


    SearchSuper(){
           axios.post("/getsupervisor",{

               supervisorId: this.state.supervisorId,
                    stat: true
                }).then((res) => {
                // console.log(res.data.user.stdname);
                res.data.user.map((data) => {

                    this.setState({

                        supervisorId:this.state.supervisorId,
                        supervisorName: this.state.supervisorName,
                        SupervisorTitle:this.state.SupervisorTitle,
                        AssignedProject:this.state.AssignedProject
                    });
                });

            }).catch((err) => {
                console.log(err);
            });

        }


    SearchStudent(){

        axios.post("/getstudent",{

            studentId: this.state.studentId,
            stat: true
        }).then((res) => {
            // console.log(res.data.user.stdname);
            res.data.user.map((data) => {

                this.setState({

                    studentId:this.state.supervisorId,
                    studentName: this.state.studentName,
                    StudentEmail:this.state.StudentEmail,
                    semester:this.state.semester,
                    Mobilephone:this.state.Mobilephone,
                    gpa: this.state.gpa,
                    StudentEmail:this.state.StudentEmail,
                    semester:this.state.semester

                });
            });

        }).catch((err) => {
            console.log(err);
        });

    }

    onSelectChange(event) {
        this.setState({ studentId: event.target.value });
    }
    onSupervisorSelectChange(event) {
        this.setState({ supervisorId: event.target.value });
    }

//
    componentDidMount(){

        var self = this;
        fetch('/getallstudentlist')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                self.setState({ student_list: data["studentID:"] })
                console.log(this.state.student_list);
            })
            .catch((err) => {
                console.log(err)
            })

        fetch('/getallsupervisorslist')
            .then(res => res.json())
            .then(data => {
                self.setState({ supervisor_list: data["supervisorId"] })
            })
            .catch((err) => {
                console.log(err)
            })


    //
        let temp = this.state.student_list.map((item, key) => [
            <option value={item.stdid}>{item.stdid}</option>
        ])
        this.setState({ studentId: temp })

        let temp2 = this.state.supervisor_list.map((item, key) => [
            <option value={item.supervisorId}>{item.supervisorId}</option>
        ])
        this.setState({ supervisorId: temp2 })


    //


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
                                                    type="text"
                                                    name="student"
                                                    id="selectStudent"
                                                   // onChange={this.onSelectChange.bind(this)}
                                                    value={this.state.studentId}
                                                >
                                                    {this.state.studentId}
                                                    </Input>
                                                <br />
                                                <Button color="info" size="lg" onClick={this.SearchStudent}>
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
                                                        name="studentName"
                                                        placeholder=" "
                                                        value={this.state.studentName}
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
                                                        name="StudentEmail"
                                                        placeholder=""
                                                        value={this.state.StudentEmail}

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
                                                        name="Mobilephone"
                                                        placeholder=""
                                                        value={this.state.Mobilephone}
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
                                                        name="semester"
                                                        placeholder=""
                                                        value={this.state.semester}

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
                                                        name="gpa"
                                                        placeholder=""
                                                        value={this.state.gpa}
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
                                                    type="text"
                                                    name="supervisor"
                                                    id="selectSupervisor"
                                                    //onChange={this.onSupervisorSelectChange.bind(this)}
                                                    value={this.state.supervisorId}
                                                >

                                                </Input>
                                                <br />
                                                <Button color="info" size="lg" onClick={this.SearchSuper}>
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
                                                        name="supervisorName"
                                                        placeholder=""
                                                        value={this.state.supervisorName}
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
                                                        name="SupervisorTitle"
                                                        placeholder=""
                                                        value={this.state.SupervisorTitle}
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
                                                        value={this.state.AssignedProject}

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
                                        <div className="row">
                                            <div className="col-md-5">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Student ID
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="stID"
                                                        id="stID"
                                                        value={this.state.stID}
                                                        onChange={this.handleattributes}
                                                    >
                                                    </Input>
                                                </FormGroup>
                                            </div>
                                            <div className="col-md-5">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Supervisor ID
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="supID"
                                                        id="supID"
                                                        value={this.state.supID}
                                                        onChange={this.handleattributes}
                                                    >
                                                    </Input>
                                                </FormGroup>
                                            </div>
                                            <div className="col-md-5">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Assign ID
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="assID"
                                                        id="assID"
                                                        value={this.state.assID}
                                                        onChange={this.handleattributes}
                                                    >
                                                    </Input>
                                                </FormGroup>
                                            </div>
                                        </div>
                                        <br />
                                        <Button color="info" size="lg" onClick={this.addDetails}>
                                            Assign Student Supervisor
                                        </Button>
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
