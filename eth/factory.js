// Preconfigured instance of CampaignFactory
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4FDa7192f0d7b50F8f9DD10618856BdF03697AF4'
);

export default factory;