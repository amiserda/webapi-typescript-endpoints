
var promise = new Promise((resolve, reject) => {
    resolve($.get('api/testapi/get', {i: 0, s: 's'}));
})

promise.then(function(data) {
    console.log(data);
})