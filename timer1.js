
const args = process.argv.slice(2)
process.stdout.write('\x07');

for (let elm of args) {
  if (elm > 0 && elm != "") {
    setTimeout(() => {
      console.log(`${elm} seconds`);
    }, elm * 1000);
  }
}

