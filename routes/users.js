const UserController = require('../controller/users');
const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')
const superadmin = require('../middleware/superadmin')

const router = express.Router()

router.get('/', superadmin, async (req, res) => {
  //superadmins can view all users
  try {
      users = await UserController.getAllUsers()
      res.status(201).send({ users })
  } catch (error) {
      res.status(400).send(error)
  }
})
router.post('/', async (req, res) => {
    // Create a new user
    try {
        let user = await UserController.createUser(req.body)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/profile', auth, async(req, res) => {
  // View logged in user profile
  try{
    res.send(req.user)
  }
  catch(error){
    res.status(400).send(error)
  }
})

router.put('/profile', auth, async(req, res) => {
  // update user profile
    try {
      console.log(req.user, req.body)
      let user = await UserController.updateUser(req.user._id, req.body)
      res.status(201).send({user})
  } catch (error) {
      res.status(400).send(error)
  }
})

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})

router.post('/logout', auth, async (req, res) => {
  // Log user out of the application
  try {
      req.user.tokens = req.user.tokens.filter((token) => {
          return token.token != req.token
      })
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
})

router.post('/logoutall', auth, async(req, res) => {
  // Log user out of all devices
  try {
      req.user.tokens.splice(0, req.user.tokens.length)
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
})
module.exports = router