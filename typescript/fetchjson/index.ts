import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const { id, title, completed } = response.data as Todo;

  logTodo({id, title, completed});
})

const logTodo = ({ id, title, completed}: Todo): void => {
  console.log(`
    The todo with ID: ${id}
    has a title of: ${title}
    and is completed? ${completed}
  `);
};