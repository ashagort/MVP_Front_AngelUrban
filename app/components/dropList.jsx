import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {raceFetchData} from './../actions/raceYear';
import { seasonFetchData } from './../actions/season';


class dropList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 3};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        raceFetchData(this.props.dispatch, 'http://ergast.com/api/f1/seasons.json');
    }

    handleChange (event, index, value) {
        seasonFetchData(this.props.dispatch, 'http://ergast.com/api/f1/'+value+'.json');
    }

    render() {
        if(this.props.Seasons.length > 0) {
            return (
                <div>
                    <SelectField floatingLabelText="Season" value={this.state.value} onChange={this.handleChange}>
                        {this.props.Seasons.map((item, i) => {
                            return <MenuItem key={i} value={item.season} primaryText={item.season}/>
                        })}
                    </SelectField>
                </div>
            )
        }
        return <div>Loading...</div>
    }
}

const mapStateToProps = (state) => {
    return {
        Seasons: state.raceItems.items
    }
};


export default connect(mapStateToProps)(dropList)