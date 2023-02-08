"use strict";

class Person {
  constructor(nameArg, ageArg) {
    this.name = nameArg;
    this.age = ageArg;
  }

  showInfo() {
    return `${this.name} is ${this.age} years old.`
  }
}

const person1 = new Person("Emanuela", 18);
console.log(person1);
const infoPerson1 = person1.showInfo();
console.log(infoPerson1);



/* Im folgenden Code existiert die Klasse Person. Deine Aufgabe ist es, den Code zuende zu schreiben.
Du musst die Constructor-Methode programmieren. Diese soll einen Namen (string) und ein Alter (number) als Parameter akzeptieren. 
Die Methode Info() soll den Namen und das Alter als Zeichenkette zurückgeben.
Instanziiere ein Objekt mit dieser Klasse und rufe die Info-Methode auf. Der Wert soll in der Konsole ausgegeben werden.
 */