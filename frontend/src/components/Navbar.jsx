function Navbar() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#2563eb",
          fontSize: "2.2rem",
        }}
      >
        📝 Todo Application
      </h1>

      <p style={{ color: "#666" }}>
        Organize your daily tasks efficiently.
      </p>
    </header>
  );
}

export default Navbar;