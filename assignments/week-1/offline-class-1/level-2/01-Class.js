
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType(){
    console.log("static method -> it is only associated with class and can be accesed via class not object")
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog=new Animal("dog",2)
console.log(dog.describe())
console.log(Animal.myType())


