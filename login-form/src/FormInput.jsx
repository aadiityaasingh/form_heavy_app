function FormInput({label, name, type = "text", value, onChange, error}) {
    return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label><br />

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "8px",
          border: error ? "1px solid red" : "1px solid #ccc"
        }}
      />

      {error && (
        <p style={{ color: "red", fontSize: "12px", margin: "5px 0 0" }}>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormInput;