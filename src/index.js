class Person {
  constructor(name, age, gender, description) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.description = description;
  }
}

const people = new Map();
createRandomPerson();
function createRandomPerson() {
  const person1 = new Person("Lok", 27, "male", "software devaloper");
  const person2 = new Person(
    "Dylan",
    20,
    "male",
    "software devalopment instructor"
  );
  const person3 = new Person("Hether", 21, "female", "nurse");
  people.set(person1.name, person1);
  people.set(person2.name, person2);
  people.set(person3.name, person3);
}

function createElement(person) {
  const div = document.createElement("div");
  div.className = "person";
  // name & summary
  const h1 = document.createElement("h1");
  h1.innerHTML = person.name;
  const p = document.createElement("p");
  p.innerHTML = person.description;

  const ul = document.createElement("ul");
  const age = document.createElement("li");
  age.innerHTML = person.age;
  const gender = document.createElement("li");
  gender.innerHTML = person.gender;

  //   put everything inside div
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(ul);

  //   put age & gender inside ul
  ul.appendChild(gender);
  ul.appendChild(age);
  document.getElementById("people").appendChild(div);
}

function loadPerson(name) {
  const person = people.get(name);
  if (person) {
    createElement(person);
  }
}
people.forEach((person) => loadPerson(person.name));
