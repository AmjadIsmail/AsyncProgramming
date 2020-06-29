console.log("Before Prepare food");


function StartPreparation(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Preparation of Food");
                resolve("Preparation of Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }
            
        },10);
    });

    return promise;
}



function prepareFood(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }
            
        },10);
    });

    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Frensh Toast");
            resolve("French Toast is Ready");
        },20);
    });
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    });
    return promise;
}

let promise = StartPreparation(0);
//console.log("Promise = ",promise);
promise.then(function (value){
    console.log("Food Start Preparation callback = ",value);
    return prepareFood(value);
})
.then(function (preparedFoodValue){
    console.log("Food is Ready callback = ",preparedFoodValue);
    return prepareFrenchToast();
})
.then(function (frenchToastValue){
    console.log("French Toast is Ready callback = ",frenchToastValue);
    return prepareCoffee();
})
.then(function (coffeeValue){
    console.log("Coffee is Ready callback = ",coffeeValue);
})
.catch(function (error){
    console.log("Error = ",error);
});



console.log("After Prepare food dinner is ready");