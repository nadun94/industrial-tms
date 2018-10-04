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
            studentId:"",
            supervisorId:"",
            studentName: "",
            supervisorName: "",
            assignId:"",
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

        this.addDetails=this.addDetails.bind(this);
        this.SearchStudent=this.SearchStudent.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        alert(this.state.supervisorId)


        var self = this;
        fetch("/getsupervisor/"+this.state.supervisorId)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                console.log(data.data[0].supervisorName)
                // studentId:this.state.studentId,
                self.setState({supervisorName:data.data[0].supervisorName})
                self.setState({SupervisorTitle:data.data[0].supervisorTitle})
                self.setState({AssignedProject:data.data[0].assignedProject})

            })
            .catch(err => {
                console.log(err);
            });
    }

    SearchStudent(){
alert(this.state.studentId)


        var self = this;
        fetch("/getstudent/"+this.state.studentId)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                console.log(data.data[0].stdname)
                // studentId:this.state.studentId,
                self.setState({studentName:data.data[0].stdname})
                self.setState({StudentEmail:data.data[0].email})
                self.setState({semester:data.data[0].semester})
                self.setState({gpa:data.data[0].gpa})
                self.setState({Mobilephone:data.data[0].mobilephone})
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


//
    componentDidMount(){

        var self = this;
      /*  fetch('/getallstudentlist')
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
*/

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
                                                <Label for="exampleSelect">Enter Student ID</Label>
                                                <Input
                                                    type="text"
                                                    name="studentId"
                                                   onChange={this.handleChange}
                                                    value={this.state.studentId}
                                                />
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
                                                        onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
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
                                                    name="supervisorId"
                                                    value={this.state.supervisorId}
                                                    onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
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
                                                        onChange={this.handleChange}
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
                                                        name="AssignedProject"
                                                        placeholder=""
                                                        value={this.state.AssignedProject}
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
                                                        value={this.state.stID}
                                                        onChange={this.handleChange}
                                                    />
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
                                                        value={this.state.supID}
                                                        onChange={this.handleChange}
                                                    />

                                                </FormGroup>
                                            </div>
                                            <div className="col-md-5">
                                                <FormGroup>
                                                    <Label for="assIDs">
                                                        Assign ID
                                                    </Label>
                                                    <Col sm={12}>
                                                        <Input
                                                            type="text"
                                                            name="assID"
                                                            placeholder=""
                                                            value={this.state.assID}
                                                            onChange={this.handleChange}

                                                        />
                                                    </Col>
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
