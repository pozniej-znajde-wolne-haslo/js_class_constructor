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

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const examCheckInput = document.querySelector('input[name="examCheck"]');
const submitBtn = document.getElementById("button");
const resultOutput = document.getElementById("result");


class PersonFormHTML extends Person {
  constructor(nameArg, ageArg, examCheckArg) {
    super(nameArg, ageArg);
    this.examCheck = examCheckArg;
    /* let inputTxt = this.name; */
  }

  write() {
    switch (this.name && this.age && this.examCheck) { // this.examCheck statt arguemnt selbst!!!
      case true && true && true:
        resultOutput.innerHTML += `<li style="color: black;">${this.name}, ${this.age} years old</li>`;
       /*  resultOutput.style.color = "black";  */ //so geht's ned - werden alle li's im HTML in die farbe gepackt
        break;
      case true && true && false:
        resultOutput.innerHTML += `<li style="color: red;">${this.name}, ${this.age} years old</li>`;
        break;
      default:
        resultOutput.innerHTML += `<h4 style="color: black;">Incomplete form entries</h4>`
    }
  }
}

let newPerson;

const createObject =  () => {
  newPerson = new PersonFormHTML(nameInput.value, ageInput.value, examCheckInput.checked);
  // 'examCheckInput.value' funktioniert nicht (mit dem 'hidden-input' ausm html WHY??)
  console.log(newPerson); // kein return hier!!???
  newPerson.write();
};

submitBtn.addEventListener("click", createObject);




 /*  return !this.examCheck ? resultOutput.style.color = "red" : resultOutput.style.color = "black"; */
  
    /*  function allletter (nameInput) {
    let letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)) {
      return true;
    } else {
      return false;
    }
  } */

 /*  allletter(); */


/* 
Erweitere die Klasse Person aus der vorherigen Aufgabe.
Füge die Methode write() hinzu. Diese soll die Eigenschaften der Person ins HTML schreiben
Erstelle ein HTML-Formular mit den Feldern Name, Alter und Prüfung bestanden? 
und einen Button Person erstellen
Beim Abschicken des Formulars soll ein neues Objekt erstellt werden und die write() Methode aufgerufen werden.
Hat eine Person die Prüfung nicht bestanden, soll der Name in roter Schrift angezeigt werden */