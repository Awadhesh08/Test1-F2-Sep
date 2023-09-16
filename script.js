const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 21, profession: "admin" },
  ];
  
  // 1. Print Developers......Done
  function printDeveloper() {
    const developers = data.filter((person) => person.profession === "developer");
    developers.forEach((developer) => {
      console.log(
        `Name: ${developer.name}, Age: ${developer.age},Profession:${developer.profession}`
      );
    });
  }
  
  // 2. Add Data ......Done
  function addData() {
    newData = {
      name: prompt("Enter a name:"),
      age: parseInt(prompt("Enter an age:")),
      profession: prompt("Enter a profession:"),
    };
    data.push(newData);
    console.log(data);
  }
  
  // 3. Remove Admins......Done
  function removeAdmin() {
    const filteredData = data.filter((person) => person.profession !== "admin");
    console.log("Admins Removed: ", filteredData);
  }
  
  // 4. Concatenate Array......Done
  function concatenateArray() {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const concatenated = arr1.concat(arr2);
    console.log(concatenated);
  }
  
  // 5. Average Age....Done
  function averageAge() {
    let total_age = 0;
    for (let i = 0; i < data.length; i++) {
      total_age += data[i].age;
    }
    let average_Age = total_age / data.length;
    console.log("Average age: ", average_Age);
  }
  
  // 6. Age Check....Done
  function checkAgeAbove25() {
    const isOlder_25 = data.some((employee) => employee.age > 25);
    if (isOlder_25) {
      console.log("At least one person is older age of 25.");
    } else {
      console.log("No person is older the age of 25");
    }
  }
  
  // 7. Unique Professions......Done
  function uniqueProfessions() {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (arr.includes(data[i].profession) == true) {
        continue;
      } else {
        arr.push(data[i].profession);
      }
    }
    console.log(arr);
  }
  
  // 8. Sort by Age......Done
  function sortByAge() {
    data.sort((a, b) => {
      return a.age - b.age;
    });
    console.log("Sorted By age: ", data);
  }
  
  // 9. Update Profession......Done
  function updateJohnsProfession() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === "john") {
        data[i].profession = "manager";
        console.log(data[i]);
        console.log("Updated successfully");
      }
    }
  }
  
  // 10. Profession Count......Done
  function getTotalProfessions() {
    let developerCount = 0;
    let adminCount = 0;
    for (let i = 0; i < data.length; i++) {
      const profession = data[i].profession;
      if (profession === "developer") {
        developerCount++;
      } else if (profession === "admin") {
        adminCount++;
      }
    }
    console.log("Total Developers", developerCount);
    console.log("Total Admins", adminCount);
  }
  