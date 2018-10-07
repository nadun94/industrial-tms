import React from "react";
import { Card, CardHeader, CardBody, Row, Col, ButtonGroup } from "reactstrap";

import { Button } from 'reactstrap';
import axios from 'axios';
import { Badge } from 'reactstrap';

import { PanelHeader, FormInputs } from "components";
//import { Button } from 'reactstrap';
//import FormGroup from "../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/reactstrap/lib/FormGroup";
class fillform_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: null,

            student_name:null,
        
            company_overview:null,
        
            project_overview:null,
        
            
        
            glossary:[{
                abbreviation:null,
                
                description:null
            }],
           
        
            objectives:null,
        
            procedures:null,
        
            methodology:null,
        
            learning :null,
        
            method:null,
        
            efficent:null,
        
        
        
            sub1:null,
            sub2:null,
        
            message:"",
           

        };
        //this.handleDate = this.handleDate.bind(this);
        this.handleattributes=this.handleattributes.bind(this);
        this.clear=this.clear.bind(this);
       // this.check=this.check.bind(this);
        this.addDetails=this.addDetails.bind(this);
        this.checkerror=this.checkerror.bind(this);

    }
    componentWillMount(){
       
    }
   //clear text boxes
    clear() {


        this.setState({

            studentID:"",

            student_name:"",
        
            company_overview:"",
        
            project_overview:"",
        
            
        
      
                abbreviation:" ",
                
                description:"",
          
           
        
            objectives:"",
        
            procedures:"",
        
            methodology:"",
        
            learning :"",
        
            method:"",
        
            efficent:"",
        
        
        
            sub1:"",
            sub2:"",
        
            message:"",
           
        })
        console.log("clear");
        
    }
    checkerror(){
     console.log(this.state.message);


    }
    //post method to add details
    addDetails() {

        

        var self = this;
        console.log("axios");

        axios.post("/fill-formI6", {
            
           
            studentID:this.state.studentID,

            student_name:this.state.student_name,
        
            company_overview:this.state.company_overview,
        
            project_overview:this.state.project_overview,
        
            
        
            glossary:[{
                abbreviation:this.state.glossary,
                
                description:this.state.description
            }],
           
        
            objectives:this.state.objectives,
        
            procedures:this.state.procedures,
        
            methodology:this.state.methodology,
        
            learning :this.state.learning,
        
            method:this.state.method,
        
            efficent:this.state.efficent,
        
        
        
            sub1:this.state.sub1,
            sub2:this.state.sub2,
           // message:this.state.message







        })
            .then(res => {
              console.log("jgyug");
              console.log(res);
                this.setState({ message: res.data.message });
                //console.log(res.data.message);

              //  console.log(res);
               // console.log(res.data);
               //console.log(this.checkerror());
               console.log(res.message);
               console.log(this.state.message);
                console.log("saved!");
                alert(this.state.message);

               // this.clear()
               
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
                  <h5 className="title">INTERNSHIP REPORT </h5>
                </CardHeader>
                <CardBody>
                  <form>
                  
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1",
                        

                        

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
                            name:"student_name",
                            value:this.state.student_name,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "company_overview",
                          inputProps: {
                            type: "textarea",
                            placeholder: "company_overview",
                            name:"company_overview",
                            value:this.state.company_overview,
                            onChange:this.handleattributes
                          }
                        }
                      ]}
                    />
                  
                    <FormInputs
                
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "about project over view",
                          inputProps: {
                            type: "textarea",
                            placeholder: "project details",
                            defaultValue: "",
                            name:"project_overview",
                            value:this.state.project_overview,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "abbreviation",
                          inputProps: {
                            type: "textarea",
                            placeholder: "abbreviation details",
                            defaultValue: "",
                            name:"abbreviation",
                            value:this.state.abbreviation,
                            onChange:this.handleattributes
                          }
                        },
                          {
                            label: "description",
                            inputProps: {
                              type: "textarea",
                              placeholder: "description details",
                              defaultValue: "",
                              name:"description",
                              value:this.state.description,
                              onChange:this.handleattributes
                            }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "objectives",
                          inputProps: {
                            type: "textarea",
                            placeholder: "objectives",
                           // defaultValue:
                             // "xxxx@email.com"
                             name:"objectives",
                             value:this.state.objectives,
                             onChange:this.handleattributes
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1",
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1",
                        "col-md-4 pl-1"

                      ]}
                      proprieties={[
                        {
                          label: "procedures",
                          inputProps: {
                            type: "textarea",
                          //  defaultValue: "year",
                            placeholder: "procedures",
                            name:"procedures",
                            value:this.state.procedures,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "methodology",
                          inputProps: {
                            type: "textarea",
                           // defaultValue: "",
                            placeholder: "methodology",
                            name:"methodology",
                            value:this.state.methodology,
                            onChange:this.handleattributes
                          }
                        },
                        {
                          label: "learning",
                          inputProps: {
                            type: "textarea",
                            placeholder: "learning",
                            name:"learning",
                            value:this.state.learning,
                            onChange:this.handleattributes
                          }
                          
                        },
                        {
                            label: "method",
                            inputProps: {
                              type: "textarea",
                              placeholder: "method",
                              name:"method",
                              value:this.state.method,
                              onChange:this.handleattributes
                            }
                        },
                        {
                            label: "efficent",
                            inputProps: {
                              type: "textarea",
                              placeholder: "efficent",
                              name:"efficent",
                              value:this.state.efficent,
                              onChange:this.handleattributes
                            }
                        },
                        {
                            label: "sub1",
                            inputProps: {
                              type: "textarea",
                              placeholder: "sub1",
                              name:"sub1",
                              value:this.state.sub1,
                              onChange:this.handleattributes
                            }
                        },
                        {
                            label: "sub2",
                            inputProps: {
                              type: "textarea",
                              placeholder: "sub2",
                              name:"sub2",
                              value:this.state.sub2,
                              onChange:this.handleattributes
                            }
                          
                        }
                    
                      ]}
                      
                    
                      
                    />
                    <ButtonGroup className="pull-right">
                     <Button color="info" size="lg"  onClick={this.addDetails} >SAVE</Button>{' '}
                     
                     <Button color="info" size="lg" onClick={this.clear}  >CLEAR</Button>
                     </ButtonGroup>
                    
                     <h3> <Badge color="secondary"></Badge></h3>
                      
               
                    
                  
                
                    

            
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
