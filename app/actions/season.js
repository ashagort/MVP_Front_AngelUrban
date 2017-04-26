import fetch from 'isomorphic-fetch';

export function seasonFetchData(dispatch, url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            dispatch( {
                type : 'Season_Race_Succes',
                result: response
            })
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
}