class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet() {
        console.log('hello my name is ' + this.name)
    }
}

const adam = new Person('Adam', 29)

const janja = new Person('Janja Garnbret', 23)

adam.greet() // se imprime hello my name is Adam
janja.greet() // imprime hello my name is Janja Garnbret
