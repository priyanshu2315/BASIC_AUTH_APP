
module.exports.home = function(req , res){
    console.log(`req . user from home function ${req.user}` );
    return res.render('homePage');
    
}


