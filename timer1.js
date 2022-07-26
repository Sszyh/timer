
const args = process.argv.slice(2)

for (let elm of args) {
  if (elm > 0 && elm != "") {
    setTimeout(() => {
      console.log(`${elm} seconds`);
      process.stdout.write('\007');
    }, elm * 1000);
  }
}

