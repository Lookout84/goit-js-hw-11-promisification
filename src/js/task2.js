const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = new Promise(
    allUsers.call((user) =>
      user.name === userName ? { ...user, active: !user.active } : user,
    ),
  );

  return updatedUsers;
};

console.log(updatedUsers);

const logger = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
