const User = require('../models/user');

module.exports.createUser  = function(req , res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    User.create(req.body);
    return res.render('sign-in');
}


module.exports.signin = function(req , res){
    if(req.isAuthenticated()){
        
        return res.redirect('/');
    }
    return res.render('sign-in');
}

module.exports.signup = function(req , res){
    if(req.isAuthenticated()){

        
        return res.redirect('/');
    }
    return res.render('sign-up')
}

module.exports.createSession =  function(req , res){
   
       return res.redirect('/')
    
  
}

module.exports.profile = async function(req , res){
    const user = await User.findById(req.params.id)
    console.log(`req . user from profile ${req.user}`);
    return res.render('profile' , {
        user: user
    });
}

module.exports.signout = function(req  ,res){
    req.logout(function(err){
        if(err){
            console.log('error from signout');
        }
        return res.redirect('/')
    })
}