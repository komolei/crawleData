const users = [];

class User {
    constructor( firstName, lastName, age ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        User.id += 1;
        this._id = User.id;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`
    }

    static insert( firstName, lastName, age ) {
        const u = new User(firstName, lastName, age)
        User.users.push(u);
        return u;
    }

    static getOneByName( firstName, lastName ) {
        return User.users.find(item => item.firstName === firstName && item.lastName === lastName)
    }

    static list( query ) {
        return User.users
    }

    static getUserById( userId ) {
        return User.users.find(item => item._id === userId)
    }

    static get['users']() {
        return users;
    }
}
User.id = 0;
// User.users=[]
module.exports = User;
// console.log('user', User.list())
// console.log(User.insert('s', 'x', 25))
// console.log(User.insert('ss', 'xx', 25))
// console.log(User.insert('sss', 'xxx', 25))
// console.log('user', User.list())
// console.log('------');
// console.log(User.getOneByName('ss', 'xx'))