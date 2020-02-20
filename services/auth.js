var User = require('../models/users');
const { ErrorHandler } = require('../utilities/error');



class AuthService {
    async getUserByCredentials (email, password){
        try{
            return await User.findByCredentials(email, password);
        }
        catch(err){
            throw new ErrorHandler(400,'Error retrieving user');
        }
    }
}

module.exports = new AuthService();

