const UserService = require('../../services/users');   

class UserController{
    async getUsers (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            var query = {'role' : 'user'}; 
            var users = await UserService.getUsers(query, page, limit);
            return res.status(200).json({ status: 200, data: users, message: 'Succesfully Users Retrieved' });
        } catch (error) {
            res.processError(400, error);
        }
    }
    async deleteUser (req, res) {
        try {
            var user = await UserService.deleteUser(req.params.id);
            return res.send(user);
        } catch (error) {
            res.processError(400, error);
        }
    }
    
}


module.exports = new UserController();
