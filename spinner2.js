const charArray = [ '|', '/', '-', '\\', '|'];
let delay = 100;
for (let char of charArray) {
  setTimeout(() => {
    process.stdout.write(char);
    process.stdout.write('\r');
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1100);