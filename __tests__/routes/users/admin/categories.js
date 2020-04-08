const app = require('../../../../index'); // Link to your server file  ../../../../index'
const supertest = require('supertest');
const request = supertest(app);
const Categories = require('../../../../models/category');

const { setupDB } = require('../../../../utilities/test-setup');

// Setup a Test Database
setupDB('endpoint-testing');

describe('App Endpoints', () => {
    it('simple test', () => {
        expect(1).toBe(1);
    });
    it('gets the test endpoint', async done => {
        var response = await request.get('/');
      
        expect(response.status).toBe(200);
        expect(response.text).toBe('App works!!');
        done();
    });
    it('Should create a product category', async done => {
        const res = await request.post('/api/1/admin/categories')
            .send({
                name: 'Alpha boots',
                description: 'For super short ladies'
            });
        // console.log(res);
        expect(res.status).toBe(200);
        // expect(res.body.email).toBeTruthy();
        const item = await Categories.findOne({ description: 'For super short ladies' });
        // expect(user.name).toBeTruthy()
        expect(item.description).toBeTruthy();

        done();
    });
});