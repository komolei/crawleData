const express = require('express');
const router = express.Router();
const User = require('../models/in_memo/user')
const UserService = require('../services/user_service');
router.use('/', ( req, res, next ) => {
    console.log('mw1');
    // next('router'); // 当next中的字符串为router的时候，会结束本下面的处理,则在命令行中只会输出nw1
    next(); // 这则会输出mw1,mw2
})

router.post('/', ( req, res, next ) => {
    const { firstName, lastName, age } = req.body;
    UserService.addUser(firstName, lastName, age)
    console.log(UserService.getAllUsers())
    res.send('insert success');
})

router.get('/:userId', ( req, res, next ) => {
    const user = UserService.getUserById(Number(req.params.userId))
    res.locals.user = user;
    res.render('user');
})

router.post('/:userId/subscription', ( req, res, next ) => {
    const { url } = req.body;
    try {
        const sub = UserService.createSubScription(Number(req.params.userId), url)
        res.json(sub);
    } catch (e) {
        next(e)
    }


})

router.get('/', ( req, res, next ) => {
    console.log('mw2');

    // res.send('router2');

    // const user = new User(req.query.firstName, req.query.lastName, req.query.age)

    res.locals.users = UserService.getAllUsers();
    res.render('users');
})


router.use(( err, req, res, next ) => {
    res.send(err);
})

module.exports = router;