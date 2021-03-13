let anyObject = new Object();
anyObject = {
  name: "Nikita",
  lastName: "Khobotov",
  age: 25,
  isStudent: true,
  doneTask: [1, 2, 3, 4, 5, 6],
  passport: {
    name: "Nikita",
    lastName: "Khobotov",
    birthday: "14.08.1995",
    resident: "Russian Federation",
  },
};
delete anyObject.lastName;
