process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
