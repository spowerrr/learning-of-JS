const employee = {
    calTax(){
        console.log("Tax rate is 10%");
    },                                       //both are same to define a function into an object
    // calTax1 : function() {
    //     console.log("Tax rate is 10%");
    // }
};
const karan = {
    salary: 3000,
    calTax(){
        console.log("Tax rate is 20%");
    },
};

karan.__proto__ = employee; //to set a prototype from a first defined object
//if we want to use second function then set prototype for first function
//so we want to use employee's method/function that's why we made prototype of karan object
//if prototype and object have same method then object's method will be used 
console.log(karan.calTax()); //its printing karan's method