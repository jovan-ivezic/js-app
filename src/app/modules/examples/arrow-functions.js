export default class ArrowFunction {

    constructor() {
        
    }

    init() {
       const button = document.getElementById('button');

       button.addEventListener('click', function() {
           console.log(this);
       });

       button.addEventListener('click', () => {
           console.log(this);
       });
    }
}

