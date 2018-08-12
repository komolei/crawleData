const express = require('express');
const router = express.Router();

const UserService = require('../services/user_service');

/* GET users listing. */
router.get('/', function ( req, res, next ) {
    // res.send('respond with a resource');
    console.log('req', req);
});

router.post('/adduser', ( req, res ) => {
    const { firstName, lastName, age } = req.body;
    const user = UserService.addUser(firstName, lastName, age)
    res.locals.user = user;
    res.render('user');
})
router.post('/:userId', ( req, res, next ) => {
    const { userId } = req.params;
    const user = UserService.getUserById(Number(userId));
    console.log('user is', user);

})
router.post('/:userId/subscription', ( req, res, next ) => {
    const { userId } = req.params;
    const { url } = req.body;
    try {
        const sub = UserService.createSubScription(Number(userId), url)
        res.json(sub)
    } catch (e) {
        next(e)
    }
})


module.exports = router;
