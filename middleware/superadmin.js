
const auth = require('./auth')

const superadmin = async(req, res, next) => {
    try {
        auth(req, res, function(){
            if(req.user.isAdmin){
                next()
            }
            else {
            return res.status(401).send({error: "Token valid, but you don't have the right permission to access this resource"});
            }
        })
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = superadmin