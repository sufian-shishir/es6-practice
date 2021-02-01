class Parent {
    constructor(){
        this.fatherName = "Hazrat";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child('ALif');
const baby2 = new Child('Araf');
console.log(baby.getFullName());
console.log(baby2.getFullName());