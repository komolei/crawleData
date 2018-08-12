// service这个文件可以对model文件夹中的多个模型进行处理。从而来提供服务

const User = require('../models/in_memo/user');

const SubScription = require('../models/in_memo/subscription')

const Root = require('../models/in_memo/root');
module.exports.getAllUsers = function () {
    return User.list()
}

module.exports.addUser = function ( firstName, lastName, age ) {
    return User.insert(firstName, lastName, age);
}
module.exports.getUserById = function ( userId ) {
    return User.getUserById(userId);
}


module.exports.createSubScription = function ( userId, url ) {
    const user = User.getUserById(userId)
    if (!user) {
        throw new Error('no such user');

    } else {
        const sub = SubScription.insert(userId, url);
        return sub;
    }

}

module.exports.getAllRoot=function(){
    return Root.list()
}
module.exports.addRoot = function ( command ) {
    return Root.insert(command)
}
module.exports.delRootById = function ( id, command ) {
    const root = Root.getRootById(id)
    if (!root) return new Error('no such one');
    const sub = Root.delRootById(id)
    return sub;
}