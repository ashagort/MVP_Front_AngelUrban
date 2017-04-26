import fetch from 'isomorphic-fetch';

export function raceFetchData(dispatch, url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            dispatch( {
                type : 'Race_Year_dataSuccess',
                result: response
            })
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
}