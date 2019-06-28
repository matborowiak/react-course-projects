class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hello ${this.name}`
    }
}

const me = new Person('Mateusz Borowiak', 29)
console.log(me)

const other = new Person()
console.log(other)

console.log(me.getGreeting())