function receivesAFunction(callback){

    callback()
}

function myCallbak(){

}
receivesAFunction(myCallbak)

function returnsANamedFunction(){

    function myCallbak(){
        console.log("test")
    }
    return myCallbak;
}

const myfunction  = returnsANamedFunction();

myfunction()

function returnsAnAnonymousFunction (){
   return  function(){
        console.log("test")
     }

}