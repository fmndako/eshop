const UserService = require('../../services/users');   

class UserController{
    async getUser(req, res) {
        try{
            res.send(req.user);
        }
        catch(error){
            res.processError(400, error);
        }
    }
    async updateUser(req, res) {
        try {
            let user = await UserService.updateUser(req.user._id, req.body);
            res.send(user);
        } catch (error) {
            res.processError(400, error);
        }
    }
}


module.exports = new UserController();
