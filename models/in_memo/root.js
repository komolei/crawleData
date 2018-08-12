class Root {
    constructor( command ) {
        Root._id += 1;
        this.id = Root._id;
        this.command = command;
    }

    static getRootById( rootId ) {
        return Root.roots.find(item => item.id === rootId)
    }

    static insert( command ) {
        const root = new Root(command)
        Root.roots.push(root);
        return root;
    }

    static list( query ) {
        return Root.roots;
    }

    static delRootById( rootId ) {
        const user = Root.getRootById(rootId)
        Root.roots.splice(Root.roots.findIndex(item => item.id === rootId), 1)
        return user;
    }
}


Root.roots = [];
Root._id = 0;
module.exports = Root;