import { User } from "./models/User";

const user = new User({
  name: 'Billy',
  age: 20
});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({
  name: 'Amanda',
  age: 21
});

console.log(user.get('name'));
console.log(user.get('age'));