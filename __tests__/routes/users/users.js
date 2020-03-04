const app = require('../../../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
const User = require('../../../models/users');

const { setupDB } = require('../../../utilities/test-setup');

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
    it('Should save user to database', async done => {
        const res = await request.post('/api/1/users/auth')
            .send({
                password: 'Zell',
                email: 'testing@gmail.com'
            });
        // console.log(res);
        expect(res.status).toBe(201);
        // expect(res.body.email).toBeTruthy();
        const user = await User.findOne({ email: 'testing@gmail.com' });
        // expect(user.name).toBeTruthy()
        expect(user.email).toBeTruthy();

        done();
    });
});