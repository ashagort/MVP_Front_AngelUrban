import React, { Component } from 'react';
import Grid from './../components/grid';
import SelectYead from './../components/dropList';
import DriversRace from './../components/Driver';


export default class IndexContainer extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div className="container">
                <SelectYead/>
                <Grid/>
                <DriversRace/>
            </div>
        )
    }
}