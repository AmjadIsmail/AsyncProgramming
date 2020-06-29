console.log("Before Prepare food1");
function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare Food1");
        callback("Food is Ready");
    },10);
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare Frensh Toast");
        callback("French Toast is Ready");
    },20);
}
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is Ready");
    },30);
}

prepareFood(function(value){
    console.log("Food is Ready callback 1 = ",value);
    prepareFrenchToast(function (value){
        console.log("French Toast is Ready callback 2 = ",value);
        prepareCoffee(function (value){
            console.log("Coffee is Ready callback  3= ",value);
        });
    });
});

console.log("After Prepare food dinner is ready");