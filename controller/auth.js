const AuthService = require('../services/auth');   
const UserService = require('../services/users');   

class UserController{
    async signup (req, res) {
        try {
            let user = await UserService.createUser(req.body);
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.processError(400, error);
        }
    }
    async login (req, res ) {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            const user = await AuthService.getUserByCredentials(email, password);
            if (!user) {
                return res.processError(401, 'Login failed! Check authentication credentials');
            }
            const token = await user.generateAuthToken();
            res.send({ user, token });
        } catch (error) {
            res.processError(400, 'error');
        }     
    }
    async logout (req, res, next) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token;
            });
            await req.user.save();
            res.send();
        } catch (error) {
            res.processError(400, error);
        }
    }    
    async logoutAll (req, res){
        try {
            req.user.tokens.splice(0, req.user.tokens.length);
            await req.user.save();
            res.send();
        } catch (error) {
            res.processError(400, error);
        }
    }
}


module.exports = new UserController();
