import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import { driverFetchData } from './../actions/driver';

require("./grid.less");


class ShowGrid extends Component {
    constructor(props) {
        super(props);
        this.selecRow = this.selecRow.bind(this);
    }

    selecRow (event, index, value) {
        driverFetchData(this.props.dispatch, 'http://ergast.com/api/f1/'+this.props.Season+'/'+event.target.value+'/drivers.json')
    }

    render() {
        if (this.props.Races.length > 0) {
            return (
                    <Grid>
                        <Row className="show-grid-title">
                            <Col sm={3} xs={6} md={3}>Premio</Col>
                            <Col sm={3} xs={6} md={3}>Fecha de Carrera</Col>
                            <Col sm={3} xs={6} md={3}>Circuito</Col>
                            <Col sm={3} xs={6} md={3}></Col>
                        </Row>
                        {this.props.Races.map((item, i) => {
                            return <Row key={i} className="show-grid">
                                <Col sm={3} xs={6} md={3}>{item.raceName}</Col>
                                <Col sm={3} xs={6} md={3}>{item.date}</Col>
                                <Col sm={3} xs={6} md={3}>{item.Circuit.circuitName}</Col>
                                <Col sm={3} xs={6} md={3}><Button className="button-race" value={item.round} onClick={this.selecRow}>Select</Button></Col>
                            </Row>
                        })}
                    </Grid>
            )
        }
        return <div>Esperando datos</div>
    }
}

const mapStateToProps = (state) => {
    return {
        Races: state.SeasonItems.items,
        Season: state.SeasonItems.season
    }
};

export default connect(mapStateToProps)(ShowGrid)