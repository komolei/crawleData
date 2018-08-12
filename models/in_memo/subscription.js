class SubScription {
    constructor( id, url ) {
        this.id = id;
        this.url = url;

    }

    static list( query ) {
        return SubScription.subScriptions
    }

    static insert( id, url ) {
        const item = new SubScription(id, url)
        SubScription.subScriptions.push(item)
        return item;
    }

    static findByUserId( id ) {
        return SubScription.subScriptions.map(item => item.id === id)
    }

}

SubScription.subScriptions = []

module.exports = SubScription;