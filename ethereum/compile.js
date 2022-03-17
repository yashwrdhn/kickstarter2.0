const fs = require('fs-extra');
const path = require('path');
const solc = require('solc');

//removing build directory
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//extracting contract and compiling 
const campaignPath = path.resolve(__dirname,'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source,1).contracts;

//creating build directory
fs.ensureDirSync(buildPath);

//writng the contract bytecode into json file 
for(let contract in output){
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':','') +'.json'),
		output[contract]
	);	
}
