function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "15px",
        marginBottom: "12px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#888" : "#222",
          fontWeight: "500",
        }}
      >
        {todo.title}
      </span>

      <div>
        <button
          onClick={() => toggleTodo(todo.id)}
          style={{
            marginRight: "10px",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ✓
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;