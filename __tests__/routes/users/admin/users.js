const app = require('../../../../index'); // Link to your server file  ../../../../index'
const supertest = require('supertest');
const request = supertest(app);

const {
    setupDB
} = require('../../../../utilities/test-setup');

// Setup a Test Database
setupDB('endpoint-testing');

describe('App Endpoints', () => {
    it('simple test', () => {
        expect(1).toBe(1);
    });
    it('gets the test endpoint', async done => {
        var response = await request.get('/api/1/admin/');

        expect(response.status).toBe(200);
        expect(response.text).toMatch(/Users retrieved successfully/);
        done();
    });

});