const request = require('request');

let outCurl = (inputUrl) => {
  request(inputUrl, function (error, response, body) {
    console.error('error:', error);
//    console.log('statusCode:', response && response.statusCode);
//    console.log('body:', body);
    process.stdout.write(body);
});
}

module.exports = outCurl ;

