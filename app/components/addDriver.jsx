import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { addDrive } from './../actions/driver';

function submit(values, dispatch, props) {
    addDrive(dispatch,values);
    return false;
}

const required = value => value ? undefined : 'Required';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup {...input} {...rest}
                      valueSelected={input.value}
                      onChange={(event, value) => input.onChange(value)}/>
);



const AddDriver = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>Position</label>
                <div>
                    <Field name="position" component={renderTextField} type="text" placeholder="Position" validate={required}/>
                </div>
            </div>
            <div>
                <label>Car Number</label>
                <div>
                    <Field name="carNumber" component={renderTextField} type="text" placeholder="Car Number" validate={required}/>
                </div>
            </div>
            <div>
                <label>Driver Name</label>
                <div>
                    <Field name="driverName" component={renderTextField} type="text" placeholder="Driver Name" validate={required}/>
                </div>
            </div>
            <div>
                <Field name="Constructor" component={renderRadioGroup} validate={required} >
                    <RadioButton value="Mercedes" label="Mercedes" />
                    <RadioButton value="Ferrali" label="Ferrali"/>
                </Field>
            </div>
            <div>
                <label>Laps Completed</label>
                <div>
                    <Field name="laps" component={renderTextField} type="text" placeholder="Laps" validate={required}/>
                </div>
            </div>
            <div>
                <label>Pole Position</label>
                <div>
                    <Field name="polePosition" component={renderTextField} type="text" placeholder="Pole" validate={required}/>
                </div>
            </div>
            <div>
                <label>Time</label>
                <div>
                    <Field name="Time" component={renderTextField} type="text" placeholder="Time" validate={required}/>
                </div>
            </div>
            <div>
                <Field name="Status" component={renderRadioGroup} validate={required}>
                    <RadioButton value="Finished" label="Finished"/>
                    <RadioButton value="Suspended" label="Suspended"/>
                    <RadioButton value="Retired" label="Retired"/>
                </Field>
            </div>
            <div>
                <label>Points</label>
                <div>
                    <Field name="points" component={renderTextField} type="text" placeholder="Points" validate={required}/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'AddDriver'
})(AddDriver)
