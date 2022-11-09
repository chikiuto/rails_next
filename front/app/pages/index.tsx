import { useState } from 'react';

type Todo = {
  value: string;
  readonly id: number;
  removed: boolean;
};

type Filter = "all" | "removed";

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // todosステイトを更新する関数
  const handleOnSubmit = () => {
    // 何も入力されていない時
    if (text === "") {
      alert("文字を入力してください");
    return;
    }
    //新しい Todo を作成 
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      removed: false,
    };
    setTodos([newTodo, ...todos]);
    //フォームへの入力をクリアする
    setText('');
  };

  // formに入力更新された時更新する関数
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 削除ボタンがクリックされた時更新する関数
  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy: Todo[] = JSON.parse(JSON.stringify(todos));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // ゴミ箱を空にする時更新する関数
  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  // フィルター
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return !todo.removed;
      case "removed":
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div className="w-full mx-auto max-w-2xl my-6 px-3">
      <select
        defaultValue="all"
        onChange={(e) => setFilter(e.target.value as Filter)}
      >
        <option value="all">すべてのタスク</option>
        <option value="removed">ゴミ箱</option>
      </select>
      {filter === "removed" ? (
        <button
          onClick={handleOnEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
        ゴミ箱を空にする
        </button>
      ) : (
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input  
          className="border border-black" 
          type="text" 
          value={text} 
          onChange={(e) => handleOnChange(e)} />
        <input
          type="submit"
          value="追加"
          onSubmit={handleOnSubmit}
        />
      </form>
      )}
      <ul>
        {filteredTodos.map((todo) => {
          return (
          <li key={todo.id}>
            {todo.value}
            <button onClick={() => handleOnRemove(todo.id, todo.removed)}>
              {todo.removed ? "復元" : "削除"}
            </button>
          </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;