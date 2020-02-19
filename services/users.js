var User = require('../models/users');
const { ErrorHandler } = require('../utilities/error');



class UserService {
    async getUsers (query, page, limit) {
        try {
            var users = await User.find(query);
            return users;
        } catch (e) {
            // Log Errors
            throw new ErrorHandler(400,'Error while Paginating Users');
        }
    }
    async createUser (body) {
        try{
            // console.log(body);
            let newUser = new User();
            Object.keys(body).forEach(k => {
                newUser[k] = body[k];
            });
            return await newUser.save();       
        }
        catch(err){
            throw new ErrorHandler(400, err);
        }
    }

    async updateUser (userId, body) {
        try{
            let user = await User.findOne({ '_id': userId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    user[k] = body[k];
                }
            });
            return user.save();
        }
        catch(err){
            throw new ErrorHandler(400,'Error updating user');
        } 
    }

    async getUserByCredentials (email, password){
        try{
            return await User.findByCredentials(email, password);
        }
        catch(err){
            throw new ErrorHandler(400,'Error retrieving user');
        }
    }
}


module.exports = new UserService();