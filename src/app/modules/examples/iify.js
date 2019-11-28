export default class IIFYExample {

    constructor() {
        this.run();
    }

    run() {

        //This will return undefined
        (function() {
            console.log(this);
        })();

        //This will return object IIFYExample
        (function() {
            console.log(this);
        }).call(this);

        //This will return object IIFYExample using arrow functions
        (() => {
            console.log(this);
        }).call(this);

        //IIFY can be asigned to variables
        var result = (function() {
            return "Result";
        })();

        console.log(result);

        //iifys can take arguments when invoked:
        (function IIFY(msg,times){
            for(var i=1;i<=times;i++) {
                console.log(msg);
            }
        })("Zdravo prijatelju!", 8);
    }
}