//this is nothing but all the examples which through i've learnt
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

//let's create new object
const student = {
    fullName: "Rahul",
    marks: 94.4,
    printMarks: function(){
        console.log("Marks:",this.marks); //this.marks ~ student.marks 
    },
};
//in js array is optionally an object

//class is a program code temple for creating objects and that is also is like blueprint
//and contains some state(variables) and some behavior (functions )
class myClass{
    myClass(a,b){     //this is how we create a constructor
        this.a = a;
        this.b = b;
    }
    startFunction(){
        console.log("start");
    }
    endMethod(){
        console.log("End");
    }
}

const objectClass = new myClass(); //this is how we can create an object for a class
objectClass.myClass("New 1");