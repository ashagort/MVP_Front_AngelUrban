import { combineReducers } from 'redux';
import { raceItems } from './reducers/raceReducer';
import { SeasonItems } from './reducers/seasonReducer';
import { DriverItems } from './reducers/driverReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    raceItems,
    SeasonItems,
    DriverItems,
    form: formReducer
});