//console.log(process.mainModule.path);


process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  
  if (cmd == 'pwd') {
    require('./pwd.js')
  } else if (cmd == 'ls') {
      require('./ls.js')
  } else {
    process.stdout.write("You Typed: " + cmd);
  }
  process.stdout.write('\nprompt > ')
})

