import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// function that returns a color based on an interval of numbers

import { PanelHeader, CardCategory } from "components";

class Home extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Industrial Training Unit</CardCategory>
                  <CardTitle tag="h4">Internship program management</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
