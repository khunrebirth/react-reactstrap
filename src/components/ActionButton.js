import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class ActionButton extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col xs={8} md={10} />
                    <Col xs={12} md={2}>
                        <Button outline color="info" size="lg" block>
                            <FontAwesome name="plus" />
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ActionButton;