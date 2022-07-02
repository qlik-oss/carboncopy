#!/usr/bin/env node
const {exec} = require('child_process');
var fs = require('fs');
const args = process.argv.slice(2);
console.log(args);
const myShellScript = exec(`npx react-native init ${args[0]}  --template https://github.com/qlik-oss/carboncopy`);
myShellScript.stdout.on('data', (data)=>{
    console.log(data);
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});

myShellScript.on('exit', () => {
  const snType = args[1];
  fs.writeFileSync(`${args[0]}/config.json`, JSON.stringify({snType}), {encoding: 'utf-8'});
});
