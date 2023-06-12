process.stdout.write('welcome to Holberton School, What is your name?\n');

process.stdin.on('data', (data) => {
  if (data) {
    console.log(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
