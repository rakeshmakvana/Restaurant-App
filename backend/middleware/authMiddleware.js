const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};



// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// exports.verifyAdmin = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

//         if (!token) {
//             return res.status(401).json({ msg: 'Unauthorized' });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         const user = await User.findById(decoded.id);

//         if (!user || user.role !== 'admin') {
//             return res.status(403).json({ msg: 'Access denied. Admins only.' });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ msg: 'Unauthorized' });
//     }
// };

