class StudentClass {
    fullNameClass: string;
    constructor(public firstNameClass, public middleInitialClass, public lastNameClass) {
        this.fullNameClass = firstNameClass + " " + middleInitialClass + " " + lastNameClass;
    }
}

interface PersonClass {
    firstNameClass: string;
    lastNameClass: string;
}

function greeterClass(person : PersonClass) {
    return "Hello, " + person.firstNameClass + " " + person.lastNameClass;
}

var userClass = new StudentClass("Jane", "M.", "Doe");

document.body.innerHTML = greeterClass(userClass);
