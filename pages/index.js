import React, { Component } from 'react'
import factory from '../eth/factory'
import { Card, Container } from 'semantic-ui-react'
import Layout from '../components/Layouts'

import {Link} from '../routes'


class CampaignIndex extends Component {
  // specially for next.js, as this component cannot be executed on server-side
  static async getInitialProps() {
    const allCamp = await factory.methods.getDeployedCampaigns().call();

    return { allCamp };
  }


  renderCampaigns() {
    const items = this.props.allCamp.map(
      address => {
        return {
          header: address,
          description: (
            <Link route={`/campaigns/${address}`}>
            <a>View Campaigns</a>
            </Link>
          ),
          fluid: true,
        };
      }
    );
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Container>
        <Layout>
          {this.renderCampaigns()}
        </Layout>   
      </Container>
    );
  }
}

export default CampaignIndex;