"use strict";
const UserModel = require('../models/users');
var logger = require('../logger/logger');

class User{
    async getAllUsers() {
        try{
            return await UserModel.find({}).lean();
        }
        catch(err){
            logger.error(err);
        }
    }
    async getUser(userId) {
        try{
            return UserModel.find({userId: userId});
        }
        catch(err){
            logger.error(err)
        }
    }
    async createUser(body) {
        try{
            let newUser = new UserModel();
            Object.keys(body).forEach(k => {
                newUser[k] = body[k];
            });
            return await  newUser.save();       
        }
        catch(err){
            logger.error(err)
        }
    }

    async updateUser(userId, body) {
        try{
            let user = await UserModel.findOne({ '_id': userId })
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    user[k] = body[k];
                }
                });
            return user.save()
            }
        catch(err){
            logger.error(err)
        } 
    }

    async deleteUser(userId) {
        try{

        }
        catch(err){
            logger.error(err)
        }
    }
}


module.exports = new User();
