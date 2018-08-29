import React from "react";
import { Card, CardHeader, CardBody, Row, Col, ButtonGroup } from "reactstrap";

import { Button } from 'reactstrap';
import axios from 'axios';

import { PanelHeader, FormInputs } from "components";
//import { Button } from 'reactstrap';
//import FormGroup from "../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/reactstrap/lib/FormGroup";
class fillform_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: null,
            stdname: null,
            address: null,
            homephone: null,
            mobilephone: null,
            email: null,
            semester: null,
            gpa: null,
            cgpa: null,
           

        };
        //this.handleDate = this.handleDate.bind(this);
        this.handleattributes=this.handleattributes.bind(this);
        this.clear=this.clear.bind(this);
       // this.check=this.check.bind(this);
        this.addDetails=this.addDetails.bind(this);

    }
    componentWillMount(){
       
    }
   
    clear() {


        this.setState({

            studentID: "",
            stdname: "",
            address: "",
            homephone: "",
            mobilephone: "",
            email: "",
            semester: "",
            gpa: "",
            cgpa: "",
        })
        console.log("clear");
        
    }
    addDetails() {

        

        var self = this;
        console.log("axios");

        axios.post("/studentform1", {
            
            studentID: this.state.studentID,
            stdname: this.state.stdname,
            address: this.state.address,
            homephone: this.state.homephone,
            mobilephone: this.state.mobilephone,
            email: this.state.email,
            semester: this.state.semester,
            gpa: this.state.gpa,
            cgpa: this.state.cgpa,








        })
            .then(res => {
                this.setState({ message: res.data.message })

                console.log(res);
                console.log(res.data);
                console.log("saved!")
               
            })
    }

 
   handleattributes({target}){
       console.log(target.value);
       this.setState({
           [target.name]:target.value
           
       });
   }

    //render start******************************************************
  render() {
    return (
        
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title"> Fill Student's Form </h5>
                </CardHeader>
                <CardBody>
                  <form>
                  
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Student Id",

                          inputProps: {
                              name:"studentID",
                            type: "text",
                            disabled: false,
                            placeholder: "ITxxxxxx",
                            value:this.state.studentID,
                            onChange:this.handleattributes,
                            

                          }
                          
                        },
                        {
                          label: "Student Name",
                          inputProps: {
                            type: "text",
                           
                            placeholder: "name",
                            name:"stdname",
                            value:this.state.stdname,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "address",
                          inputProps: {
                            type: "address",
                            placeholder: "address",
                            name:"address",
                            value:this.state.address,
                            onChange:this.handleattributes
                          }
                        }
                      ]}
                    />
                  
                    <FormInputs
                
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "home phone number",
                          inputProps: {
                            type: "text",
                            placeholder: "home phone number",
                            defaultValue: "",
                            name:"homephone",
                            value:this.state.homephone,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "mobile number",
                          inputProps: {
                            type: "text",
                            placeholder: "mobile number",
                            defaultValue: "",
                            name:"mobilephone",
                            value:this.state.mobilephone,
                            onChange:this.handleattributes
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "email",
                          inputProps: {
                            type: "text",
                            placeholder: "email",
                           // defaultValue:
                             // "xxxx@email.com"
                             name:"email",
                             value:this.state.email,
                             onChange:this.handleattributes
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "semester",
                          inputProps: {
                            type: "text",
                          //  defaultValue: "year",
                            placeholder: "semester",
                            name:"semester",
                            value:this.state.semester,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "gpa",
                          inputProps: {
                            type: "text",
                           // defaultValue: "",
                            placeholder: "gpa",
                            name:"gpa",
                            value:this.state.gpa,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "cgpa",
                          inputProps: {
                            type: "text",
                            placeholder: "cgpa",
                            name:"cgpa",
                            value:this.state.cgpa,
                            onChange:this.handleattributes
                          }
                          
                          
                        }
                    
                      ]}
                      
                    
                      
                    />
                    <ButtonGroup className="pull-right">
                     <Button color="primary" size="lg" onClick={this.addDetails} >SAVE</Button>{' '}
                     <Button color="secondary" size="lg" onClick={this.clear} >CLEAR</Button>
                     </ButtonGroup>
                      
               
                    
                  
                
                    

            
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

export default fillform_1;
