const fetch = require('isomorphic-fetch');

test('should return object', function (done) {
    fetch('http://ergast.com/api/f1/seasons.json')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return console.log(response);
        })
        .catch((error) => {
            done(error);
        });
});