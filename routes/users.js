const express = require('express');
const logger = require('../logger/logger');
const UserController = require('../controller/users');

var router = express.Router();

router.route('')
.get(function(req, res) {
  UserController.getAllUsers().then((resp)=>{
    res.send(resp)
  });
})
.post(function(req, res) {
});

router.route('/:article_id')
    .get(function(req, res) {
        
    }).put(function(req, res) {

      })
    .delete(function(req, res) {

    });

module.exports = router;