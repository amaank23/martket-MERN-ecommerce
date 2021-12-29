const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg: 'No Token, Authorization Denied' });
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtToken'));

        if(decoded.role === 'customer'){
            return res.status(401).json({ msg: 'Authorization Denied, You do not have necessary permission to access this route' });
        }

        req.user = decoded.user_id;
        req.role = decoded.role;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not Valid' });
    }
}