const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');


provider = new HDWalletProvider(
  'wife marriage tray vivid sister output favorite advance garbage erosion carpet you',
  'https://rinkeby.infura.io/v3/530dba0f5e2340b1b6c0a30a8e0860f0'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log("attempting to deploy from account ", accounts[0]);

const result = await new web3.eth.Contract( JSON.parse(compiledFactory.interface))
	.deploy({ data:	compiledFactory.bytecode, arguments:['hi there']})
	.send({ gas:'1000000', from : accounts[0]});

	console.log("contract deployed to address", result.options.address);
	provider.engine.stop();
};

deploy();