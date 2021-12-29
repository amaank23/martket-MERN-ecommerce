const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg: 'No Token, Autherization Denied' });
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtToken'));

        if(decoded.role === 'admin'){
            next();
        }
        req.customer = decoded.customer_id;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not Valid' });
    }
}