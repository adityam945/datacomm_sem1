const { count } = require("console");

let completeDataArrayNoise = [];
let completeDataArrayProject1Sample = [];
let FinalDataArray = [];


let sampleTotal = 10000;
async function f(path) {
  const fsPromises = require("fs").promises;
  const data = await fsPromises
    .readFile(path)
    .catch((err) => console.error("Failed to read file", err));
  let data_string = data.toString();
  let data_Array = data_string.split("\n");
  
  return data_Array;
}
async function run() {
    completeDataArrayNoise = await f("proj2_noisesignal1.txt");
    completeDataArrayProject1Sample = await f("proj1_testsignal1.txt");

  let count =0;
    for(var i = 0;  i < completeDataArrayNoise.length; i ++){
        // for(var j = 0;  j < completeDataArrayProject1Sample.length; j ++){
            FinalDataArray[i] = Number(completeDataArrayNoise[i]) + Number(completeDataArrayProject1Sample[i]);
        // }        
    }
    console.log(FinalDataArray);

    // FinalDataArray.forEach(function(a){console.log(a)})

    var fs = require('fs');

    var file = fs.createWriteStream('array.txt');
file.on('error', function(err) { /* error handling */ });
FinalDataArray.forEach(function(v) { file.write(v + '\n'); });
file.end();
}
run();

module.exports = {run}