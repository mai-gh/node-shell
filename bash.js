//console.log(process.mainModule.path);


process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
//  console.log(cmd);


  
  if (cmd[0] == 'pwd') {
    require('./pwd.js')
  } else if (cmd[0] == 'ls') {
      require('./ls.js')
  } else if (cmd[0] == 'cat') {
      const outCat = require('./cat.js')
      outCat(cmd[1]);
  } else {
    process.stdout.write("You Typed: " + cmd[0]);
  }
  process.stdout.write('\nprompt > ')
})

