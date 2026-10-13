import { User } from './models/User';

const user = new User({ name: 'Delilah', age: 1 });

user.events.on('change', () => {
  console.log('hi');
});

user.events.trigger('change');