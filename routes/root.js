const express = require('express');

const router = express.Router();

const UserService = require('../services/user_service')
router.get('/command/:command', ( req, res, next ) => {
    const { command } = req.params;
    const root = UserService.addRoot(command);
    console.log(UserService.getAllRoot())
    res.locals.root = root;
    res.render('root');
})

router.post('/:rootId', ( req, res, next ) => {
    const { rootId } = req.params;
    try {
        const root = UserService.delRootById(Number(rootId))
        res.json(root);
    } catch (e) {
        next(e)
    }
})

module.exports = router;