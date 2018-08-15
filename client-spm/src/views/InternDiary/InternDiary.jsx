import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import { thead, tbody } from "variables/general";

class TrainingInfo extends React.Component {
  state = {
    trainerName: "",
    trainingDesc: "",
    from: "",
    to: "",
    records: []
  };

  addRecord = event => {
    var record = {
      trainerName: this.state.trainerName,
      trainingDesc: this.state.trainingDesc,
      from: this.state.from,
      to: this.state.to
    };
    this.state.records.push(record);
    this.setState({
      records:this.state.records
  });





    console.log(this.state.records);
  };

  createTable = () => {
    var table = (
      <tbody>
        {this.state.records.map((prop, key) => {
          return (
            <tr key={key}>
              {
                if (key === thead.length - 1)
                  return (
                    <td key={key} className="text-right">
                      {prop}
                    </td>
                  );
                return <td key={key}>{prop}</td>;
              )}
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
                    <thead className="text-primary">
                      <tr>
                        <th key="trainerName" className="text-right">
                          Trainer Name
                        </th>
                        <th key="trainingDesc" className="text-right">
                          Training Description
                        </th>
                        <th key="from" className="text-right">
                          Period [From]
                        </th>
                        <th key="to" className="text-right">
                          Period [to]
                        </th>
                      </tr>
                    </thead>
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
