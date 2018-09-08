import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import { thead, tbody } from "variables/general";

class MonthlyDiary extends React.Component {
  state = {
    month: "",
    summery: "",

    records: []
  };

  addRecord = event => {
    var record = [
      "Not Assigned",
      this.state.month,
      this.state.summery,
      "No Remarks"
    ];
    this.state.records.push(record);
    this.setState({
      records: this.state.records
    });

    console.log(this.state.records);
  };

  createTable = () => {
    var table = (
      <tbody>
        {this.state.records.map((prop, key) => {
          return (
            <tr key={key}>
              {prop.map((prop, key) => {
                if (key === thead.length - 1)
                  return (
                    <td key={key} className="text-left">
                      {prop}
                    </td>
                  );
                return <td key={key}>{prop}</td>;
              })}

              <td key="action">
                <Button color="warning">Delete Record</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
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
                          label: "Remarks from supervisor",
                          inputProps: {
                            type: "text",
                            placeholder:
                              "Intern should maintain weekly entries at minium in this area, providing the summery of the task and the task duration.",
                            name: "summery",
                            name: "remarks",
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
                      <thead className="text-primary">
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
                      </thead>
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
