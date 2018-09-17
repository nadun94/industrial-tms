import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// function that returns a color based on an interval of numbers

import { PanelHeader, CardCategory } from "components";
import slide1 from '../../assets/img/in1.jpg';
import slide2 from '../../assets/img/in2.jpg';
import slide3 from '../../assets/img/in3.jpg';
import slide4 from '../../assets/img/in4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends React.Component {
  render() {
    return (
      <div>

        <div className="content-fluid">
          {/* <PanelHeader
          size="sm" /> */}
          <Card>
          <Row>
            <Col xs={12} md={15}>
              <div className="chart-area">
                <div id="slide1" >
                {/* Responsive slide show  */}
                  <Carousel>
                    <div>
                      <img src={slide1} />
                      <p className="legend">Its Future</p>
                    </div>
                    <div>
                      <img src={slide2} />
                      <p className="legend">Take you to your dream places</p>
                    </div>
                    <div>
                      <img src={slide3} />
                      <p className="legend">Make your home</p>
                    </div>
                    <div>
                      <img src={slide4} />
                      <p className="legend">Make your home</p>
                    </div>
                  </Carousel>

                </div>
              </div>
              {/* <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Industrial Training Unit</CardCategory>
                  <CardTitle tag="h4">Internship program management</CardTitle>
                </CardHeader>
                <CardBody>
  
                 
                </CardBody>
              </Card> */}
            </Col>
          </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;