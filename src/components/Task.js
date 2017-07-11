import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    render() {

        let {
                pId, 
                pTime, 
                pPeriod, 
                pTitle, 
                pDescription,
                pDelTask,
        } = this.props;

        return (
            <Row>
                <Col xs={2} md={2} style={{textAlign: "center"}}>
                    <p>
                        {pTime}<br />
                        <span>{pPeriod}</span>
                    </p>
                </Col>
                <Col xs={6} md={8}>
                    <h4>{pTitle}</h4>
                    <p>{pDescription} : {pId}</p>
                </Col>
                <Col xs={4} md={2} style={{textAlign: "center"}}>
                    <Row style={{paddingTop: "10px"}}>
                        <Col xs={6}> 
                            <Button outline color="success" onClick={pDelTask.bind(this, pId)}>
                                <FontAwesome name="check" />
                            </Button>
                        </Col>
                        <Col xs={6}> 
                            <Button outline color="danger" onClick={pDelTask.bind(this, pId)}>
                                <FontAwesome name="times" />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Task;