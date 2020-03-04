const UserService = require('../../services/users');
const UserModel = require('../../models/users');

const { setupDB } = require('../../utilities/test-setup');
setupDB('user-service-testing');


describe('User Service', () => {

    it('Testing user service', async done => {
        
        let t = {};
        t.firstName = 'old1 user';
        t.email = 'i@ermrafil.com';
        t.lastLast = 'ndako';
        t.password = 'jldgjfd';
        // create 
        let res = await UserService.createUser(t);
        let id = res._id;
        expect(res._id).toBeTruthy();
        let models = await UserModel.find();
        expect(models.length).toBe(1);
        
        // get all
        let users = await UserService.getUsers();
        expect(users.length).toBe(1);

        // get by id
        let user = await UserService.getUser(id);
        expect(user.email).toBe(t.email);

        // update
        t.firstName = 'new Name';
        let updatedUser = await UserService.updateUser(id, t);
        expect(updatedUser.firstName).toBe('new Name');
        
        //delete 
        await UserService.deleteUser(id);
        users = await UserService.getUsers();
        expect(users.length).toBe(0);        
        models = await UserModel.find();
        expect(models.length).toBe(0); 

        
        // limit and skip and query
        let limit = 10;
        users = [];
        for (let i=0; i< 21; i++){
            let user = {};
            user.email = 'fati' + i + '@gmail.com';
            user.password = 'klfklksdjfk';
            users.push(user);
        }
        let results = await UserModel.insertMany(users);
        let skip = 0;
        results = await UserService.getUsers({}, skip, limit);
        expect(results.length).toBe(limit);
        skip = 20;
        results = await UserService.getUsers({}, skip, limit);
        expect(results.length).toBe(1);
        let query = {email:'fati1@gmail.com'};
        results = await UserService.getUsers(query);
        expect(results[0].email).toBeTruthy();
        expect(results[0].email).toBe('fati1@gmail.com');

        done();
    });
});