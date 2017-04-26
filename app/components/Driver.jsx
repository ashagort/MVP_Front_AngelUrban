import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row} from 'react-bootstrap';
import AddDriver from './addDriver';

class Driver extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(){
        console.log('Props:', this.props);
    }

    render() {
        if (this.props.Drivers.length > 0) {
            return (
                <div>
                    <Grid>
                        <Row className="show-grid-title">
                            <Col sm={6} xs={6} md={4}>Piloto</Col>
                            <Col sm={6} xs={6} md={4}>Nacionalidad</Col>
                            <Col sm={6} xs={6} md={4}>Nacimiento</Col>
                        </Row>
                        {this.props.Drivers.map((item, i) => {
                            return <Row key={i} className="show-grid">
                                <Col sm={6} xs={6} md={4}>{item.givenName} {item.familyName}</Col>
                                <Col sm={6} xs={6} md={4}>{item.nationality}</Col>
                                <Col sm={6} xs={6} md={4}>{item.dateOfBirth}</Col>
                            </Row>
                        })}
                    </Grid>
                    <AddDriver />
                </div>
            )
        }
        return <div>Esperando Datos de Pilotos</div>
    }
}

const mapStateToProps = (state) => {
    //console.('Driver Grid: ',state);
    return {
        Drivers: state.DriverItems.items
    }
};

export default connect(mapStateToProps)(Driver)