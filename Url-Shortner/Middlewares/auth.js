const {getUser} = require('../Services/auth')


async function restrictedToLoginOnly(req, res, next){
    const id = req.cookies?.uid

    if(!id) return res.redirect('/login')
    const user = getUser(id)

    if(!user) return res.redirect('/login')
    req.user = user

    next()
}

async function checkAuth(req, res, next){
    const id = req.cookies?.uid
    const user = getUser(id)

    
    req.user = user

    next()
}




module.exports = {
    restrictedToLoginOnly,
    checkAuth
}