import jwt from "jsonwebtoken"

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const headerToken = req.headers.authorization || req.headers.atoken || req.headers.aToken;

        if (!headerToken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const token = headerToken.startsWith('Bearer ')
            ? headerToken.split(' ')[1]
            : headerToken;

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;