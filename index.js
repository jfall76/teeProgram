var fs = require('fs');
var material = "";

console.log("Enter your text. Your results will be saved to test.txt. Press Cntrl-C to exit:");
process.stdin.on( 'data', function( material ){
  //exit program when user enters ctrl-c
  if ( material === '\u0003' ) {
    process.exit();
  }
  process.stdout.write(material);
  fs.writeFileSync("./test.txt", material);
});