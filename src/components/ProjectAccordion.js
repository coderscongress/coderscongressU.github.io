import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export class ProjectAccordion extends Component {
    render() {
        return (
            <>
                <div>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick="">
                                Project 1
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Project ...</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick="">
                                Project 2
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Project 2</Card.Body>
                            </Accordion.Collapse>
                        </Card>
						
                    </Accordion>
                </div>
            </>
        );
    }
}

export default ProjectAccordion;