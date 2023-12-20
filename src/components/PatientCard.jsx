import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PatientCardHeader from "./PatientCardHeader";
import PatientCardBodyTopLeft from "./PatientCardBodyTopLeft";
import PatientCardBodyTopRight from "./PatientCardBodyTopRight";
import PatientCardBodyBottomLeft from "./PatientCardBodyBottomLeft";
import PatientCardBodyBottomRight from "./PatientCardBodyBottomRight";
import PatientCardFooter from "./PatientCardFooter";

function PatientCard({ info, diagnosis, history, plan, obs, notes }) {
    return (

        <Container className="patient-card" style={{maxWidth: "450px", maxHeight: "400px"}}>
            <div className="patient-card-header"><PatientCardHeader info={info} /></div>
            <Row>
                <Col>
                    <div className="patient-card-body-top-left"><PatientCardBodyTopLeft
                        diagnosis={diagnosis}
                        history={history}
                    />
                    </div>
                </Col>
                <Col>
                    <div className="patient-card-body-top-right">
                        <PatientCardBodyTopRight plan={plan} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="patient-card-body-bottom-left">
                        <PatientCardBodyBottomLeft obs={obs} />
                    </div>
                </Col>
                <Col>
                    <div className="patient-card-body-bottom-right">
                        <PatientCardBodyBottomRight notes={notes} />
                    </div>
                </Col>
            </Row>

            <div className="patient-card-footer"><PatientCardFooter /></div>
        </Container>
    );
}

export default PatientCard;