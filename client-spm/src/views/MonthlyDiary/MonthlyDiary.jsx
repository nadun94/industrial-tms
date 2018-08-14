import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

import {
  PanelHeader,
  FormInputs,
  CardAuthor,
  CardSocials,
  
} from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import { thead, tbody } from "variables/general";

class MonthlyDiary extends React.Component {
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
                        Summery of the key tasks completed for the month of [Month/Year]
                      </h5>
                      <FormInputs
                      ncols={["col-md-3 pr-1"]}
                      proprieties={[
                        {
                          label: "Month",
                          inputProps: {
                            type: "month"
                          }
                         
                        }
                    
                      ]}
                    />

                     <FormInputs
                      ncols={["col-md-6 pl-1"]}
                      proprieties={[
                       
                        {
                            label: "Summery",
                           inputProps: {
                            type: "textarea",
                            rows: 5,
                            placeholder: "Intern should maintain weekly entries at minium in this area, providing the summery of the task and the task duration."
                          }
                        }
                      ]}
                    />

                     <Button color="success" pullRight>Add Record</Button>
                     <div className="clearfix" />
                     <div className="clearfix" />
                     
                   <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          {thead.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <th key={key} className="text-right">
                                  {prop}
                                </th>
                              );
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {tbody.map((prop, key) => {
                          return (
                            <tr key={key}>
                              {prop.data.map((prop, key) => {
                                if (key === thead.length - 1)
                                  return (
                                    <td key={key} className="text-right">
                                      {prop}
                                    </td>
                                  );
                                return <td key={key}>{prop}</td>;
                              })}
                            </tr>
                          );
                        })}
                      </tbody>

                     
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
