const jwt = require('jsonwebtoken');

module.exports = {
    authenticate: (req, res, next) => {
        jwt.verify(req.cookies.usertoken, process.env.JWT_SECRET,
            // Once we compare the unhashed version of the cookie, run this callBack function

            (err, payload) => {
                if(err) {
                    //Then this is not a valid token or the cookie doesnt rly exist
                    res.status(401).json({verified:false})
                }else{
                    //error is null so the user is verified
                    console.log("All good to proceed")
                    next();
                }
            }
            )
        
    }
}