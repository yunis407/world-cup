function freceivesAFunctionunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function greeting(){
        console.log('Hello world');
    }
    return greeting();
}

function returnsAnAnonymousFunction(){
    return function(string){
        console.log(string);
    }
}