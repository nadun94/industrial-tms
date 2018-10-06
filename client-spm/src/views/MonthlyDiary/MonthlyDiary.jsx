import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios/index";


class MonthlyDiary extends React.Component {
  state = {
    month: "",
    summery: "",

    records: []
  };

    constructor(props) {
        super(props);
        this.getAllRecords();
    }

    getAllRecords = () =>{
        var self = this;
        axios
            .get('/monthly_diary/1')
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
     * save monthly record to the database
     * parameters not accepted
     */
    saveRecord = () => {
        var self = this;
        axios
            .post("/monthly_diary", {
                student_id: "1",
                month: this.state.month,
                summery:this.state.summery ,
                remarks:"No Remarks",
                status: "no"
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
            var record = [res.data.data[key].recordId, res.data.data[key].month, res.data.data[key].summery, res.data.data[key].remarks

            ];
            this.state.records.push(record);
            this.setState({
                records: this.state.records
            });
        });
        console.log(this.state.records);
    }


    addToList = (res) => {

        var record = [res.data.data.recordId, res.data.data.month, res.data.data.summery, res.data.data.remarks

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
            .get('/monthly_diary/delete/'+id)
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
                if (key === 3)
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
                  <h5 className="title">Intern's Monthly Diary</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <h5>
                      Summery of the key tasks completed for the month of
                      [Month/Year]
                    </h5>
                    <FormInputs
                      ncols={["col-md-3 pr-1", "col-md-8 pr-1"]}
                      proprieties={[
                        {
                          label: "Month",
                          inputProps: {
                            type: "month",
                            name: "month",
                            onChange: this.handleChange
                          }
                        },
                        {
                          label: "Summery",
                          inputProps: {
                            type: "text",
                            placeholder:
                              "Intern should maintain weekly entries at minimum in this area, providing the summery of the task and the task duration.",
                            name: "summery",
                            onChange: this.handleChange
                          }
                        }
                      ]}
                    />

                    <Button color="success" pullRight onClick={this.addRecord}>
                      Add Record
                    </Button>
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
                      
                      {this.createTable()}
                    </Table>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MonthlyDiary;
