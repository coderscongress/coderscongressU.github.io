import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export class ExperienceAccordion extends Component {
    render() {
        return (
            <>
                <div>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick="">
                                Mission
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>My mission is to design and implement tech tools that will propel personal career pursuits to higher heights and enhance business growth as well as assist in the scientific integration of technology and society. </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick="">
                                Vision
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>My vision is to make use of tech knowledge to advance the noble causes of humanity be it social, educational, commercial, health or research.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
						
                    </Accordion>
                </div>
            </>
        );
    }
}

export default ExperienceAccordion;