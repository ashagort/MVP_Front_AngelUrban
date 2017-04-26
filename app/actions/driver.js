import fetch from 'isomorphic-fetch';

export function driverFetchData(dispatch, url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            dispatch( {
                type : 'Driver_Race_Succes',
                result: response
            })
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
}

//Como no hay API para guardar los datos del formulario hacemos un dispatch con los mismos datos del form,
// de otra manera seria el resultado de la API de insercion
export function addDrive(dispatch, FormValues) {
    dispatch({
        type: 'Add_Drive_Sucess',
        result: FormValues
    })
}