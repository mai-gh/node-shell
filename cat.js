const fs = require('fs')

let outCat = (inputFile) => {
  fs.readFile(inputFile, (err, data) => {
    if (err) {
        throw err
    } else {
        process.stdout.write(data);
        process.stdout.write('prompt > ')
    }
  });

}
module.exports = outCat ;

