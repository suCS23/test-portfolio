class Person{  
    constructor(name = "Su", age = 22, energy = 70){
        this.name = name
        this.age = age
        this.energy = energy
    }

    sleep(){
        (this.energy == 100)? this.energyStatus() : this.energy += 10
    }

    doSomethingFun(){
        (this.energy == 0)? this.energyStatus() : this.energy -= 10
    }

    energyStatus(){
        console.log(`${this.name} energy level is ${this.energy}`, 
            (this.energy == 0)?", they need to sleep >:(":", they can still have some fun :3")
        
    }

    bio(){
        console.log(`Hi!! My name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Worker extends Person{
    constructor(name = "Su", age = 22, energy = 70, hourlywage = 100, xp = 2000){
        super(name, age, energy)
        this.hourlywage = hourlywage
        this.xp = xp       
    }

    goToWork(){
        this.xp += 10
    }
}

function intern(){
    var obj = new Worker("Bob", 21, 120, 0, 10);
    obj.goToWork()
    return obj

}

function manager(){
    var obj = new Worker("Alice", 30, 120, 100, 30);
    obj.doSomethingFun()
    return obj

}

var intern = intern()
var manager = manager()




