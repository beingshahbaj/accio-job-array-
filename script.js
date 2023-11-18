const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log(data)
}

// 2. Add Data
function addData() {
  let name = prompt("Enter the name:");
  let age = prompt("Enter the age:");
  let profession = prompt("Enter the profession:");

  let newData = {
    name: name,
    age: parseInt(age),
    profession: profession
  }

  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
 let newData = data.filter(user => user.profession !== 'admin');
 
  console.log(newData)
}

// 4. Concatenate Array
function concatenateArray() {

  let newData = {
    name: 'shahbaj',
    age: 24,
    profession: 'software developer'

  };

  const concatedArray =  data.concat(newData);
  console.log(concatedArray);
};

// 5. Average Age
function averageAge() {

  const sumOfAge = data.reduce((sum, person) => sum + person.age, 0);
  const avgAge = sumOfAge / data.length;
  console.log(avgAge);
  
}

// 6. Age Check
function checkAgeAbove25() {
  let aboveTwentyFive = data.filter(person => person.age > 25);
  console.log(aboveTwentyFive);
}

// 7. Unique Professions
function uniqueProfessions() {
  let professions = [...new Set(data.map(item => item.profession))];
  console.log(professions);


}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for (let i = 0; i < data.length; i++) {
    
    if (data[i].name === "john") {
      data[i].profession = "manager";
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i].profession === 'developer' || data[i].profession === 'admin' ) {
      count++;
    }
  }
  console.log(count);
}
