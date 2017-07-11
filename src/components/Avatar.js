import React, { Component } from 'react';
import { Row, Col, CardImg } from 'reactstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={12} style={{textAlign: "center"}}>
                        <CardImg className="App-logo" src="https://camo.githubusercontent.com/a414ed53a23a0d004d0ddd1981094f02b406b181/687474703a2f2f6a61766173637269707469736d616769632e6769746875622e696f2f6175692f6c6f676f732f72656163742e706e67" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Avatar;