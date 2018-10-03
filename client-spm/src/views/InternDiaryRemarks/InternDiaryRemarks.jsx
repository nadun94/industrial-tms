import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios/index";


class InternDiaryRemarks extends React.Component {
  state = {
    trainerName: "",
    trainingDesc: "",
    from: "",
    to: "",
      trainingRecords: [],
      monthlyRecords: []
  };
    constructor(props) {
        super(props);
        this.getAllTrainingRecords();
        this.getAllMonthlyRecords();
    }

    getAllMonthlyRecords = () =>{
        var self = this;
        axios
            .get('/monthly_diary/1')
            .then(function (res) {
                console.log(res);
                self.addToMonthlyListArray(res);

                console.log(self.state.records);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addToMonthlyListArray =(res) => {

        Object.keys(res.data.data).map(key => {
            var record = [res.data.data[key].recordId, res.data.data[key].month, res.data.data[key].summery, res.data.data[key].remarks

            ];
            this.state.monthlyRecords.push(record);
            this.setState({
                monthlyRecords: this.state.monthlyRecords
            });
        });
        console.log(this.state.monthlyRecords);
    }



    getAllTrainingRecords = () =>{
        var self = this;
        axios
            .get('/internalTrainingInfo/1')
            .then(function (res) {
                console.log(res);
                self.addToTrainingListArray(res);

                console.log(self.state.records);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addToTrainingListArray =(res) => {

        Object.keys(res.data.data).map(key => {
            var record = [res.data.data[key].recordId, res.data.data[key].trainer, res.data.data[key].description, res.data.data[key].from, res.data.data[key].to, res.data.data[key].approve

            ];
            this.state.trainingRecords.push(record);
            this.setState({
                trainingRecords: this.state.trainingRecords
            });
        });
        console.log(this.state.trainingRecords);
    }

    addRecord = event => {
        var record = [
            this.state.trainerName,
            this.state.trainingDesc,
            this.state.from,
            this.state.to
        ];
        this.state.records.push(record);
        this.setState({
            records: this.state.records
        });

        console.log(this.state.records);
    };

    createTraingTable = () => {
        var index;
        var approve;

        var table = (

            this.state.trainingRecords.map((prop, key) => {
                return (
                    <tr key={key}>
                        {prop.map((prop, key) => {
                            if(key ==5){approve=prop;}

                            if(key ==0){index=prop;}
                            if (key === 4)
                                return (
                                    <td key={key} className="text-left">
                                        {prop}
                                    </td>
                                );
                            return <td key={key}>{prop}</td>;
                        })}

                        <td key="action">
                            {approve == "Approved" ? null :
                                <Button color="warning" onClick={this.approveRecord.bind(this, index)}>Approve
                                    Record</Button>
                            }
                        </td>
                    </tr>
                );
            })

        );

        console.log("table");

        return table;
    };

    approveRecord = (id,e) => {
        console.log(e);

        var self = this;
        axios
            .post('/internalTrainingInfo/approve', {
                recordId: id
            })
            .then(function (res) {
                console.log(res);
                if(res.data.data==1){

                    self.state.getAllTrainingRecords=[];
                    self.getAllTrainingRecords();
                    alert(res.data.message);

                }
                console.log(res);



            })
            .catch(function (error) {
                console.log(error);
            });
    }




    deleteRecord = (id,e) => {
        // console.log(e);
        //
        // var self = this;
        // axios
        //     .get('/internalTrainingInfo/delete/'+id)
        //     .then(function (res) {
        //
        //         if(res.data.data==1){
        //             self.state.records=[];
        //             self.getAllRecords();
        //             alert('Data deleted successfully!');
        //
        //         }
        //         console.log(res);
        //
        //
        //
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }



    createDiaryTable = () => {
        var index;
        var table = (

            this.state.monthlyRecords.map((prop, key) => {
                return (
                    <tr key={key}>
                        {prop.map((prop, key) => {
                            if(key ==0){index=prop;}
                            if (key === 4)
                                return (
                                    <td key={key} className="text-left">
                                        {prop}
                                    </td>
                                );
                            return <td key={key}>{prop}</td>;
                        })}

                        <td key="action">

                            <Button color="success">Add Remarks</Button>
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

    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Internal Training Information</h5>
                </CardHeader>
                <CardBody>

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

                    {this.createTraingTable()}
                  </Table>



<br></br><br></br>
                  <h5>
                        Summery of the key tasks completed for the month of [Month/Year]
                      </h5>


                     <FormInputs
                    ncols={["col-md-6 pr-1"]}
                    proprieties={[
                      {
                        label: "Remarks from supervisor",
                        inputProps: {
                          type: "text",

                          name: "remarks",
                          onChange: this.handleChange
                        }
                      }
                    ]}
                  />

                     <Button color="success" pullRight onClick={this.addRecord}>Add Remarks</Button>
                     <div className="clearfix" />
                     <div className="clearfix" />

                     <Table responsive>

                      <tr>
                        <th key="EntryID" className="text-middle">
                          Entry Id
                        </th>
                        <th key="Month" className="text-middle">
                          Month
                        </th>
                        <th key="summery" className="text-middle">
                          Summery
                        </th>
                        <th key="status" className="text-middle">
                          Supervisor Remarks
                        </th>
                        <th key="actionField" className="text-middle">
                          Actions
                        </th>

                      </tr>

                     {this.createDiaryTable()}
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

export default InternDiaryRemarks;
