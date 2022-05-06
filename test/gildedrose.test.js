const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('gildedrose Api Tests', () => {
  it('Consume GET Service', async () => {
    const response = await agent.get('http://localhost:8080/api/items');

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.
  });
});
