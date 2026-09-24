import { User } from "./models/User";

const user = new User({
  name: 'Billy',
  age: 20
});

user.on('click', () => {
  console.log('hey');
});

user.on('click', () => {
  console.log('you');
});

user.on('click', () => {
  console.log('guys');
});

user.trigger('click');