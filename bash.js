//console.log(process);


process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  process.stdout.write("You Typed: ", cmd);
  process.stdout.write('\nprompt > ')
})
