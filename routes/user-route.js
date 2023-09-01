const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const userController = require('../controller/user_controller');

router.post('/create-user' ,  userController.createUser)

router.get('/sign-up' ,userController.signup)

router.get('/sign-in' , userController.signin);

router.post('/create-session' , passport.authenticate('local' , {
    failureRedirect: '/'
}) , userController.createSession);

router.get('/profile/:id' , userController.profile);

router.get('/sign-out' , userController.signout)

router.get('/auth/google' , passport.authenticate('google' , {scope: ['profile' , 'email']}))

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/sign-in' }), userController.createSession);

module.exports = router;