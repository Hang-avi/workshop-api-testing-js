const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {

    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
    });

    it('Consume GET Service with query parameters', async () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };

        const response = await agent.get('https://httpbin.org/get').query(query);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);
    });

    it('Consume HEAD Service', async () => {
        const response = await agent.head('https://httpbin.org/headers');

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).empty;
    });

    it('Consume PATCH Service', async () => {
        const user = {
            name: 'Carlos',
            type:'frecuent'
        }

        const response = await agent.patch('https://httpbin.org/patch').query(user);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(user);
    });

    it('Consume DELETE Service', async () => {
        const product = {
            type:'Chips and candy',
            name: 'AirChips',
            description: 'Bags of chips with natural flavor'
        }

        const response = await agent.delete('https://httpbin.org/delete').query(product);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(product);
    });
});