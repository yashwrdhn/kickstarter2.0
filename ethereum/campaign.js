import web3 from './web3';
import CampaignFactory from './build/Campaign.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        address
    );
};