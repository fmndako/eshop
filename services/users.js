var User = require('../models/users');
const { ErrorHandler } = require('../utilities/error');



class UserService {
    async getUser (userId) {
        try {
            return await User.findOne({'_id': userId});
        } catch (e) {
            throw new ErrorHandler(400,'Error while Paginating Users');
        }
    }
    async getUsers (query, page, limit) {
        try {
            var users = await User.find(query).skip(page).limit(limit);
            return users;
        } catch (e) {
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

    async deleteUser (userId){
        try{
            return await User.deleteOne({'_id': userId});
        }
        catch(err){
            throw new ErrorHandler(400,'Error Deleteing user');
        }
    }
}




module.exports = new UserService();