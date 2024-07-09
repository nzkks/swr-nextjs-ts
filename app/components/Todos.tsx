'use client';

import { useTodos } from '../services/queries';
import { Todo } from '../types';

const Todos = () => {
  const { data, error, isLoading, size, setSize } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!data) return <div>No data</div>;

  return (
    <div>
      <h3>Todos</h3>

      <div>
        {data.map(todos => todos && todos.length && todos.map((todo: Todo) => <div key={todo.id}>{todo.title}</div>))}

        <button onClick={() => setSize(size + 1)}>Load more</button>
      </div>
    </div>
  );
};

export default Todos;
