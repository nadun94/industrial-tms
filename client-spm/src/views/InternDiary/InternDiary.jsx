import React from "react";
import {Card, CardHeader, CardBody, Row, Col, Table} from "reactstrap";

import {PanelHeader, FormInputs, CardAuthor, CardSocials} from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios/index";


class TrainingInfo extends React.Component {
    state = {
        trainerName: "",
        trainingDesc: "",
        from: "",
        to: "",
        records: []
    };

    constructor(props) {
        super(props);
        this.getAllRecords();
    }


    getAllRecords = () =>{
        var self = this;
        axios
            .get('/internalTrainingInfo/1')
            .then(function (res) {
                console.log(res);
                self.addToListArray(res);

                console.log(self.state.records);
            })
            .catch(function (error) {
                console.log(error);
            });
}

    /**
     * save training record to the database
     * parameters not accepted
     */
    saveRecord = () => {
        var self = this;
        axios
            .post("/internalTrainingInfo", {
                student_id: "1",
                trainer: this.state.trainerName,
                description: this.state.trainerName,
                from: this.state.from,
                to: this.state.to,
                approve: "Not Approved"
            })
            .then(function (res) {
                self.addToList(res);

                console.log(res);
                console.log(self.state.records);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addToListArray =(res) => {

        Object.keys(res.data.data).map(key => {
            var record = [res.data.data[key].recordId, res.data.data[key].trainer, res.data.data[key].description, res.data.data[key].from, res.data.data[key].to, res.data.data[key].approve

            ];
            this.state.records.push(record);
            this.setState({
                records: this.state.records
            });
        });
        console.log(this.state.records);
    }


    addToList = (res) => {

        var record = [res.data.data.recordId, res.data.data.trainer, res.data.data.description, res.data.data.from, res.data.data.to, res.data.data.approve

        ];
        this.state.records.push(record);
        this.setState({
            records: this.state.records
        });


    }

    deleteRecord = (id,e) => {
        console.log(e);

        var self = this;
        axios
            .get('/internalTrainingInfo/delete/'+id)
            .then(function (res) {

                if(res.data.data==1){
                    self.state.records=[];
                    self.getAllRecords();
                    alert('Data deleted successfully!');

                }
                console.log(res);



            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addRecord = event => {
        this.saveRecord();
        console.log(this.state.records);
    };

    createTable = () => {
        var index;
        var table = (

            this.state.records.map((prop, key) => {
                return (
                    <tr key={key}>
                        {prop.map((prop, key) => {
                            if(key ==0){index=prop;}
                            if (key === 6)
                                return (
                                    <td key={key} className="text-left">
                                        {prop}
                                    </td>
                                );
                            return <td key={key}>{prop}</td>;
                        })}

                        <td key="action">
                            <Button color="warning" onClick={this.deleteRecord.bind(this,index)}>Delete Record</Button>
                        </td>
                    </tr>
                );
            })

        );

        console.log("table");

        return table;
    };

    handleChange = event => {
        console.log([event.target.name] + " " + event.target.value);

        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col md={10} xs={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Internal Training Information</h5>
                                </CardHeader>
                                <CardBody>
                                    <FormInputs
                                        ncols={["col-md-6 pr-1", "col-md-6 px-1"]}
                                        proprieties={[
                                            {
                                                label: "Training Party",
                                                inputProps: {
                                                    type: "text",
                                                    placeholder: "Name of the trainer",
                                                    name: "trainerName",
                                                    onChange: this.handleChange
                                                }
                                            },
                                            {
                                                label: "Training Description",
                                                inputProps: {
                                                    type: "text",
                                                    placeholder: "Description",
                                                    name: "trainingDesc",
                                                    onChange: this.handleChange
                                                }
                                            }
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                                        proprieties={[
                                            {
                                                label: "Period [From]",
                                                inputProps: {
                                                    type: "date",
                                                    name: "from",
                                                    onChange: this.handleChange
                                                }
                                            },
                                            {
                                                label: "Period [To]",
                                                inputProps: {
                                                    type: "date",
                                                    name: "to",
                                                    onChange: this.handleChange
                                                }
                                            }
                                        ]}
                                    />

                                    <Button color="success" onClick={this.addRecord}>
                                        Add Record
                                    </Button>
                                    <Table responsive>

                                        <tr>
                                            <th key="trainerName" className="text-middle">
                                                Record
                                            </th>
                                            <th key="trainerName" className="text-middle">
                                                Trainer Name
                                            </th>
                                            <th key="trainingDesc" className="text-middle">
                                                Training Description
                                            </th>
                                            <th key="from" className="text-middle">
                                                Period [From]
                                            </th>
                                            <th key="to" className="text-middle">
                                                Period [to]
                                            </th>
                                            <th key="approval" className="text-middle">
                                                Supervisor Approval
                                            </th>
                                            <th key="actionField" className="text-middle">
                                                Actions
                                            </th>
                                        </tr>

                                        {this.createTable()}
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TrainingInfo;
