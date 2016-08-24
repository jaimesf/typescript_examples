interface Person {
    firstNameInterface: string;
    lastNameInterface: string;
}

function greeterInterface(person: Person) {
    return "Hello, " + person.firstNameInterface + " " + person.lastNameInterface;
}

let userInterface = { firstNameInterface: "Jane", lastNameInterface: "Doe" };

document.body.innerHTML = greeterInterface(userInterface);
