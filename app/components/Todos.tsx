'use client';

import { useTodos } from '../services/queries';
import { Todo } from '../types';

const Todos = () => {
  const { data, error, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!data) return <div>No data</div>;

  return (
    <div>
      <h3>Todos</h3>

      <ul>
        {data.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
