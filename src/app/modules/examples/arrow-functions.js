export default class ArrowFunction {

    constructor() {
        this.init();
    }

    init() {
        var materijali = ['bakar', 'olovo', 'cink'];
        console.log(materijali.map(materijal => materijal.length));
    }
}

