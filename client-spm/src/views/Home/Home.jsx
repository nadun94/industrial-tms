import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// function that returns a color based on an interval of numbers

import { PanelHeader, CardCategory } from "components";
import { Slide } from 'react-slideshow-image';
import slide1 from './images/1.jpg';
import slide2 from './images/p.png';
import slide3 from './images/s.jpg';

const slideImages = [
  slide1, slide2, slide3
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} md={15}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Industrial Training Unit</CardCategory>
                  <CardTitle tag="h4">Internship program management</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <div id="slide" >
                      <Slide {...properties}>

                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: 500 }}  >
                            <span ></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: 500 }}>
                            <span></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: 500 }}>
                            <span></span>
                          </div>
                        </div>
                      </Slide>
                    </div>
                    <div><h6>We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU), and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.
                
We are proud to be listed as a leading and formidable awarding institute authorised and approved by the University Grants Commission (UGC) under the Universities Act, and the International Association of Universities (IAU). Furthermore, not only are we the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology (IET.), UK, our IT degrees are also in turn accredited by the Engineering Council, UK</h6></div>
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
