const jwt = require('jsonwebtoken')

const CheckAuth = async (req, res, next) => {
    try {

        let token = req.session.token
        if (!token) return res.status(401).send("unauthorized")
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.user = decoded
        return next();


    } catch (error) { console.log("invailed token or expired"); }
}
module.exports={CheckAuth}