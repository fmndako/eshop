"use strict";
const UserService = require('../services/users/users')   

class UserController{
    getUsers = async function (req, res, next) {
        // Validate request parameters, queries using express-validator
        
        var page = req.params.page ? req.params.page : 1;
        var limit = req.params.limit ? req.params.limit : 10;
        try {
            var users = await UserService.getUsers({}, page, limit)
            return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
        } catch (error) {
            res.processError(400, error)

        }
    }
    createUser = async function (req, res, next) {
        try {
            console.log(req.body)
            let user = await UserService.createUser(req.body)
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (error) {
            res.processError(400, error)
        }
    }
    getProfile = async function (req, res, next) {
        try{
            res.send(req.user)
        }
        catch(error){
            res.processError(400, error)
        }
    }
    updateProfile = async function (req, res, next) {
        try {
            let user = await UserService.updateUser(req.user._id, req.body)
            res.status(201).send({user})
    } catch (error) {
        res.processError(400, error)
    }
    }
    login = async function (req, res, next) {
        try {
            console.log(req.body)
            const { email, password } = req.body
            const user = await UserServices.getUserByCredentials(email, password)
            if (!user) {
                return res.processError(401, 'Login failed! Check authentication credentials')
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            res.processError(400, "error")
        }     
    }
    logout = async function (req, res, next) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token != req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
            res.processError(400, error)
        }
    }    
    logoutAll = async function (req, res, next){
            try {
                req.user.tokens.splice(0, req.user.tokens.length)
                await req.user.save()
                res.send()
            } catch (error) {
                res.processError(400, error)
            }
    }
}


module.exports = new UserController();
