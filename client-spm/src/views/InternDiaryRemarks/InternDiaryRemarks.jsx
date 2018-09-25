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
