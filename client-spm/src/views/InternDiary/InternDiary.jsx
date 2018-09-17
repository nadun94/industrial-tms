import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";


class TrainingInfo extends React.Component {
  state = {
    trainerName: "",
    trainingDesc: "",
    from: "",
    to: "",
    records: []
  };

  addRecord = event => {
    var record = [
      this.state.trainerName,
      this.state.trainingDesc,
      this.state.from,
      this.state.to,
      "Not Approved"
    ];
    this.state.records.push(record);
    this.setState({
      records: this.state.records
    });

    console.log(this.state.records);
  };

  createTable = () => {
    var table = (
      
        this.state.records.map((prop, key) => {
          return (
            <tr key={key}>
              {prop.map((prop, key) => {
                if (key === 6)
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
