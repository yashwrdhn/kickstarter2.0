import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

// const address = '0x3cD177Bf1B7Ba92E5B14A99A14A749644E852a81';
const address = '0xCA7740C40E82f945D4e48b9Cf2475c2674B2813D';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
address);

export default instance;